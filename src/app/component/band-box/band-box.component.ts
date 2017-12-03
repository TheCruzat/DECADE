import { Component, Input, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { GoogleAnalyticsEventsService } from "../../google-analytics-events-service";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-band-box',
  templateUrl: './band-box.component.html',
  styleUrls: ['./band-box.component.scss']
})
export class BandBoxComponent implements OnInit {

  @Input() img:String;
  @Input() alt:String;
  @Input() by:String;
  @Input() src:String;
  @Input() lnk:String;
  @Input() dl:String;
  @Input() sz:String;
  @Input() col:String;

  // content
  @Input() ded:Array<string>;
  @Input() tracks:Array<string>;

  constructor(public googleAnalyticsEventsService: GoogleAnalyticsEventsService) { }

  ngOnInit() {
  }

  getAlbum(alt) {
    this.googleAnalyticsEventsService.emitEvent('Download', alt);
    console.log('Download tracked for '+alt);
  }

}
