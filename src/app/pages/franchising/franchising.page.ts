import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-franchising',
  templateUrl: './franchising.page.html',
  styleUrls: ['./franchising.page.scss'],
})
export class FranchisingPage implements OnInit {
  stateOptions = [
    { value: 'AC', title: 'Acre' },
    { value: 'AL', title: 'Alagoas' },
    { value: 'AP', title: 'Amapá' },
    { value: 'AM', title: 'Amazonas' },
    { value: 'BA', title: 'Bahia' },
    { value: 'CE', title: 'Ceará' },
    { value: 'ES', title: 'Espírito Santo' },
    { value: 'GO', title: 'Goiás' },
    { value: 'MA', title: 'Maranhão' },
    { value: 'MT', title: 'Mato Grosso' },
    { value: 'MS', title: 'Mato Grosso do Sul' },
    { value: 'MG', title: 'Minas Gerais' },
    { value: 'PA', title: 'Pará' },
    { value: 'PB', title: 'Paraíba' },
    { value: 'PR', title: 'Paraná' },
    { value: 'PE', title: 'Pernambuco' },
    { value: 'PI', title: 'Piauí' },
    { value: 'RJ', title: 'Rio de Janeiro' },
    { value: 'RN', title: 'Rio Grande do Norte' },
    { value: 'RS', title: 'Rio Grande do Sul' },
    { value: 'RO', title: 'Rondônia' },
    { value: 'RR', title: 'Roraima' },
    { value: 'SC', title: 'Santa Catarina' },
    { value: 'SP', title: 'São Paulo' },
    { value: 'SE', title: 'Sergipe' },
    { value: 'TO', title: 'Tocantins' },
    { value: 'DF', title: 'Distrito Federal' },
  ];

  investmentOptions = [
    { value: '1', title: 'até R$ 50.000,00' },
    { value: '2', title: 'de R$ 50.000,00 até R$ 150.000,00' },
    { value: '3', title: 'de R$ 150.000,00 até R$ 250.000,00' },
    { value: '4', title: 'de R$ 250.000,00 até R$ 400.000,00' },
    { value: '5', title: 'acima de R$ 400.000,00' },
  ];

  public form!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.email,
      ]),
      celphone: new FormControl(null, [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
      telephone: new FormControl(null, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
      ]),
      state: new FormControl('SP', [Validators.required]),
      city: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      reference: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]),
      investment: new FormControl('2', [Validators.required]),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000),
      ]),
    });
  }

  changeControl(control: string, value: any) {
    this.form.get(control)!.markAsDirty();
    this.form.get(control)!.markAsTouched();
    this.form.get(control)!.patchValue(value);
    this.form.get(control)!.updateValueAndValidity();
  }

  submitForm() {
    console.log('submitform', this.form.value);
    if (this.form.valid) {
      return;
    }
    this.form.markAllAsTouched();
  }
}
