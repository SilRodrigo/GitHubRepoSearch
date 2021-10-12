import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-pagination',
  templateUrl: './search-pagination.component.html',
  styleUrls: ['./search-pagination.component.css', '../search.component.css'],
})
export class SearchPaginationComponent implements OnInit, OnChanges {
  @Input() totalResults?: number;
  @Output() updateQueryList = new EventEmitter<number>();
  @Input() currentPage: number = 1;
  totalPages?: number;
  PAGE_SIZE: number = 30;
  MAX_PAGINATION: number = 30;

  constructor() { }

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges) {
    this.updatePagination(changes.totalResults.currentValue);
  }

  updatePagination(totalResults: number) {
    if (!this.currentPage) this.currentPage = 1;
    this.totalPages = Math.floor(totalResults / this.PAGE_SIZE);
    if (this.totalPages > this.MAX_PAGINATION) this.totalPages = this.MAX_PAGINATION;
  }

  previousPage() {
    if (this.currentPage === 1) return;
    this.currentPage--;
    this.updateQueryList.emit(this.currentPage)
  }

  nextPage() {
    if (this.currentPage >= this.MAX_PAGINATION) return;
    this.currentPage++;
    this.updateQueryList.emit(this.currentPage)
  }

  goToKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const page: number = parseInt((event.target as HTMLInputElement).value);
      this.goToPage(page);
    }
  }

  goToPage(page: number) {
    if (!page || page > this.MAX_PAGINATION || page < 1) return;
    this.currentPage = page;
    this.updateQueryList.emit(this.currentPage);
  }
}
