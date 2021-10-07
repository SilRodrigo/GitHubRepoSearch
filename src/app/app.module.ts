import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandPageComponent } from './land-page/land-page.component';
import { SearchTabComponent } from './search/search-tab/search-tab.component';
import { SearchResultListComponent } from './search/search-result-list/search-result-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    SearchTabComponent,
    SearchResultListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
