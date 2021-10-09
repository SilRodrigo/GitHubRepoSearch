import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../search-result';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css'],
})
export class SearchResultListComponent implements OnInit {
  @Input() queryList?: SearchResult;

  constructor() {}

  ngOnInit() {}
}
