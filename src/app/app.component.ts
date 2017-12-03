import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsEventsService } from "./google-analytics-events-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(public router: Router, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            if (evt instanceof NavigationEnd) {
              ga('set', 'page', evt.urlAfterRedirects);
              ga('send', 'pageview');
            }
            window.scrollTo(0, 0)
        });
    }
}
