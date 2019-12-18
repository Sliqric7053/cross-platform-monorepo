// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { async, TestBed, ComponentFixture } from '@angular/core/testing';
// import { ClientAssetAllocationOnshoreComponent } from './client-asset-allocation-onshore.component';
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

//     let onshoreAssetAllocation = mockData.getProfileSummary().assetAllocation.onShoreSummary;
//     let onshoreAssetAllocationTypes = mockData.getProfileSummary().assetAllocation.onShoreSummary.components;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             schemas: [CUSTOM_ELEMENTS_SCHEMA],
//             declarations: [
//                 ClientAssetAllocationOnshoreComponent
//             ],
//             imports: [
//                 StoreModule.provideStore(mockReducer),
//                 MockServiceFrameworkModule.forEnv('dev'),
//             ]
//         });
//     });

//     beforeEach(async(() => {
//         TestBed.compileComponents();
//     }));

//     describe('Given the client asset allocation onshore component', () => {
//         let fixture: ComponentFixture<ClientAssetAllocationOnshoreComponent>,
//             component: ClientAssetAllocationOnshoreComponent,
//             nativeElement: ComponentFixture<ClientAssetAllocationOnshoreComponent>;

//         beforeEach(() => {
//             fixture = TestBed.createComponent(ClientAssetAllocationOnshoreComponent);
//             component = fixture.debugElement.componentInstance;

//             const appState = mockData.setAppState(mockState);

//             nativeElement = fixture.nativeElement;

//             component.model = ProfileState.getAssetAllocationOnshoreSummary(appState);
//             component.types = ProfileState.getAssetAllocationOnshoreTypes(appState);
//             component.ngOnInit();
//         });

//         it('Then the component should be created', async(() => {
//             expect(component).toBeTruthy();
//         }));

//         it('Then the model should be set', async(() => {
//             component.model.subscribe((result) => {
//                 fixture.detectChanges();

//                 expect(result).toEqual(onshoreAssetAllocation);
//             });
//         }));

//         it('Then the types should be set', async(() => {
//             component.types.subscribe((result) => {
//                 fixture.detectChanges();

//                 expect(result).toEqual(onshoreAssetAllocationTypes);
//             });
//         }));

//         it('Then the `Asset Allocation` heading should be displayed', () => {
//             expect(nativeElement.querySelector('.page-heading').textContent).toContain('Asset Allocation');
//         });
//     });
// });
