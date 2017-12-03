import { Component, OnInit } from '@angular/core';
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

    this.tracks = [
      '1. Terrible Things',
      '2. An Earnest Plate of Cold',
      '3. Be On One',
      '4. Best in the Business',
      '5. Question Is',
      '6. Needs / Gets',
      '7. Salt Mine',
      '8. Buoyancy',
      '9. A Sultry Interlude',
      '10. Are We Solid?',
      '11. B Leav N U',
      '12. Junk Shop Digging',
      '13. Rush, Crash, Apathy',
      '14. Call to Prayer (DSHND)',
      '15. Ed Floated Away',
      '16. Drifting',
      '17. Menthols',
      '18. Not About That Life',
      '19. Mature Brags',
      '20. The Shaolin',
      '21. Foster Road Grifter',
      '22. Promise by the Pond',
      '23. Volume Pump',
      '24. Imperfect Paradise',
      '25. Neither or Nor',
      '26. All a Fugazie',
      '27. Brother Do the Math',
      '28. Disclaimer &amp; Definition',
      '29. White Boy',
      '30. My Last Night in Evanston',
      '31. Daze Between',
      '32. Stumptown (E+C Anthem)',
      '33. Back to the Dega',
      '34. Next Big Step',
      '35. Cruzat vs Erasure (Breath of Life)'
    ]
  }

}
