import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Unit } from '../shared/models/unit.model';

@Injectable({
  providedIn: 'root',
})
export class UnitService {
  currentUnitId$ = new BehaviorSubject<number>(1);
  units$ = new BehaviorSubject<Unit[]>([
    new Unit(
      1,
      'Matriz',
      'Piracicaba - São Paulo',
      'Rua Dona Eugênia, 402. Jardim Europa - Piracicaba, São Paulo. CEP 13416-401.',
      '(19) 3302-8382',
      'contato@confrariadotemaki.com.br',
      [
        'Segunda a Quarta - 13:30h a 23:59h',
        'Sexta a Sábado - 11:30h a 23:59h',
      ],
      -22.712736,
      -47.646485,
      '(19) 9 7156-3647'
    ),
  ]);

  constructor() {}
}
