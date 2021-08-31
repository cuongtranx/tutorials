import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroListWithDiComponent } from './heroes/hero-list-with-di/hero-list-with-di.component';
import { HeroListWoDiComponent } from './heroes/hero-list-wo-di/hero-list-wo-di.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroListWithDiComponent,
    HeroListWoDiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
