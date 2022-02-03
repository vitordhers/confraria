import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationService } from './services/navigation.service';
import navigateExternalLink from './shared/functions/navigate-external-link.function';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  navigateExternalLink = navigateExternalLink;
  constructor(public navigationService: NavigationService) {}

  ngOnInit() {}
}
