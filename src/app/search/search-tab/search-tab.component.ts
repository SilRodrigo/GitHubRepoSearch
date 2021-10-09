import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchResult } from '../search-result';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.css'],
})
export class SearchTabComponent implements OnInit {
  searchKey?: string;
  queryResponse?: SearchResult;
  @Output() updateQueryList = new EventEmitter<any>();

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  async submitOnEnterPress(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    if (event.key === 'Enter' && target.value !== '') {
      this.queryResponse = await this.searchService.getRepositoryQueryList(
        target.value
      );
      this.updateQueryList.emit(this.queryResponse);
    }
  }
}
