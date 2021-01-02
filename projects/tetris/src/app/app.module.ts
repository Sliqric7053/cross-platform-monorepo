import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  GameEngineLibService,
  GameEngineLibComponent,
  GameEngineLibModule,
} from "@game-engine-lib";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GameEngineLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
