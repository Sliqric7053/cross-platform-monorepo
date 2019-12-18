import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { applicationReducer } from '@sbg/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'logout',
  templateUrl: 'unauthorized.page.html',
  styleUrls: ['unauthorized.page.scss']
})
// tslint:disable-next-line:component-class-suffix
export class UnauthorizedPage {
  constructor() {}
}
