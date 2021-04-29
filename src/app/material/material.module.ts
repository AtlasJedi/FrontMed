import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule, MatAccordion} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {MatSelectModule } from '@angular/material/select';
import {SimpleNotificationsModule } from 'angular2-notifications';

const expo = [
  LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    CarouselModule,

    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    HttpClientModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatBottomSheetModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    SimpleNotificationsModule.forRoot({
      timeOut: 2000,
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: true
    })
];
@NgModule({
  declarations: [],
  imports: [
    expo
  ],
  exports: [
    expo
  ],
})
export class MaterialModule { }
