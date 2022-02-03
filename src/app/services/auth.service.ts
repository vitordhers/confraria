import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  EMPTY,
  from,
  map,
  Observable,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { Storage } from '@capacitor/storage';
import { Credentials } from 'server/auth/interfaces/credentials.interface';
import { environment } from 'src/environments/environment';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { User } from '../shared/models/user.model';
import { IResponse } from '../shared/interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private _user$ = new BehaviorSubject<User | undefined>(undefined);
  private activeRefreshTokenTimer: any;

  constructor(private http: HttpClient) {
    this.autoLogin().subscribe();
  }

  get userIsAuthenticated$(): Observable<boolean> {
    return this._user$.pipe(map((user) => !!user?.accessToken));
  }

  get userId$() {
    return this._user$.pipe(map((user) => user?.id));
  }

  get accessToken() {
    return from(Storage.get({ key: 'authData' })).pipe(
      take(1),
      map((storedData) => {
        if (!storedData || !storedData.value) {
          return null;
        }

        const parsedData = JSON.parse(storedData.value) as Credentials;

        return parsedData.accessToken;
      })
    );
  }

  get refreshToken() {
    return from(Storage.get({ key: 'authData' })).pipe(
      take(1),
      map((storedData) => {
        if (!storedData || !storedData.value) {
          return undefined;
        }

        const parsedData = JSON.parse(storedData.value) as Credentials;

        return parsedData.refreshToken;
      })
    );
  }

  createUser() {}

  signIn(values: { email: string; password: string; recaptcha: string }) {
    return this.http
      .post<IResponse<Credentials>>(`${environment.apiUrl}/auth/signin`, values)
      .pipe(
        tap((response) => {
          if (response.success && response?.payload) {
            this.setUserData(response.payload);
          }
        })
      );
  }

  setUserData(credentials: Credentials) {
    const decodedToken = this.decodeAccessToken(credentials.accessToken);
    console.log({ decodedToken });
    if (!decodedToken || !decodedToken.exp || !decodedToken.iat) {
      return;
    }

    const user = new User(
      (decodedToken as any).id,
      decodedToken.exp - decodedToken.iat,
      credentials.accessToken,
      credentials.refreshToken
    );

    console.log({ user });

    this._user$.next(user);
    this.storeAuthData(credentials);
    this.autoRefreshToken(user.tokenDuration);
    return user;
  }

  private storeAuthData(userData: Credentials): void {
    const data = JSON.stringify({
      accessToken: userData.accessToken,
      refreshToken: userData.refreshToken,
    });
    Storage.set({ key: 'authData', value: data });
  }

  autoLogin(): Observable<boolean> {
    return from(Storage.get({ key: 'authData' })).pipe(
      map((storedData) => {
        if (!storedData || !storedData.value) {
          return null;
        }
        const parsedData = JSON.parse(storedData.value) as Credentials;

        return this.setUserData(parsedData);
      }),
      tap((user) => {
        if (user) {
          this._user$.next(user);
          this.autoRefreshToken(user.tokenDuration);
        }
      }),
      map((user) => {
        return !!user;
      })
    );
  }

  autoRefreshToken(duration: number): void {
    if (this.activeRefreshTokenTimer) {
      clearTimeout(this.activeRefreshTokenTimer);
    }

    this.activeRefreshTokenTimer = setTimeout(() => {
      this.onRefreshToken().subscribe({
        complete: () => {},
        next: () => {},
        error: (e: any) => {
          if (e) {
            this.logout();
          }
        },
      });
    }, duration * 1000);
  }

  onRefreshToken() {
    return this.refreshToken.pipe(
      switchMap((refreshToken) => {
        if (!refreshToken) {
          return EMPTY;
        }
        return this.http
          .get<IResponse<Credentials>>(`${environment.apiUrl}/auth/token`, {
            headers: {
              'x-refresh-token': refreshToken,
            },
          })
          .pipe(
            map((response) => {
              if (response?.success && response?.payload) {
                const credentials = response.payload;
                this.setUserData(credentials);
                return credentials;
              }
              return undefined;
            })
          );
      })
    );
  }

  logout(): void {
    console.log('logout');
    if (this.activeRefreshTokenTimer) {
      clearTimeout(this.activeRefreshTokenTimer);
    }
    this._user$.next(undefined);
    Storage.remove({ key: 'authData' });
  }

  ngOnDestroy() {
    if (this.activeRefreshTokenTimer) {
      clearTimeout(this.activeRefreshTokenTimer);
    }
  }

  decodeAccessToken(accessToken: string) {
    try {
      const token: JwtPayload = jwt_decode(accessToken);
      return token;
    } catch (e) {
      console.log('decodeAccessToken error');
      return undefined;
    }
  }
}
