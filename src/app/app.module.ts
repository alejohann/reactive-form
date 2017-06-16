import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ObjectFormModule } from './object-form/object-form.module';
import { ObjectOutputComponent } from './object-output/object-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectOutputComponent
  ],
  imports: [
    BrowserModule,
    ObjectFormModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdTabsModule
  ],
  providers: [ObjectFormModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
