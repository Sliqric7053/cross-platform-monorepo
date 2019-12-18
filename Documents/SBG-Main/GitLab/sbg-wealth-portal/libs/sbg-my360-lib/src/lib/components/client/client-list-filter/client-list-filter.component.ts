import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'client-list-filter',
  templateUrl: 'client-list-filter.component.html',
  styleUrls: ['client-list-filter.component.scss']
})
export class ClientListFilterComponent {
  @Output() tableDataFiltered: EventEmitter<any> = new EventEmitter();
  localTableData: any;
  enabledOnApp: boolean = true;
  disabledOnApp: boolean = true;

  @Input()
  set tableData(tdata: any) {
    this.filterListItems(tdata);
    this.localTableData = tdata;
  }

  updateDataGroups() {
    this.filterListItems(this.localTableData);
  }

  filterListItems(data: any) {
    let filteredListItems = data.filter((listItem: any) => {
      if (listItem.item.enabled === this.enabledOnApp) {
        return listItem;
      }

      if (!listItem.item.enabled === this.disabledOnApp) {
        return listItem;
      }
    });
    this.tableDataFiltered.emit(filteredListItems);
  }
}
