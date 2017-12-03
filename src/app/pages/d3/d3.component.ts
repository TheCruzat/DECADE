import { Component, OnInit } from '@angular/core';
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

    this.tracks = [
      '1. An Understatement to Say...',
      '2. A Stranger In the Missed',
      '3. The Haze',
      '4. Insomnia',
      '5. Sarcasm and Sincerity',
      '6. My Office in the Sky',
      '7. DWNVSKL (Return to Camp Bell)',
      '8. Bodega Chicken',
      '9. Do You Dream?',
      '10. This Is My Fuckin Dream',
      '11. Born of Kings',
      '12. The Girl on the Bus',
      '13. I&#39;m a 70&#39;s Baby, Baby',
      '14. Sticky Fingers',
      '15. Pressure Pier',
      '16. Came Up Sick',
      '17. They Needed Us',
      '18. I Was Selfish',
      '19. Ridiculous Chivalrous Posturing',
      '20. After the Soul',
      '21. Scared Ass Bitch',
      '22. Magellan',
      '23. Drink &amp; Write',
      '24. Ascetix (What Kind of Life?)',
      '25. Stakeout',
      '26. Losing Time',
      '27. Nose Fulla Coke',
      '28. The Whye',
      '29. Ellsworth',
      '30. The Art of Moneymaking (Layercake)',
      '31. The First Time I Saw Her',
      '32. Cruzat vs Fruition (For LL / Pump)'
    ]
  }
}
