import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UnitService } from '../../services/unit.service';
import { Unit } from '../../shared/models/unit.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  public form!: FormGroup;
  public unit$!: Observable<Unit>;

  constructor(public unitService: UnitService) {}

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
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000),
      ]),
    });

    this.unit$ = combineLatest([
      this.unitService.currentUnitId$,
      this.unitService.units$,
    ]).pipe(
      map(
        ([currentUnitId, units]) =>
          units.find((unit) => unit.id === currentUnitId)!
      )
    );
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
