// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { async, TestBed, ComponentFixture } from '@angular/core/testing';
// import { ClientNetWealthDashboardTileComponent } from './client-net-wealth-dashboard-tile.component';
// import { mockReducer } from '../../../test/mock-store';
// import { StoreModule } from '@ngrx/store';
// import { MockData } from '../../../test/mock-data';
// import { StyleService, FormattingService } from '../../../frameworks/service.fx/index';
// import { MockServiceFrameworkModule } from '../../../frameworks/service.fx/service.mock.module';

// import * as ProfileState from '../../../frameworks/reactive.fx/reducers/profile.reducer';

// import { MockState } from '../../../test/mock-state';

// describe('The client component module:', () => {
//     let mockData: MockData = new MockData();
//     let mockState = new MockState();

//     mockState.profileState.profileSummary = mockData.getProfileSummary();

//     let combinedNetWealth = mockData.getProfileSummary().netWealth.combinedSummary;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             schemas: [CUSTOM_ELEMENTS_SCHEMA],
//             declarations: [
//                 ClientNetWealthDashboardTileComponent
//             ],
//             imports: [
//                 StoreModule.provideStore(mockReducer),
//                 MockServiceFrameworkModule.forEnv('dev')
//             ],
//             providers: [
//                 { provide: StyleService, useClass: StyleService },
//                 { provide: FormattingService, useClass: FormattingService }
//             ]
//         });
//     });

//     beforeEach(async(() => {
//         TestBed.compileComponents();
//     }));

//     describe('Given the client net wealth dashboard tile component', () => {
//         let fixture: ComponentFixture<ClientNetWealthDashboardTileComponent>,
//             component: ClientNetWealthDashboardTileComponent,
//             nativeElement: ComponentFixture<ClientNetWealthDashboardTileComponent>;

//         let formattingService = new FormattingService();

//         beforeEach(() => {
//             fixture = TestBed.createComponent(ClientNetWealthDashboardTileComponent);
//             component = fixture.debugElement.componentInstance;

//             nativeElement = fixture.nativeElement;

//             const appState = mockData.setAppState(mockState);

//             component.model = ProfileState.getNetWealthCombinedSummary(appState);
//             component.ngOnInit();
//         });

//         it('Then the component should be created', async(() => {
//             expect(component).toBeTruthy();
//         }));

//         it('Then the model should be set', async(() => {
//             component.model.subscribe((result) => {
//                 fixture.detectChanges();
//                 expect(result).toEqual(combinedNetWealth);
//             });
//         }));

//         it('Then the offshore and onshore values and percentages should be set', async(() => {
//             component.model.subscribe((result) => {
//                 fixture.detectChanges();

//                 expect(component.assetsValue).toEqual(formattingService.formatCurrency(result.assetsValue));
//                 expect(component.liabilitiesValue).toEqual('-' + formattingService.formatCurrency(result.liabilitiesValue));
//                 expect(component.totalValue).toEqual(formattingService.formatCurrency(result.totalValue));
//             });
//         }));

//         it('Then it should return the correct graph object', async(() => {
//             component.totalGraphModel.subscribe((result) => {
//                 fixture.detectChanges();
//                 expect(result).toEqual({ context: 'netWealth', seriesPointOne: result.seriesPointOne, seriesPointTwo: result.seriesPointTwo });
//             });
//         }));

//         it('Then the `Net Wealth` heading should be displayed', () => {
//             expect(nativeElement.querySelector('.tile-header').textContent).toContain('Net Wealth');
//         });

//         describe('And the tile is clicked', () => {
//             beforeEach(() => {
//                 spyOn(component.tileSelected, 'emit');

//                 let tile = nativeElement.querySelector('.tile');
//                 tile.dispatchEvent(new Event('click'));

//                 fixture.detectChanges();
//             });

//             it('Then the tileSelected EventEmitter should have been called', async(() => {
//                 expect(component.tileSelected.emit).toHaveBeenCalled();
//             }));
//         });
//     });
// });
