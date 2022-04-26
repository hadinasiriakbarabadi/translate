import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { customTranslate } from 'src/app/customTranslate.loader';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
       provide: TranslateLoader, // Main provider for loader
       useClass: customTranslate, // Custom Loader
       deps: [HttpClient], // Dependencies which helps serving loader
      }
     }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
