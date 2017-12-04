import { Component, OnInit } from '@angular/core';
import { Tracks } from "../../services/tracks";
import { GoogleAnalyticsEventsService } from "../../google-analytics-events-service";

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss']
})

export class D3Component implements OnInit {

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

  constructor(public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {}

  ngOnInit() {
    this.img = 'decade-c.jpg';
    this.title = 'D/EC/AD/E/3';
    this.by = 'by Dan Cruzat';
    this.col = '71c4e0';
    this.src = 'https://bandcamp.com/EmbeddedPlayer/album=3606247811/size=large/bgcol=ffffff/linkcol='+this.col+'/tracklist=false/artwork=none/transparent=true/';
    this.lnk = 'http://cruzat.bandcamp.com/album/d-ec-ad-e-3';
    this.dl = 'https://mega.nz/#!5nJiDAKJ!azaFKmmmHeCN1o9FxKWurMFkVl5tOKLDOGL2QA0pn1o';
    this.sz = '126.9MB';

    this.ded = [
      'd3dication',
      "This chapter is for Lacey Lin, who deserved far better than what I had to offer. <br>I hope you're dancing."
    ]

    this.tracks = Tracks.D3;
  }
}
