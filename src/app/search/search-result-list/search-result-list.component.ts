import { Component, OnInit } from '@angular/core';
import {searchResult} from '../search-result-card'

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css']
})
export class SearchResultListComponent implements OnInit {
  cards = searchResult;
  constructor() { }

  ngOnInit(): void {
  }

}
