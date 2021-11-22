import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule.forRoot(ROOT_REDUCERS)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
