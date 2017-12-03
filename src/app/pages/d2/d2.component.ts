import { Component, OnInit } from '@angular/core';
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

    this.tracks = [
      '1. Creative Thinkers Advance',
      '2. I Am The Man',
      '3. Plodd (Seaside Air)',
      '4. The Almost True Story of How We Fell In Love',
      '5. Lucky Guitar Strap',
      '6. Blood',
      '7. Cold Process of Elimination',
      '8. Morning Routine',
      '9. Bumped Up',
      '10. The Storm Breaks',
      '11. Obama Can&#39;t Walk On Water',
      '12. Bruh',
      '13. Daily Commute (Little Green Notebook)',
      '14. The Weird',
      '15. Downtemp',
      '16. Corporate Culture',
      '17. All Day',
      '18. Here We Go',
      '19. Fidelus',
      '20. Reflections',
      '21. The Law of the Corner',
      '22. I Never Saw It',
      '23. Hope You&#39;re Proud',
      '24. Still Climbing',
      '25. Calm in the Chase',
      '26. Electrocaine',
      '27. Bullshit Agency',
      '28. The Oasis is Real',
      '29. The Last Man (Stardust)',
      '30. So Glad It Never Happened',
      '31. The Seed of Menace',
      '32. Light Reign',
      '33. Sadness of Dusk (Shambles)',
      '34. Swanger',
      '35. The Knowing',
      '36. The End',
      '37. Eva &amp; Max',
      '38. Cruzat vs INXS (Questions)'
    ]
  }
}
