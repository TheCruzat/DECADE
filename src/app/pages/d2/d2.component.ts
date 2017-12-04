import { Component, OnInit } from '@angular/core';
import { Tracks } from "../../services/tracks";
import { GoogleAnalyticsEventsService } from "../../google-analytics-events-service";

@Component({
  selector: 'app-d2',
  templateUrl: './d2.component.html',
  styleUrls: ['./d2.component.scss']
})

export class D2Component implements OnInit {

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

  constructor(public googleAnalyticsEventsService: GoogleAnalyticsEventsService) { }

  ngOnInit() {
    this.img = 'decade-b.jpg';
    this.title = 'D/EC/AD/E/2';
    this.by = 'by Dan Cruzat';
    this.col = 'be475e';
    this.src = 'https://bandcamp.com/EmbeddedPlayer/album=379088829/size=large/bgcol=ffffff/linkcol='+this.col+'/tracklist=false/artwork=none/transparent=true/';
    this.lnk = 'http://cruzat.bandcamp.com/album/d-ec-ad-e-2';
    this.dl = 'https://mega.nz/#!ErxHTThJ!LzMcot7JZ7KIsF4GrQXPHdduJckkEY9TL8DWSxiBYu0';
    this.sz = '142.3MB';

    this.ded = [
      'D2dication',
      'This chapter is for Eva and Max, who made me a better me. I am so so sorry.'
    ]

    this.tracks = Tracks.D2;
  }
}
