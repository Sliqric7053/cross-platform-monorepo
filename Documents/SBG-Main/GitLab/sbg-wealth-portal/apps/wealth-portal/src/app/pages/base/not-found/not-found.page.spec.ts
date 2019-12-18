import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { NotFoundPage } from './not-found.page';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { mockReducer } from '../../../test/mock-providers';

describe('The NotFoundPage Module', () => {
  let component: NotFoundPage;
  let fixture: ComponentFixture<NotFoundPage>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [NotFoundPage],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        // MockServiceFrameworkModule.forEnv('dev'),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
            deps: [HttpClient]
          }
        })
      ],
      providers: [
        { provide: FormBuilder, useClass: FormBuilder },
        provideMockStore({})
      ]
    });
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
