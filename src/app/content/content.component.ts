import { Component, OnInit } from '@angular/core';
import {SearchListService} from '../search-list.service';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public searchService: SearchListService;
  name: string;
  id: string;
  people: any;
  constructor(private searchListService: SearchListService ) {
    this.searchService = searchListService;
  }

  ngOnInit(): void {
    this.id = 'id';
    this.name = 'name';
    this.people = ['p1', 'p2'];
  }
}
