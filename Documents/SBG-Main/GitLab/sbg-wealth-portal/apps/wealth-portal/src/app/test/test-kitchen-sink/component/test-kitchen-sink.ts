// import { Component, ElementRef, OnInit } from '@angular/core';
// import {FormControl, Validators} from '@angular/forms';

// const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// @Component({
//     moduleId: 'app/test/test-kitchen-sink/component/',
//     selector: 'test-kitchen-sink',
//     templateUrl: 'test-kitchen-sink.html',
//     styleUrls: ['test-kitchen-sink.scss']
// })
// // tslint:disable-next-line:component-class-suffix
// export class TestKitchenSink implements OnInit {
//     constructor(public el: ElementRef) {
//     }

//     testFormControl = new FormControl('My value', [Validators.required,
//         Validators.pattern(EMAIL_REGEX)]);

//     ngOnInit() {
//         (<any>window).testLocator = function (path, parentElement) {
//             parentElement = parentElement || document;

//             let xpathResult = document.evaluate(path, parentElement, null, XPathResult.ANY_TYPE, null);
//             let results = xpathResult.iterateNext();
//             let elements = [];
//             while (results) {
//                 elements.push(results);
//                 results = xpathResult.iterateNext();
//             }

//             return elements;
//         };

//         setTimeout(() => {
//             this.el.nativeElement.querySelector('.element2').style.display = 'block';
//         }, 1000);
//     }

//     buttonClicked() {
//         this.el.nativeElement.querySelector('.element21').style.display = 'block';
//     }
// }

// @Component({
//     selector: 'test-kitchen-plug',
//     template: '<div>kitchen plug</div>'
// })
// // tslint:disable-next-line:component-class-suffix
// export class TestKitchenPlug {
//     constructor() {
//     }
// }
