import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { HttpClient } from '@angular/common/http';
import { EMPTY, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';
import fireToast from '../../shared/functions/fire-toast.function';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  loaders = { submit: false };

  isPasswordShown = false;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private recaptchaV3Service: ReCaptchaV3Service,
    private router: Router,
    @Inject(PLATFORM_ID) private _platformId: Object
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.email,
      ]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  signIn() {
    if (this.form.valid) {
      this.recaptchaV3Service
        .execute('login')
        .pipe(
          tap((_) => {
            this.loaders.submit = true;
          }),
          switchMap((recaptcha) => {
            if (recaptcha) {
              const formData = { ...this.form.value, recaptcha };
              return this.authService.signIn(formData);
            }
            return EMPTY;
          })
        )
        .subscribe({
          next: (response) => {
            if (!response?.success) {
              return this.displayLoginError();
            }
            this.form.reset();
            this.loaders.submit = false;
            this.router.navigate(['/admin']);
          },
          error: () => {
            this.displayLoginError();
          },
        });
    }
  }

  displayLoginError() {
    fireToast(
      'Erro',
      'Você tem certeza que preencheu todos os dados corretamente?',
      'error'
    );
    this.loaders.submit = false;
  }

  changeControl(control: string, value: any) {
    this.form.get(control)!.markAsDirty();
    this.form.get(control)!.markAsTouched();
    this.form.get(control)!.patchValue(value);
    this.form.get(control)!.updateValueAndValidity();
  }

  hideGoogleRecaptcha() {
    if (isPlatformBrowser(this._platformId)) {
      const element = document.getElementsByClassName('grecaptcha-badge');
      if (element && element[0] && document) {
        element[0].setAttribute('id', 'grecaptcha_badge');
        document.getElementById('grecaptcha_badge')!.style.display = 'none';
      }
    }
  }

  showGoogleRecaptcha() {
    if (isPlatformBrowser(this._platformId)) {
      const element = document.getElementsByClassName('grecaptcha-badge');
      if (element && element[0] && document) {
        element[0].setAttribute('id', 'grecaptcha_badge');
        document.getElementById('grecaptcha_badge')!.style.display = 'block';
      }
    }
  }

  ionViewDidEnter() {
    this.showGoogleRecaptcha();
  }

  ionViewWillLeave() {
    this.hideGoogleRecaptcha();
  }
}
