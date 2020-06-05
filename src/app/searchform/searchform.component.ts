import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SearchListService} from '../search-list.service';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  public searchService: SearchListService;
  name: string;
  id: string;
  people: any;

  constructor(private searchListService: SearchListService) {
    this.searchService = searchListService;
  }

  ngOnInit(): void {
    this.id = 'id';
    this.name = 'name';
    this.people = ['p1', 'p2'];
  }

  onSubmit(form1: NgForm): void {
    console.log(form1.value);
    console.log('Id= ' + this.id);
    console.log('name= ' + this.name);
  }

}
