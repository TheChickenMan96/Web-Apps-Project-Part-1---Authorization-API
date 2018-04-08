import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { ValueService } from './value.service';

import { AppComponent } from './app.component';
import { SampleDataComponent } from './sample-data/sample-data.component';
import { BannerComponent } from './banner/banner.component';
import { SampleTextComponent } from './sample-text/sample-text.component';
import { ServerDataComponent } from './server-data/server-data.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { ValuesComponent } from './values/values.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleDataComponent,
    BannerComponent,
    SampleTextComponent,
    ServerDataComponent,
    PersonFormComponent,
    ValuesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
