import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { applicationReducer } from '@sbg/common';
import { navigationActions } from '@sbg/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'logout',
  templateUrl: 'not-found.page.html',
  styleUrls: ['not-found.page.scss']
})
// tslint:disable-next-line:component-class-suffix
export class NotFoundPage implements OnInit {
  constructor(public store: Store<applicationReducer.State>) {}

  ngOnInit() {}

  onButtonClicked() {
    this.store.dispatch(new navigationActions.GotoRouteAction(''));
  }
}
