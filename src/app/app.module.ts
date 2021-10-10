import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandPageComponent } from './land-page/land-page.component';
import { SearchComponent } from './search/search.component';
import { SearchTabComponent } from './search/search-tab/search-tab.component';
import { SearchResultListComponent } from './search/search-result-list/search-result-list.component';
import { SearchPaginationComponent } from './search/search-pagination/search-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    SearchTabComponent,
    SearchResultListComponent,
    SearchComponent,
    SearchPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
