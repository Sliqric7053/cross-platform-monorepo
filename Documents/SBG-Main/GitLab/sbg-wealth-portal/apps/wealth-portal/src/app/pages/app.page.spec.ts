// // import { provide } from '@angular/core';
// import {async, TestBed} from '@angular/core/testing';
// import {AppPageComponent} from './app.page';

// beforeEach(() => {
//   TestBed.configureTestingModule({
//     declarations: [
//       AppPageComponent
//     ],
//     imports: [
//       // HttpModule, etc.
//     ],
//     providers: [
//       // provide(ServiceA, { useClass: TestServiceA })
//     ]
//   });
// });

// it('should do something', async(() => {
//   // Overrides here, if you need them
//   TestBed.overrideComponent(AppPageComponent, {
//     set: {
//       template: '<div>Overridden template here</div>'
//       // ...
//     }
//   });

//   TestBed.compileComponents().then(() => {
//     const fixture = TestBed.createComponent(AppPageComponent);

//     // Access the dependency injected component instance
//     const app = fixture.componentInstance;

//     expect(app).toBe('something');

//     // Access the element
//     const element = fixture.nativeElement;

//     // Detect changes as necessary
//     fixture.detectChanges();

//     expect(element.textContent).toContain('something');
//   });
// }));
