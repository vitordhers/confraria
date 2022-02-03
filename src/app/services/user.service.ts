import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResponse } from '../interfaces/response.interface';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  urser$ = new BehaviorSubject<IUser | null>(null);

  constructor(private http: HttpClient) {}

  async createUser(user: IUser) {
    try {
      const source$ = this.http
        .post<IResponse<IUser>>(`${environment.apiUrl}/users`, user)
        .pipe(map((res) => (res.success ? res.payload : undefined)));
      return await firstValueFrom(source$);
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }

  async getUsers() {
    try {
      const source$ = this.http
        .get<IResponse<IUser[]>>(`${environment.apiUrl}/users`)
        .pipe(map((res) => (res.success ? res.payload : undefined)));
      return await firstValueFrom(source$);
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }

  async getUser(id: number) {
    try {
      const source$ = this.http
        .get<IResponse<IUser>>(`${environment.apiUrl}/users/${id}`)
        .pipe(map((res) => (res.success ? res.payload : undefined)));
      return await firstValueFrom(source$);
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }
}
