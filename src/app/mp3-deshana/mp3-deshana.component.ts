import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PlayerComponent } from './../player/player.component';
import * as _ from 'underscore';

@Component({
  selector: 'app-mp3-deshana',
  templateUrl: './mp3-deshana.component.html',
  styleUrls: ['./mp3-deshana.component.css']
})
export class Mp3DeshanaComponent implements OnInit {
  private pageSize: number;
  sanitizer: DomSanitizer;

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  theroNameMap = new Map();
  theroNameSet = new Set();

  constructor(private http: Http, sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this.http.get('assets/dhamma-deshan-mp3.json')
      .map((response: Response) => response.json())
      .subscribe(data => {
        // set items to json response
        this.allItems = data;
        console.log(this.allItems);
        // initialize to page 1
        this.setPage(1);

        for (let item of this.allItems) {
          this.theroNameMap.set(item.theroKey, item.thero);
          this.theroNameSet.add(item.thero);
        }
        console.log(this.theroNameMap);
        console.log(this.theroNameSet);
      });
  }

  getDhammaUrl(dammaSummary: MP3DhammaDeshanaDetail) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(dammaSummary.webUrl);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  filterResults(clickedThero: string) {
    console.log('Clicked : ' + clickedThero);

    this.allItems = [];

    this.http.get('assets/dhamma-deshan-mp3.json')
      .map((response: Response) => response.json())
      .subscribe(data => {

        if (clickedThero === 'all') {
          this.allItems = data;
        } else {
          for (let item of data) {
            if (item.thero === clickedThero) {
              this.allItems.push(item);
            }
          }
        }
        console.log(this.allItems);
        // initialize to page 1
        this.setPage(1);

      });
  }

  getPager(totalItems: number, currentPage: number = 1) {

    this.pageSize = 8;

    // calculate total pages
    let totalPages = Math.ceil(totalItems / this.pageSize);

    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * this.pageSize;
    let endIndex = Math.min(startIndex + this.pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = _.range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: this.pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}

class MP3DhammaDeshanaDetail {
  title: string;
  description: string;
  webUrl: string;
  thero: string;
  theroKey: string;
  keywords: string;
}