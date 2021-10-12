import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from './search-result';
import { SearchService } from './search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() queryResponseList?: SearchResult;
  currentPage: number = 1;
  query: string = '';
  loading: boolean = false;

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const query = String(this.route.snapshot.paramMap.get('id'))
    this.updateQueryList(query, true);
  }

  async updateQueryList(query: string, newQuery: boolean) {
    this.loading = true;
    if (newQuery) this.currentPage = 1;
    this.query = query;
    this.queryResponseList = await this.searchService.getRepositoryQueryList(query, this.currentPage);
    this.loading = false;
  }

  async updateQueryPage(page: number) {
    this.currentPage = page
    this.updateQueryList(this.query, false);
  }
}
