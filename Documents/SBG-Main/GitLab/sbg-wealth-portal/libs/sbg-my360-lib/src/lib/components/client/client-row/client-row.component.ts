import { CommonModule } from '@angular/common';
import {
  NgModule,
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  HostBinding
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  SbgTableEventService,
  SbgButtonModule,
  SbgLoaderModule
} from '@sbg/components';

import { AdvisorClient } from '@sbg/common';

import { advisorReducer } from '@sbg/common';
import { applicationReducer } from '@sbg/common';
import { loadingReducer } from '@sbg/common';

import { FormattingService } from '@sbg/common';

@Component({
  selector: 'sbg-table-row',
  templateUrl: 'client-row.component.html',
  styleUrls: ['client-row.component.scss']
})
export class AdvisorClientRowComponent implements OnInit, OnDestroy {
  @Output() clientStateToggled = new EventEmitter<AdvisorClient>();

  @Input() client: AdvisorClient;

  @HostBinding('class') sbgTableInnerRowClass = 'sbg-table-inner-row';

  initials: string = '';
  firstname: string;
  lastname: string;
  idNumber: string;
  phone: string;
  phoneFormatted: string;
  phonePath: string;
  email: string;
  emailPath: string;
  isEnabled: boolean;
  haveContacts: boolean;
  listItem: any;

  clientToggledLoading$: Observable<boolean>;

  clientToggled$: Observable<boolean>;
  clientToggle$: Observable<string>;

  subscriptions = new Subscription();

  constructor(
    public formatting: FormattingService,
    public store: Store<applicationReducer.State>,
    public sbgTableEventService: SbgTableEventService
  ) {}

  ngOnInit() {
    this.clientToggledLoading$ = this.store.pipe(
      select(loadingReducer.getClientToggledLoading)
    );
    this.clientToggled$ = of(false);

    this.clientToggle$ = this.store.pipe(
      select(advisorReducer.getClientToggled)
    );

    this.subscriptions.add(
      this.clientToggle$.subscribe((clientToggled: string) => {
        if (clientToggled === this.listItem.bpid) {
          this.clientToggled$ = of(true);
        } else {
          this.clientToggled$ = of(false);
        }
      })
    );

    if (this.listItem) {
      if (this.listItem.cellNumber && this.listItem.email) {
        this.haveContacts = true;
      } else {
        this.haveContacts = false;
      }

      if (this.listItem.firstName && this.listItem.firstName.length > 0) {
        this.initials = this.initials.concat(
          this.listItem.firstName.charAt(0).toUpperCase()
        );

        this.firstname = this.formatting.toTitleCase(this.listItem.firstName);
      }

      if (this.listItem.lastName && this.listItem.lastName.length > 0) {
        this.initials = this.initials.concat(
          this.listItem.lastName.charAt(0).toUpperCase()
        );

        this.lastname = this.formatting.toTitleCase(this.listItem.lastName);
      }

      if (this.listItem.idNumber) {
        this.idNumber = this.listItem.idNumber;
      }

      if (this.listItem.cellNumber) {
        this.phoneFormatted = this.formatting.formatPhoneNumber(
          this.listItem.cellNumber
        );
      }

      if (this.listItem.enabled !== null && this.listItem.enabled) {
        this.isEnabled = true;
      } else {
        this.isEnabled = false;
      }

      if (this.listItem.email) {
        this.email = this.listItem.email;

        const initals = this.firstname ? this.firstname.substr(0, 1) : '';

        this.emailPath =
          'mailto:' +
          this.listItem.email +
          '?subject=Standard Bank Advisory Services ' +
          '&body=Dear ' +
          this.formatting.toTitleCase(this.listItem.title) +
          ' ' +
          initals +
          ' ' +
          this.lastname;
      }

      if (this.listItem.cellNumber) {
        this.phone = this.listItem.cellNumber;

        this.phonePath = 'tel:' + this.listItem.cellNumber;
      }
    }
  }

  onToggleEnabled() {
    this.sbgTableEventService.emitCellEvent(this.listItem);
  }

  onEvent(event: Event) {
    event.stopPropagation();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

@NgModule({
  imports: [
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    SbgButtonModule,
    CommonModule,
    SbgLoaderModule,
    FormsModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  declarations: [AdvisorClientRowComponent],
  entryComponents: [AdvisorClientRowComponent]
})
export class AdvisorClientRowModule {}
