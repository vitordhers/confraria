import { Component, Input, OnInit } from '@angular/core';
import { IUnit } from 'src/app/shared/interfaces/unit.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() unit!: IUnit;
  @Input() zoom = 18;

  constructor() {}

  ngOnInit() {}
}
