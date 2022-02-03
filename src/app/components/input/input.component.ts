import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() name!: string;
  @Input() type: 'text' | 'select' | 'textarea' | 'tel' | 'password' = 'text';
  @Input() phoneType?: 'celphone' | 'telephone';
  @Input() placeholder?: string = '';
  @Input() label?: string;
  @Input() options?: { title: string; value: string }[];
  @Input() maxlength?: number;
  @Input() initialSelectValue?: string;
  @Input() isPhone = false;

  @Output() value: EventEmitter<string> = new EventEmitter(undefined);

  toggleFilled = false;

  interfaceOptions = {
    cssClass: 'input-select',
  };

  constructor() {}

  ngOnInit() {}

  onValueChange(e: Event) {
    const evt = e as CustomEvent<{ value: any }>;
    this.toggleFilled = evt.detail.value !== '' ? true : false;
    this.value.emit(evt.detail.value);
  }
}
