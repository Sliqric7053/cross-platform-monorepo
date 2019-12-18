// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { async, TestBed, ComponentFixture } from '@angular/core/testing';
// import { ClientAssetAllocationDashboardTileComponent } from './client-asset-allocation-dashboard-tile.component';
// import { mockReducer } from '../../../test/mock-store';
// import { StoreModule } from '@ngrx/store';
// import { MockData } from '../../../test/mock-data';
// import { FormattingService } from '../../../frameworks/service.fx/index';
// import { MockServiceFrameworkModule } from '../../../frameworks/service.fx/service.mock.module';

// import * as ProfileState from '../../../frameworks/reactive.fx/reducers/profile.reducer';

// import { MockState } from '../../../test/mock-state';

// describe('The client component module:', () => {
//     let mockData: MockData = new MockData();
//     let mockState = new MockState();

//     mockState.profileState.profileSummary = mockData.getProfileSummary();

//     let combinedAssetAllocation = mockData.getProfileSummary().assetAllocation.combinedSummary;
//     let combinedAssetAllocationTypes = mockData.getProfileSummary().assetAllocation.combinedSummary.components;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             schemas: [CUSTOM_ELEMENTS_SCHEMA],
//             declarations: [
//                 ClientAssetAllocationDashboardTileComponent
//             ],
//             imports: [
//                 StoreModule.provideStore(mockReducer),
//                 MockServiceFrameworkModule.forEnv('dev')
//             ],
//             providers: [
//                 { provide: FormattingService, useClass: FormattingService }
//             ]
//         });
//     });

//     beforeEach(async(() => {
//         TestBed.compileComponents();
//     }));

//     describe('Given the client asset allocation dashboard tile component', () => {
//         let fixture: ComponentFixture<ClientAssetAllocationDashboardTileComponent>,
//             component: ClientAssetAllocationDashboardTileComponent,
//             nativeElement: ComponentFixture<ClientAssetAllocationDashboardTileComponent>;

//         let formattingService = new FormattingService();

//         beforeEach(() => {
//             fixture = TestBed.createComponent(ClientAssetAllocationDashboardTileComponent);
//             component = fixture.debugElement.componentInstance;

//             nativeElement = fixture.nativeElement;

//             const appState = mockData.setAppState(mockState);

//             component.model = ProfileState.getAssetAllocationCombinedSummary(appState);
//             component.types = ProfileState.getAssetAllocationCombinedTypes(appState);
//             component.ngOnInit();
//         });

//         it('Then the component should be created', async(() => {
//             expect(component).toBeTruthy();
//         }));

//         it('Then the model should be set', async(() => {
//             component.model.subscribe((result) => {
//                 fixture.detectChanges();
//                 expect(result).toEqual(combinedAssetAllocation);
//             });
//         }));

//         it('Then the types should be set', async(() => {
//             component.types.subscribe((result) => {
//                 fixture.detectChanges();
//                 expect(result).toEqual(combinedAssetAllocationTypes);
//             });
//         }));

//         it('Then the offshore and onshore values and percentages should be set', async(() => {
//             component.model.subscribe((result) => {
//                 fixture.detectChanges();

//                 expect(component.offShoreValue).toEqual(formattingService.formatCurrency(result.offShoreValue));
//                 expect(component.onShoreValue).toEqual(formattingService.formatCurrency(result.onShoreValue));
//                 expect(component.offShorePercentage).toEqual(formattingService.toDecimalPercentage(result.offShorePercentage, 1));
//                 expect(component.onShorePercentage).toEqual(formattingService.toDecimalPercentage(result.onShorePercentage, 1));
//             });
//         }));

//         it('Then it should return the correct graph object', async(() => {
//             component.totalGraphModel.subscribe((result) => {
//                 fixture.detectChanges();

//                 expect(result).toEqual({ context: 'assetAllocation', seriesPointOne: result.seriesPointOne, seriesPointTwo: result.seriesPointTwo });
//             });
//         }));

//         it('Then the `Asset Allocation` heading should be displayed', () => {
//             expect(nativeElement.querySelector('.tile-header').textContent).toContain('Asset Allocation');
//         });

//         describe('And the tile is linkable', () => {
//             beforeEach(() => {
//                 component.isLinkable = 'true';
//                 fixture.detectChanges();
//             });

//             it('Then the right arrow icon should be displayed', () => {
//                 expect(nativeElement.querySelector('md-icon').textContent).toEqual('keyboard_arrow_right');
//             });

//             describe('And the tile is clicked', () => {
//                 beforeEach(() => {
//                     spyOn(component.tileSelected, 'emit');

//                     let tile = nativeElement.querySelector('.tile');
//                     tile.dispatchEvent(new Event('click'));

//                     fixture.detectChanges();
//                 });

//                 it('Then the tileSelected EventEmitter should have been called', async(() => {
//                     expect(component.tileSelected.emit).toHaveBeenCalled();
//                 }));
//             });
//         });

//         describe('And the tile is not linkable', () => {
//             beforeEach(() => {
//                 component.isLinkable = 'false';
//                 fixture.detectChanges();
//             });

//             it('Then the right arrow icon should not be displayed', () => {
//                 expect(nativeElement.querySelector('md-icon')).toBe(null);
//             });
//         });
//     });
// });
