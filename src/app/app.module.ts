import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

//import from routing comp below and progress bar
//import { PortfolioComponent } from './portfolio/portfolio.component';
// import { ProgressbarModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxYoutubePlayerModule.forRoot()
    // ProgressbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
