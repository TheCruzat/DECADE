import { Component, OnInit } from '@angular/core';
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

    this.tracks = [
      '1. Welcome to Portland',
      '2. Recovery',
      '3. Melanchol Shuffles',
      '4. The Merciful Heart (RIP Double-P)',
      '5. My Plan is Fucked',
      '6. Right Place Wrong Time',
      '7. Protean',
      '8. Alone with the Ghosts',
      '9. I Can&#39;t Sleep',
      '10. An Evening Theme for Zordak',
      '11. Throwbacks (Ben&#39;s Living Room)',
      '12. You&#39;ve Got Something',
      '13. Lust on Smash',
      '14. Low (J Dilla Tribute)',
      '15. Some Rollin Blues',
      '16. Couple Things to Know',
      '17. Spanish Swagger',
      '18. Right When You Give Up',
      '19. Show Me the Way',
      '20. Untitled 5 (...for the rain)',
      '21. GHA (We Are Doomed)',
      '22. This Shit Isn&#39;t Real',
      '23. Called the Business',
      '24. The Majestical',
      '25. Another Dream',
      '26. The Dance',
      '27. Tales From Teh Sippeh',
      '28. Shorty Pop (The One About Le Screw)',
      '29. Emotional Content',
      '30. Sincurrleh',
      '31. SE Hawthorne',
      '32. Cruzat vs Fiasco (Superstar)'
    ]
  }
}
