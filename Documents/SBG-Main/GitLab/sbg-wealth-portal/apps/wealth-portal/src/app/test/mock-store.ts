// /**
//  * Providers for a mock ngrx store for testing reducers and effects
//  */

// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Observer } from 'rxjs/Observer';
// import { MockState } from './mock-state';

// import 'rxjs/add/operator/map';

// export const mockReducer = (state: any = null): any => {
//   return state;
// };

// class ObservableMock implements Observer<any> {
//   closed?: boolean = false; // inherited from Observer
//   nextVal: any = ''; // variable I made up

//   constructor() { }

//   next = (value: any): void => { this.nextVal = value; };
//   error = (err: any): void => { console.error(err); };
//   complete = (): void => { this.closed = true; };
// }

// const actionReducer$: ObservableMock = new ObservableMock();
// const action$: ObservableMock = new ObservableMock();
// const obs$: Observable<any> = new Observable<any>();

// export class MockStore<T> extends Store<T> {

//   public _mockState = new MockState();
//   public fakeDataSubject: BehaviorSubject<Object> = new BehaviorSubject(this._mockState);

//   constructor() {
//     super(actionReducer$, action$, obs$);
//   }

//   select = <T, R>(mapFn: any, ...paths: string[]): Observable<R> => {
//     return this.fakeDataSubject.select(mapFn, ...paths);
//   }
// }
