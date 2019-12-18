import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'elite-wealth',
  templateUrl: 'elite-wealth.page.component.html',
  styleUrls: ['elite-wealth.page.component.scss']
})
export class EliteWealthPageComponent {
  iframe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {
    this.iframe = sanitizer.bypassSecurityTrustResourceUrl(
      'https://elitewealth.standardbank.co.za/ApplicationStartup.aspx'
    );
  }
}
