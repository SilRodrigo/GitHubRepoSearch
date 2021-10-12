import { Injectable } from '@angular/core';

import { SearchResult } from './search-result';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() { }

  async getRepositoryQueryList(query: string, page: number | null): Promise<SearchResult | undefined> {
    if (!query) return;
    query = '?q=' + encodeURIComponent(query) + '&page=' + page || 1 + '&sort=stars';
    let response = await fetch(
      `https://api.github.com/search/repositories${query}`,
      {
        method: 'GET',
      }
    );
    return await response.json();
  }
}
