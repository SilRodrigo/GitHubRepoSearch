import { Injectable } from '@angular/core';

import { SearchResult } from './search-result';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  async getRepositoryQueryList(query: string): Promise<SearchResult> {
    query = '?q=' + encodeURIComponent(query) + '&page=1&sort=stars';
    let response = await fetch(
      `https://api.github.com/search/repositories${query}`,
      {
        method: 'GET',
      }
    );
    response = await response.json()
    /* console.log(response) */
    return this.processQueryReturn(response);
  }

  processQueryReturn(queryReturn: any): SearchResult {
    const searchList: SearchResult = {
      total_count: new Intl.NumberFormat().format(queryReturn.total_count),
      items: queryReturn.items,
    };

    searchList.items.forEach(
      (item, index) =>
        (searchList.items[index].updated_at = this.formatDateToCard(
          item.updated_at
        ))
    );
    return searchList;
  }

  formatDateToCard(date: string | Date): string {
    date = new Date(date);
    let today = new Date();
    if (date.getDate() === today.getDate())
      return `Atualizado ${
        new Date().getHours() - date.getHours()
      } hora(s) atrás.`;
    if (today.setDate(today.getDate() - 4) <= date.getTime())
      return `Atualizado ${
        new Date().getDate() - date.getDate()
      } dia(s) atrás.`;
    return `Atualizado em ${('0' + date.getDate()).slice(-2)}/${(
      '0' + date.getMonth()
    ).slice(-2)}/${date.getFullYear()}`;
  }
}
