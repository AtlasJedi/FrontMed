import { NgModule, LOCALE_ID } from '@angular/core';
import { TestComponent } from './components/test/test.component';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';

import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    TestComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    BottomSheetComponent
  ],
  imports: [
    MaterialModule
  ],
  entryComponents: [BottomSheetComponent],
  providers: [{provide: LOCALE_ID, useValue: 'pl'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
