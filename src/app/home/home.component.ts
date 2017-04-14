import { PlayerComponent } from './../player/player.component';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dammaDeshanaList: DhammaDeshanaSummary[];

  pirithDeshanaList: PirithDeshanaya[];
  pirithSubLists: PirithDeshanaya[][];

  sanitizer: DomSanitizer;

  constructor(private http: Http, sanitizer: DomSanitizer) {
    this.dammaDeshanaList = [];
    this.pirithDeshanaList = [];
    this.http.get('assets/dhamma-deshana.json').subscribe(res => {
      this.dammaDeshanaList = res.json();
      console.log(this.dammaDeshanaList);
    });

    this.http.get('assets/pirith-deshana.json').subscribe(res => {
      this.pirithDeshanaList = res.json();
      console.log(this.pirithDeshanaList);

      this.pirithSubLists = [];
      const columnCount = 4;
      this.pirithDeshanaList.forEach((item, index) => {
        const column = index % columnCount;
        if (this.pirithSubLists[column] == null) {
          this.pirithSubLists[column] = [];
          console.log('New list created for column : ' + column);
        }
        this.pirithSubLists[column].push(item);
        // console.log('Item ' + index + ' pushed to column : ' + column);
      });
    });
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
  }

  getDhammaUrl(dammaSummary: DhammaDeshanaSummary) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(dammaSummary.webUrl);
  }

  getPirithUrl(piritha: PirithDeshanaya) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(piritha.webUrl);
  }

}

class DhammaDeshanaSummary {
  title: string;
  description: string;
  webUrl: string;
  thero: string;
}

class PirithDeshanaya {
  title: string;
  description: string;
  webUrl: string;
}
