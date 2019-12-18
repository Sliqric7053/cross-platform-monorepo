import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { UnauthorizedPage } from './unauthorized.page';
// import {mockReducer} from '../../../test/mock-store';

import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
// import {MockServiceFrameworkModule} from '../../../frameworks/service.fx/service.mock.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

describe('The UnauthorizedPage Module', () => {
  let component: UnauthorizedPage;
  let fixture: ComponentFixture<UnauthorizedPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [UnauthorizedPage],
      imports: [
        // StoreModule.provideStore(mockReducer),
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
      providers: [{ provide: FormBuilder, useClass: FormBuilder }]
    });
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnauthorizedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
