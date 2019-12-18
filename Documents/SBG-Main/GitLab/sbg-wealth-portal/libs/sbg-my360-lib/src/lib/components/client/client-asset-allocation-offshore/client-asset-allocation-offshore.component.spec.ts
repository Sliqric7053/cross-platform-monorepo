// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { async, TestBed, ComponentFixture } from '@angular/core/testing';
// import { ClientAssetAllocationOffshoreComponent } from './client-asset-allocation-offshore.component';
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

//     let offshoreAssetAllocation = mockData.getProfileSummary().assetAllocation.offShoreSummary;
//     let offshoreAssetAllocationTypes = mockData.getProfileSummary().assetAllocation.offShoreSummary.components;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             schemas: [CUSTOM_ELEMENTS_SCHEMA],
//             declarations: [
//                 ClientAssetAllocationOffshoreComponent
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

//     describe('Given the client asset allocation offshore component', () => {
//         let fixture: ComponentFixture<ClientAssetAllocationOffshoreComponent>,
//             component: ClientAssetAllocationOffshoreComponent,
//             nativeElement: ComponentFixture<ClientAssetAllocationOffshoreComponent>;

//         beforeEach(() => {
//             fixture = TestBed.createComponent(ClientAssetAllocationOffshoreComponent);
//             component = fixture.debugElement.componentInstance;

//             const appState = mockData.setAppState(mockState);

//             nativeElement = fixture.nativeElement;

//             component.model = ProfileState.getAssetAllocationOffshoreSummary(appState);
//             component.types = ProfileState.getAssetAllocationOffshoreTypes(appState);
//             component.ngOnInit();
//         });

//         it('Then the component should be created', async(() => {
//             expect(component).toBeTruthy();
//         }));

//         it('Then the model should be set', async(() => {
//             component.model.subscribe((result) => {
//                 fixture.detectChanges();

//                 expect(result).toEqual(offshoreAssetAllocation);
//             });
//         }));

//         it('Then the types should be set', async(() => {
//             component.types.subscribe((result) => {
//                 fixture.detectChanges();

//                 expect(result).toEqual(offshoreAssetAllocationTypes);
//             });
//         }));

//         it('Then the `Asset Allocation` heading should be displayed', () => {
//             expect(nativeElement.querySelector('.page-heading').textContent).toContain('Asset Allocation');
//         });
//     });
// });
