import { Component, OnInit } from '@angular/core';
import { Tracks } from "../../services/tracks";
import { GoogleAnalyticsEventsService } from "../../google-analytics-events-service";


@Component({
  selector: 'app-d1',
  templateUrl: './d1.component.html',
  styleUrls: ['./d1.component.scss']
})

export class D1Component implements OnInit {

  img: string;
  title: string;
  by: string;
  src: string;
  lnk: string;
  dl: string;
  sz: string;
  col: string;
  ded: Array<string>;
  tracks: Array<string>;

  constructor(public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {
  }

  ngOnInit() {
    this.img = 'decade-a.jpg';
    this.title = 'D/EC/AD/E/1';
    this.by = 'by Dan Cruzat';
    this.col = '13c7a3';
    this.src = 'https://bandcamp.com/EmbeddedPlayer/album=1796920231/size=large/bgcol=ffffff/linkcol='+this.col+'/tracklist=false/artwork=none/transparent=true/';
    this.lnk = 'http://cruzat.bandcamp.com/album/d-ec-ad-e-1';
    this.dl = 'https://mega.nz/#!AjBATCQL!kUdajlPQ7OLq7OTNmcHkPtPUM5AYMgkP4QKy4DBQGog';
    this.sz = '114.2MB';

    this.ded = [
      'D1dication',
      'This chapter is for everyone I left behind in the Midwest. I still love you all.'
    ]

    this.tracks = Tracks.D1;
  }
}
