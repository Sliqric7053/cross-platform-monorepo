// import { async, TestBed, ComponentFixture } from '@angular/core/testing';
// import { ClientGhostTileComponent } from './client-ghost-tile.component';
// import { ClientGhostTileComponentSelectors } from './client-ghost-tile.component.selectors';

// describe('The client component module:', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ClientGhostTileComponent],
//       imports: []
//     });
//   });

//   describe('Given the client ghost tile component', () => {
//     const returnsClientGhostTileSelectors: ClientGhostTileComponentSelectors = new ClientGhostTileComponentSelectors();
//     let fixture: ComponentFixture<ClientGhostTileComponent>,
//       component: ClientGhostTileComponent,
//       nativeElement: HTMLElement,
//       imageUrl: string;

//     beforeEach(
//       async(() => {
//         TestBed.compileComponents();
//         fixture = TestBed.createComponent(ClientGhostTileComponent);
//         fixture.detectChanges();
//         component = fixture.componentInstance;
//         nativeElement = fixture.nativeElement;
//         component.ngOnInit();
//         fixture.detectChanges();
//       })
//     );

//     describe('And there is no heading attribute', () => {
//       it('Then the component should be created', () => {
//         expect(component).toBeTruthy();
//       });

//       it('Then the heading should be blank', () => {
//         const tileHeader = returnsClientGhostTileSelectors.getActiveTileHeader(
//           nativeElement
//         );

//         expect(tileHeader.textContent.trim()).toEqual('');
//       });

//       it('Then the image element should not be displayed', () => {
//         const image = returnsClientGhostTileSelectors.getImage(nativeElement);

//         expect(image).toBe(null);
//       });

//       it('Then the `No data` heading should be displayed', () => {
//         const dataHeader = returnsClientGhostTileSelectors.getDataHeader(
//           nativeElement
//         );

//         expect(dataHeader.textContent).toEqual('No data');
//       });

//       it('Then the `No data` description should be displayed', () => {
//         const dataText = returnsClientGhostTileSelectors.getNoDataText(
//           nativeElement
//         );

//         expect(dataText.textContent).toEqual(
//           'There is currently no information to show'
//         );
//       });
//     });

//     describe('And the heading attribute is `Asset Allocation`', () => {
//       beforeEach(() => {
//         imageUrl = '../../../../assets/images/empty_assetallocation.png';
//         component.heading = 'Asset Allocation';
//         nativeElement = fixture.nativeElement;
//         fixture.detectChanges();
//       });

//       it('Then the component should be created', () => {
//         expect(component).toBeTruthy();
//       });

//       it('Then the `Asset Allocation` heading should be displayed', () => {
//         const tileHeader = returnsClientGhostTileSelectors.getActiveTileHeader(
//           nativeElement
//         );

//         expect(tileHeader.textContent.trim()).toEqual(component.heading);
//       });

//       it('Then the empty Asset Allocation image should be displayed', () => {
//         const image = returnsClientGhostTileSelectors.getImage(nativeElement);

//         expect(image.getAttribute('src')).toEqual(imageUrl);
//       });

//       it('Then the `No data` heading should be displayed', () => {
//         const dataHeader = returnsClientGhostTileSelectors.getDataHeader(
//           nativeElement
//         );
//         expect(dataHeader.textContent).toEqual('No data');
//       });

//       it('Then the `No data` description should be displayed', () => {
//         const dataText = returnsClientGhostTileSelectors.getNoDataText(
//           nativeElement
//         );

//         expect(dataText.textContent).toEqual(
//           'There is currently no information to show'
//         );
//       });
//     });

//     describe('And the heading attribute is `Linked Accounts`', () => {
//       beforeEach(() => {
//         imageUrl = '../../../../assets/images/empty_linkedaccounts.png';
//         component.heading = 'Linked Accounts';
//         nativeElement = fixture.nativeElement;
//         fixture.detectChanges();
//       });

//       it('Then the component should be created', () => {
//         expect(component).toBeTruthy();
//       });

//       it('Then the `Linked Accounts` heading should be displayed', () => {
//         const tileHeader = returnsClientGhostTileSelectors.getActiveTileHeader(
//           nativeElement
//         );
//         expect(tileHeader.textContent.trim()).toEqual(component.heading);
//       });

//       it('Then the empty Linked Accounts image should be displayed', () => {
//         const image = returnsClientGhostTileSelectors.getImage(nativeElement);

//         expect(image.getAttribute('src')).toEqual(imageUrl);
//       });

//       it('Then the `No data` heading should be displayed', () => {
//         const dataHeader = returnsClientGhostTileSelectors.getDataHeader(
//           nativeElement
//         );
//         expect(dataHeader.textContent).toEqual('No data');
//       });

//       it('Then the `No data` description should be displayed', () => {
//         const dataText = returnsClientGhostTileSelectors.getNoDataText(
//           nativeElement
//         );
//         expect(dataText.textContent).toEqual(
//           'There is currently no information to show'
//         );
//       });
//     });

//     describe('And the heading attribute is `Net Wealth`', () => {
//       beforeEach(() => {
//         imageUrl = '../../../../assets/images/empty_netwealth.png';
//         component.heading = 'Net Wealth';
//         nativeElement = fixture.nativeElement;
//         fixture.detectChanges();
//       });

//       it('Then the component should be created', () => {
//         expect(component).toBeTruthy();
//       });

//       it(
//         'Then the `Net Wealth` heading should be displayed',
//         async(() => {
//           const tileHeader = returnsClientGhostTileSelectors.getActiveTileHeader(
//             nativeElement
//           );
//           expect(tileHeader.textContent.trim()).toEqual(component.heading);
//         })
//       );

//       it(
//         'Then the empty Net Wealth image should be displayed',
//         async(() => {
//           const image = returnsClientGhostTileSelectors.getImage(nativeElement);

//           expect(image.getAttribute('src')).toEqual(imageUrl);
//         })
//       );

//       it('Then the `No data` heading should be displayed', () => {
//         const dataHeader = returnsClientGhostTileSelectors.getDataHeader(
//           nativeElement
//         );
//         expect(dataHeader.textContent).toEqual('No data');
//       });

//       it('Then the `No data` description should be displayed', () => {
//         const dataText = returnsClientGhostTileSelectors.getNoDataText(
//           nativeElement
//         );
//         expect(dataText.textContent).toEqual(
//           'There is currently no information to show'
//         );
//       });
//     });
//   });
// });
