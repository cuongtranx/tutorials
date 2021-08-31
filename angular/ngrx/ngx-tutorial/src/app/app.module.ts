import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { counterReducer } from "./counter.reducer";
import { ajaxExampleReducer } from "./ajax-example.reducer";

import { AjaxExampleEffect } from "./ajax-example.effects";

import { AppComponent } from "./app.component";
import { MyCounterComponent } from "./my-counter/my-counter.component";
import { AjaxExampleComponent } from "./ajax-example/ajax-example.component";

@NgModule({
  declarations: [AppComponent, MyCounterComponent, AjaxExampleComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      count: counterReducer,
      ajaxExample: ajaxExampleReducer
    }),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([AjaxExampleEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
