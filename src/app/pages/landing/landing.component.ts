import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { GoogleAnalyticsEventsService } from "../../google-analytics-events-service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public googleAnalyticsEventsService: GoogleAnalyticsEventsService) { }

  ngOnInit() {

  }
  getAlbum(alt) {
    this.googleAnalyticsEventsService.emitEvent('Download', alt);
    console.log('Download tracked for '+alt);
  }

}
