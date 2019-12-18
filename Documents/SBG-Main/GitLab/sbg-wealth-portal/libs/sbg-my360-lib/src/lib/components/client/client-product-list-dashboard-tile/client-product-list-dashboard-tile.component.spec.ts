// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { async, TestBed, ComponentFixture } from '@angular/core/testing';
// import { ClientProductListDashboardTileComponent } from './client-product-list-dashboard-tile.component';
// import { mockReducer } from '../../../test/mock-store';
// import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
// import { StoreModule } from '@ngrx/store';
// import { MockData } from '../../../test/mock-data';
// import { MockServiceFrameworkModule } from '../../../frameworks/service.fx/service.mock.module';

// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// import { HttpModule, Http } from '@angular/http';

// import * as ProductState from '../../../frameworks/reactive.fx/reducers/product.reducer';

// import { MockState } from '../../../test/mock-state';

// describe('The client component module:', () => {
//     let mockData: MockData = new MockData();

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             schemas: [CUSTOM_ELEMENTS_SCHEMA],
//             declarations: [
//                 ClientProductListDashboardTileComponent
//             ],
//             imports: [
//                 HttpModule,
//                 StoreModule.provideStore(mockReducer),
//                 FormsModule,
//                 ReactiveFormsModule,
//                 MockServiceFrameworkModule.forEnv('dev'),
//                 TranslateModule.forRoot({
//                     loader: {
//                         provide: TranslateLoader,
//                         useFactory: (http: Http) => new TranslateHttpLoader(http),
//                         deps: [Http]
//                     }
//                 })

//             ],
//             providers: [
//                 { provide: FormBuilder, useClass: FormBuilder }
//             ]
//         });
//     });

//     beforeEach(async(() => {
//         TestBed.compileComponents();
//     }));

//     describe('Given the client product list dashboard tile component', () => {
//         let nullProductsScenarios = [
//             {
//                 property: 'groupProductsCount',
//                 products: null,
//                 index: 0
//             },
//             {
//                 property: 'thirdPartyCount',
//                 products: null,
//                 index: 1
//             },
//             {
//                 property: 'unmanagedProductsCount',
//                 products: null,
//                 index: 2
//             }
//         ];

//         nullProductsScenarios.forEach(function (scenario, key) {
//             let fixture: ComponentFixture<ClientProductListDashboardTileComponent>,
//                 component: ClientProductListDashboardTileComponent;

//             beforeEach(() => {
//                 fixture = TestBed.createComponent(ClientProductListDashboardTileComponent);
//                 component = fixture.debugElement.componentInstance;

//                 let mockState = new MockState();
//                 mockState.productState.products = scenario.products;

//                 const appState = mockData.setAppState(mockState);

//                 component.groupProducts = ProductState.getGroupProductsState(appState);
//                 component.thirdPartyProducts = ProductState.getThirdPartyProductsState(appState);
//                 component.unmanagedProducts = ProductState.getUnmanagedState(appState);

//                 component.ngOnInit();
//             });

//             describe(`When ${scenario.property} is null`, () => {
//                 it(`Then ${scenario.property} should be undefined`, async(() => {
//                     let productLength;
//                     component[scenario.property].subscribe((result) => {
//                         fixture.detectChanges();
//                         productLength = result;
//                     });

//                     expect(productLength).toBeUndefined();
//                 }));

//                 it(`Then it should set the value of ${scenario.property} on the UI to ${scenario.result}`, async(() => {
//                     let nativeElement = fixture.nativeElement;

//                     component[scenario.property].subscribe((result) => {
//                         fixture.detectChanges();

//                         expect(nativeElement.querySelectorAll('.number')[scenario.index].firstChild.nodeValue).toEqual(result.toString());
//                     });
//                 }));
//             });
//         });

//         let nullProductTypesScenarios = [
//             {
//                 property: 'groupProductsCount',
//                 products: { groupProducts: null },
//                 index: 0
//             },
//             {
//                 property: 'thirdPartyCount',
//                 products: { thirdPartyProducts: null },
//                 index: 1
//             },
//             {
//                 property: 'unmanagedProductsCount',
//                 products: { unmanagedProducts: null },
//                 index: 2
//             }
//         ];

//         nullProductTypesScenarios.forEach(function (scenario, key) {
//             let fixture: ComponentFixture<ClientProductListDashboardTileComponent>,
//                 component: ClientProductListDashboardTileComponent;

//             beforeEach(() => {
//                 fixture = TestBed.createComponent(ClientProductListDashboardTileComponent);
//                 component = fixture.debugElement.componentInstance;

//                 let mockState = new MockState();
//                 mockState.productState.products = scenario.products;

//                 const appState = mockData.setAppState(mockState);

//                 component.groupProducts = ProductState.getGroupProductsState(appState);
//                 component.thirdPartyProducts = ProductState.getThirdPartyProductsState(appState);
//                 component.unmanagedProducts = ProductState.getUnmanagedState(appState);

//                 component.ngOnInit();
//             });

//             describe(`When ${scenario.property} is null`, () => {
//                 it(`Then ${scenario.property} should be 0`, async(() => {
//                     let productLength;
//                     component[scenario.property].subscribe((result) => {
//                         fixture.detectChanges();
//                         productLength = result;
//                     });

//                     expect(productLength).toEqual(0);
//                 }));

//                 it(`Then it should set the value of ${scenario.property} on the UI to ${scenario.result}`, async(() => {
//                     let nativeElement = fixture.nativeElement;

//                     component[scenario.property].subscribe((result) => {
//                         fixture.detectChanges();

//                         expect(nativeElement.querySelectorAll('.number')[scenario.index].firstChild.nodeValue).toEqual(result.toString());
//                     });
//                 }));
//             });
//         });

//         describe('When the correct data is passed to the component', () => {
//             let fixture: ComponentFixture<ClientProductListDashboardTileComponent>,
//                 component: ClientProductListDashboardTileComponent;

//             let mockState = new MockState();
//             mockState.productState.products = mockData.getProducts();
//             const appState = mockData.setAppState(mockState);

//             beforeEach(() => {
//                 fixture = TestBed.createComponent(ClientProductListDashboardTileComponent);
//                 component = fixture.debugElement.componentInstance;

//                 component.groupProducts = ProductState.getGroupProductsState(appState);
//                 component.thirdPartyProducts = ProductState.getThirdPartyProductsState(appState);
//                 component.unmanagedProducts = ProductState.getUnmanagedState(appState);

//                 component.ngOnInit();
//             });

//             it('Then the component should be created', async(() => {
//                 expect(component).toBeTruthy();
//             }));

//             it('Then the sbsa products count should be present', async(() => {
//                 component.groupProductsCount.subscribe((result) => {
//                     fixture.detectChanges();
//                     expect(result).toEqual(2);
//                 });
//             }));

//             it('Then the sbsa products count should be present on the UI', async(() => {
//                 let nativeElement = fixture.nativeElement;

//                 component.groupProductsCount.subscribe((result) => {
//                     fixture.detectChanges();
//                     expect(nativeElement.querySelectorAll('.number')[0].firstChild.nodeValue).toEqual('2');
//                 });
//             }));

//             it('Then the third party count should be present', async(() => {
//                 component.thirdPartyCount.subscribe((result) => {
//                     fixture.detectChanges();
//                     expect(result).toEqual(3);
//                 });
//             }));

//             it('Then the third party count should be present on the UI', async(() => {
//                 let nativeElement = fixture.nativeElement;

//                 component.thirdPartyCount.subscribe((result) => {
//                     fixture.detectChanges();
//                     expect(nativeElement.querySelectorAll('.number')[1].firstChild.nodeValue).toEqual('3');
//                 });
//             }));

//             it('Then the unmanaged products count should be present', async(() => {
//                 component.unmanagedProductsCount.subscribe((result) => {
//                     fixture.detectChanges();
//                     expect(result).toEqual(0);
//                 });
//             }));

//             it('Then the unmanaged products count should be present on the UI', async(() => {
//                 let nativeElement = fixture.nativeElement;

//                 component.unmanagedProductsCount.subscribe((result) => {
//                     fixture.detectChanges();
//                     expect(nativeElement.querySelectorAll('.number')[2].firstChild.nodeValue).toEqual('0');
//                 });
//             }));

//             describe('And the tile is clicked', () => {
//                 beforeEach(() => {
//                     spyOn(component.tileSelected, 'emit');

//                     let nativeElement = fixture.nativeElement;
//                     let tile = nativeElement.querySelector('.tile');
//                     tile.dispatchEvent(new Event('click'));

//                     fixture.detectChanges();
//                 });

//                 it('Then the tileSelected EventEmitter should have been called', async(() => {
//                     expect(component.tileSelected.emit).toHaveBeenCalled();
//                 }));
//             });
//         });
//     });
// });
