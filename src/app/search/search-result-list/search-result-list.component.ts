import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../search-result';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css'],
})
export class SearchResultListComponent implements OnInit {
  @Input() queryList?: SearchResult;

  constructor() { }

  ngOnInit() { }

  formatTotalCount(value: number): string {
    return new Intl.NumberFormat().format(value);
  }

  formatDateToDisplay(date: string | Date): string {
    date = new Date(date);
    let today = new Date();
    if (date.getDate() === today.getDate())
      return `Atualizado ${new Date().getHours() - date.getHours()
        } hora(s) atrás.`;
    if (today.setDate(today.getDate() - 4) <= date.getTime())
      return `Atualizado ${new Date().getDate() - date.getDate()
        } dia(s) atrás.`;
    return `Atualizado em ${('0' + date.getDate()).slice(-2)}/${(
      '0' + date.getMonth()
    ).slice(-2)}/${date.getFullYear()}`;
  }
}
