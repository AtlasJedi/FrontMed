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
import { ContactSheetComponent } from './components/bottom-sheets/contact-sheet/contact-sheet.component';
import { HandiSheetComponent } from './components/bottom-sheets/handi-sheet/handi-sheet.component';
import { EmailSheetComponent } from './components/bottom-sheets/email-sheet/email-sheet.component';
import { FooterComponent } from './components/footer/footer.component';
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
    ContactSheetComponent,
    HandiSheetComponent,
    EmailSheetComponent,
    FooterComponent
  ],
  imports: [
    MaterialModule
  ],
  entryComponents: [HandiSheetComponent, ContactSheetComponent, EmailSheetComponent],
  providers: [{provide: LOCALE_ID, useValue: 'pl'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
