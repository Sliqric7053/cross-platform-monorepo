import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dlis',
  templateUrl: 'dlis.page.component.html',
  styleUrls: ['dlis.page.component.scss']
})
export class DlisPageComponent {
  iframe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {
    this.iframe = sanitizer.bypassSecurityTrustResourceUrl(
      'https://standardbank.dlis.co.za/consultants/'
    );
  }
}
