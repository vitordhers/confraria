import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UnitService } from 'src/app/services/unit.service';
import { Unit } from '../../shared/models/unit.model';
import navigateExternalLink from 'src/app/shared/functions/navigate-external-link.function';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public unit$!: Observable<Unit>;
  navigateExternalLink = navigateExternalLink;

  constructor(private unitService: UnitService) {}

  ngOnInit() {
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
}
