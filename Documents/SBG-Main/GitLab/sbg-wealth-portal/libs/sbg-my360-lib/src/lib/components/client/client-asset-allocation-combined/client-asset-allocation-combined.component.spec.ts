// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { async, TestBed, ComponentFixture } from '@angular/core/testing';
// import { ClientAssetAllocationCombinedComponent } from './client-asset-allocation-combined.component';
// import { mockReducer } from '../../../test/mock-store';
// import { StoreModule } from '@ngrx/store';
// import { MockData } from '../../../test/mock-data';
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
//                 ClientAssetAllocationCombinedComponent
//             ],
//             imports: [
//                 StoreModule.provideStore(mockReducer),
//                 MockServiceFrameworkModule.forEnv('dev')
//             ]
//         });
//     });

//     beforeEach(async(() => {
//         TestBed.compileComponents();
//     }));

//     describe('Given the client asset allocation combined component', () => {
//         let fixture: ComponentFixture<ClientAssetAllocationCombinedComponent>,
//             component: ClientAssetAllocationCombinedComponent,
//             nativeElement: ComponentFixture<ClientAssetAllocationCombinedComponent>;

//         beforeEach(() => {
//             fixture = TestBed.createComponent(ClientAssetAllocationCombinedComponent);
//             component = fixture.debugElement.componentInstance;

//             const appState = mockData.setAppState(mockState);

//             nativeElement = fixture.nativeElement;

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

//         it('Then the `Asset Allocation` heading should be displayed', () => {
//             expect(nativeElement.querySelector('.page-heading').textContent).toContain('Asset Allocation');
//         });
//     });
// });
