import { Component, Input, OnInit } from '@angular/core';
import { GoogleAnalyticsEventsService } from "../../google-analytics-events-service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() navBG;
  @Input() isMain;

  constructor(public googleAnalyticsEventsService: GoogleAnalyticsEventsService) { }

  ngOnInit() {
  }

  goLink(alt) {
    this.googleAnalyticsEventsService.emitEvent('Offsite', alt);
    console.log('Offsite link tracked for '+alt);
  }

}
