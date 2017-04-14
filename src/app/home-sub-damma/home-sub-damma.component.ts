import { PagerService } from './../services/pager.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home-sub-damma',
  templateUrl: './home-sub-damma.component.html',
  styleUrls: ['./home-sub-damma.component.css']
})
export class HomeSubDammaComponent implements OnInit {

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
    this.http.get('assets/dhamma-deshana.json')
      .map((response: Response) => response.json())
      .subscribe(data => {
        // set items to json response
        this.allItems = data;

        // initialize to page 1
        this.setPage(1);
      });
  }

  getDhammaUrl(dammaSummary: DhammaDeshanaSummary) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(dammaSummary.webUrl);
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

class DhammaDeshanaSummary {
  title: string;
  description: string;
  webUrl: string;
  thero: string;
}