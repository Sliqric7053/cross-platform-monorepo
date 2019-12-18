import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { authActions } from '@sbg/common';
import { advisorActions } from '@sbg/common';

import { applicationReducer } from '@sbg/common';

import { Observable } from 'rxjs/Observable';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'advisor-home',
  templateUrl: 'advisor-home.page.html',
  styleUrls: []
})
@AutoUnsubscribe()
// tslint:disable-next-line:component-class-suffix
export class AdvisorHomePage implements OnInit, OnDestroy {
  loggedInEmployeeDetailsStream$: Observable<string>;

  loggedInEmployeeDetailsStreamSubscription: Subscription;

  constructor(public store: Store<applicationReducer.State>) {}

  ngOnInit() {
    this.store.dispatch(
      new advisorActions.GetAdvisorClientListByAdvisorAction()
    );
  }

  onLogout() {
    this.store.dispatch(new authActions.LogoutAction());
  }

  ngOnDestroy() {}
}
