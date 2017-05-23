import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchRowComponent } from './search-row/search-row.component';
import { TagComponent } from './search-row/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchRowComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
