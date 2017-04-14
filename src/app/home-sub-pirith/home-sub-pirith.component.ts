import { PagerService } from './../services/pager.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PlayerComponent } from './../player/player.component';

@Component({
  selector: 'app-home-sub-pirith',
  templateUrl: './home-sub-pirith.component.html',
  styleUrls: ['./home-sub-pirith.component.css']
})
export class HomeSubPirithComponent implements OnInit {

  sanitizer: DomSanitizer;

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private http: Http, sanitizer: DomSanitizer, private pagerService: PagerService) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this.http.get('assets/pirith-deshana.json')
      .map((response: Response) => response.json())
      .subscribe(data => {
        // set items to json response
        this.allItems = data;
        console.log(this.allItems);

        // initialize to page 1
        this.setPage(1);
      });
  }

  getPirithUrl(piritha: PirithDeshanaya) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(piritha.webUrl);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}

class PirithDeshanaya {
  title: string;
  description: string;
  webUrl: string;
}
