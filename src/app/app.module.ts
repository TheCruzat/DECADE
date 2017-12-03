import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GoogleAnalyticsEventsService } from './google-analytics-events-service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { LandingComponent } from './pages/landing/landing.component';
import { D1Component } from './pages/d1/d1.component';
import { D2Component } from './pages/d2/d2.component';
import { D3Component } from './pages/d3/d3.component';
import { D4Component } from './pages/d4/d4.component';
import { D10RoutingModule }     from './app-routing.module';
import { FooterComponent } from './component/footer/footer.component';
import { SafePipe } from './component/band-box/band-box.component';
import { BandBoxComponent } from './component/band-box/band-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LandingComponent,
    D1Component,
    D2Component,
    D3Component,
    D4Component,
    FooterComponent,
    BandBoxComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    D10RoutingModule
  ],
  providers: [GoogleAnalyticsEventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
