import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Location } from '@angular/common';
import { SearchResult } from '../search-result';

@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.css', '../search.component.css'],
})
export class SearchTabComponent implements OnInit {
  @Input() query: string = '';
  queryResponse?: SearchResult;
  @Output() updateQueryList = new EventEmitter<any>();

  constructor(private location: Location) { }

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

  goBack(): void {
    this.location.back();
  }
}
