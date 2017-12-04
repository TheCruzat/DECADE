import { Component, OnInit } from '@angular/core';
import { Tracks } from "../../services/tracks";
import { GoogleAnalyticsEventsService } from "../../google-analytics-events-service";

@Component({
  selector: 'app-d4',
  templateUrl: './d4.component.html',
  styleUrls: ['./d4.component.scss']
})

export class D4Component implements OnInit {

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
    this.img = 'decade-d.jpg';
    this.title = 'D/EC/AD/E/4';
    this.by = 'by Dan Cruzat';
    this.col = 'fcbe02';
    this.src = 'https://bandcamp.com/EmbeddedPlayer/album=1789435390/size=large/bgcol=ffffff/linkcol='+this.col+'/tracklist=false/artwork=none/transparent=true/';
    this.lnk = 'http://cruzat.bandcamp.com/album/d-ec-ad-e-1';
    this.dl = 'https://mega.nz/#!tvpgiKKI!I_FteLgzo_o7chSqZV8fB7ApWxU5ymUr8_t_b89JcfE';
    this.sz = '139.9MB';

    this.ded = [
      'D4dication',
      "This chapter is for Jody Minnoch, Robin Balmer &amp; Edmond Moroney. <br>We don't realize how fragile and fleeting life is until it ends. <br>Tell your people you love them."
    ]

    this.tracks = Tracks.D4;
  }

}
