import { GotoAdvisorClientDashboard } from '@sbg/common';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/let';
import { Subscription } from 'rxjs/Subscription';
import { distinctUntilChanged } from 'rxjs/operators';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { AdvisorClientRowComponent } from '../../components/client/client-row/client-row.component';
import { ClientListFilterComponent } from '../../components/client/client-list-filter/client-list-filter.component';
import { SbgTableEventService } from '@sbg/components';
import {
  AdvisorClient,
  AdvisorDetailsData,
  ClientFilterOption,
  EnableCustomerRequest
} from '@sbg/common';
import { SelectedClientService, SelectedClientType } from '@sbg/common';
import { FormattingService } from '@sbg/common';
import { applicationReducer } from '@sbg/common';
import { getLoading } from '@sbg/common';
import { getClients, getAdvisorDetails } from '@sbg/common';
import {
  FilterWealthClientList,
  ToggleClientStateComplete,
  ToggleClientState
} from '@sbg/common';
import { getFilterEntityClients } from '@sbg/common';

@Component({
  selector: 'advisor-client-list',
  templateUrl: 'advisor-client-list.page.html',
  styleUrls: ['advisor-client-list.page.scss']
})
@AutoUnsubscribe()
// tslint:disable-next-line:component-class-suffix
export class AdvisorClientListPage implements OnInit, OnDestroy {
  @Input() selectedOption: ClientFilterOption;

  clientList$: Observable<AdvisorClient[]>;
  filteredClientList$: Observable<AdvisorClient[]>;
  loading$: Observable<boolean>;
  loggedInAdvisor: Observable<AdvisorDetailsData>;

  filteredClients: AdvisorClient[];
  loggedInAdvisorBpId: string;
  loggedInAdvisorId: string;
  searchText: string;
  enabledOnApp = true;
  disabledOnApp = true;
  openFilterPanel = false;
  hasClients = true;
  hasFilteredClients = true;
  clientToToggle: AdvisorClient;
  message: string = '';
  rowComponent: any;
  filterComponent: any;
  displayGroups: string[] = [];
  groupedData: object[] = [];

  clientFilterOptions = ClientFilterOption;

  subscriptions = new Subscription();

  constructor(
    public formatting: FormattingService,
    public store: Store<applicationReducer.State>,
    public selectedClientService: SelectedClientService,
    public snackBar: MatSnackBar,
    public translate: TranslateService,
    public sbgTableEventService: SbgTableEventService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  uniqueBy(a, cond) {
    return a.filter((e, i) => a.findIndex(e2 => cond(e, e2)) === i);
  }

  ngOnInit() {
    this.rowComponent = AdvisorClientRowComponent;
    this.filterComponent = ClientListFilterComponent;
    this.loading$ = this.store.pipe(select(getLoading));

    this.searchText = '';

    this.subscriptions.add(
      this.loading$.subscribe(loading => {
        if (!loading) {
          setTimeout(() => {
            this.openFilterPanel = true;
          });
        }
      })
    );

    this.subscriptions.add(
      this.sbgTableEventService.tableCellEvent$.subscribe(client => {
        this.toggleClientState(client);
      })
    );

    this.clientList$ = this.store.pipe(select(getClients));

    this.loggedInAdvisor = this.store.pipe(select(getAdvisorDetails));

    this.subscriptions.add(
      this.loggedInAdvisor.subscribe((loggedInAdvisor: AdvisorDetailsData) => {
        if (loggedInAdvisor) {
          this.loggedInAdvisorBpId = loggedInAdvisor.bpid;
          this.loggedInAdvisorId = loggedInAdvisor.idNumber;
        }
      })
    );

    this.subscriptions.add(
      this.clientList$
        .pipe(distinctUntilChanged())
        .subscribe((clients: AdvisorClient[]) => {
          if (clients) {
            this.store.dispatch(
              new FilterWealthClientList(ClientFilterOption.All)
            );
            this.hasClients = true;

            const uniqueAlpabet = this.uniqueBy(
              clients,
              (o1, o2) => o1.lastName.charAt(0) === o2.lastName.charAt(0)
            );

            this.displayGroups = uniqueAlpabet.map(obj =>
              obj.lastName.charAt(0)
            );

            clients.forEach((client: AdvisorClient) => {
              if (
                this.clientToToggle != null &&
                this.clientToToggle.bpid &&
                client.bpid === this.clientToToggle.bpid
              ) {
                let toggleText = client.enabled ? 'enabled' : 'disabled';
                this.message = `${this.formatting.toTitleCase(
                  client.firstName
                )} ${this.formatting.toTitleCase(
                  client.lastName
                )} successfully ${toggleText} on app`;

                this.snackBar.open(this.message, null, {
                  duration: 5000,
                  panelClass: ['success-snackbar']
                });

                this.clientToToggle = null;
              }
            });
          } else {
            this.hasClients = false;
          }
        })
    );

    this.filteredClientList$ = this.store.pipe(select(getFilterEntityClients));

    this.subscriptions.add(
      this.filteredClientList$
        .pipe(distinctUntilChanged())
        .subscribe((filteredClients: AdvisorClient[]) => {
          if (filteredClients) {
            filteredClients.sort(this.sortClientsByLastNameAndFirstName);

            this.filteredClients = filteredClients;
          }
        })
    );

    this.selectedClientService.clearSelectedClient();
  }

  createTableConfig() {
    return {
      headers: [
        { text: '', cellClass: 'avatar-column-header' },
        {
          text: this.translate.instant('name'),
          sortText: ['firstName'],
          cellClass: 'sbg-table-cell'
        },
        {
          text: this.translate.instant('surname'),
          sortText: ['lastName'],
          cellClass: 'sbg-table-cell'
        },
        {
          text: this.translate.instant('id_passport_number'),
          cellClass: 'sbg-table-cell'
        },
        { text: this.translate.instant('cell_number') },
        { text: this.translate.instant('email_address') },
        { text: '', cellClass: 'sbg-table-cell-end-spacing' }
      ],
      searchFields: [
        'firstName',
        'lastName',
        'idNumber',
        'cellNumber',
        'email'
      ],
      groups: this.createTableGroups()
    };
  }

  createTableGroups() {
    let groupedDataFormatted = [];

    function genericGroup(listItem, groupName) {
      return listItem.lastName.charAt(0) === groupName;
    }

    this.displayGroups.forEach(groupName => {
      groupedDataFormatted.push({
        text: groupName,
        filter: function(listItem) {
          return genericGroup(listItem, groupName);
        }
      });
    });

    this.groupedData = groupedDataFormatted;

    return this.groupedData;
  }

  sortClientsByLastNameAndFirstName = (a: AdvisorClient, b: AdvisorClient) => {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }

    if (a.lastName == b.lastName) {
      if (a.firstName < b.firstName) {
        return -1;
      }
      if (a.firstName > b.firstName) {
        return 1;
      }
      return 0;
    }

    return 0;
  };

  toggleClientState(client: AdvisorClient) {
    this.clientToToggle = client;

    let toggleClientStateRequest: EnableCustomerRequest = {
      advisorBpId: this.loggedInAdvisorBpId || '',
      advisorId: this.loggedInAdvisorId || '',
      customerBpId: client.bpid,
      customerId: client.idNumber,
      enableCustomer: !client.enabled
    };

    this.store.dispatch(
      new ToggleClientStateComplete({
        enableCustomer: !client.enabled,
        customerBpId: client.bpid
      })
    );
    this.store.dispatch(new ToggleClientState(toggleClientStateRequest));
  }

  clientSelected(client: AdvisorClient) {
    let selectedClient: SelectedClientType = {
      firstName: client.firstName,
      bpid: client.bpid,
      id: client.idNumber
    };

    this.selectedClientService.setSelectedClient(selectedClient);
    this.store.dispatch(new GotoAdvisorClientDashboard());
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
