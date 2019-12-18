import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppPageComponent } from './app/pages/app.page';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  removeNgStyles,
  createNewHosts,
  bootloader,
  createInputTransfer,
  hmrModule
} from '@angularclass/hmr';
import { ApplicationRef, NgModule } from '@angular/core';
import { AppModule } from './app/app.module';

@NgModule({
  bootstrap: [AppPageComponent],
  declarations: [AppPageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([], {
      useHash: true
    }),
    AppModule
  ],
  providers: []
})
class MainModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    if (!store || !store.state) {
      return;
    }
    if ('restoreInputValues' in store) {
      store.restoreInputValues();
    }
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(
      cmp => cmp.location.nativeElement
    );
    store.disposeOldHosts = createNewHosts(cmpLocation);
    store.state = { data: 'yolo' };
    store.restoreInputValues = createInputTransfer();
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}

export function main() {
  return platformBrowserDynamic()
    .bootstrapModule(MainModule)
    .then((ngModuleRef: any) => {
      // Don't run this in Prod
      return hmrModule(ngModuleRef, module);
    });
}

bootloader(main);
