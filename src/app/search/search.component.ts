import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from './search-result';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() queryResponseList?: SearchResult;
  currentPage: number = 1;
  query: string = '';

  constructor(private searchService: SearchService) { }

  ngOnInit(): void { }

  async updateQueryList(query: string, newQuery: boolean) {
    if (newQuery) this.currentPage = 1;
    this.query = query;
    this.queryResponseList = await this.searchService.getRepositoryQueryList(query, this.currentPage);
  }

  async updateQueryPage(page: number) {
    this.currentPage = page
    this.updateQueryList(this.query, false);
  }
}
