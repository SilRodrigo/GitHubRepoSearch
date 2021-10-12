import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchResult } from '../search-result';

@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.css', '../search.component.css'],
})
export class SearchTabComponent implements OnInit {
  searchKey?: string;
  queryResponse?: SearchResult;
  @Output() updateQueryList = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  async submitOnEnterKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const target = event.target as HTMLInputElement;
      if (target.value !== '') {
        this.updateQueryList.emit(target.value);
      }
    }
  }

  async submitOnButtonClick(value: string) {
    if (value !== '') this.updateQueryList.emit(value);
  }
}
