import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputVisitorDetailsComponent } from './input-visitor-details/input-visitor-details.component';
import { RequestQueueNumberComponent } from './request-queue-number/request-queue-number.component';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './tools/material.module';
import { APP_BASE_HREF } from '@angular/common';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPrintModule } from 'ngx-print'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputVisitorDetailsComponent,
    RequestQueueNumberComponent,
    VisitorListComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
