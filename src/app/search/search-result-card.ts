import {data} from './search-result-return'

export interface SearchResultCard {
  id: number;
  clone_url: string;
  full_name: string;
  description: string;
  watchers_count: number;
  stargazers_count: number;
  language: string;
  updated_at: string;
  open_issues: number;
}

export const searchResult = data.items