import { Component, OnInit } from '@angular/core';
import { SearchResult } from './search-result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  queryList?: SearchResult;

  constructor() {}

  ngOnInit(): void {}

}
