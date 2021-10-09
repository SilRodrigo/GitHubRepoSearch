export interface SearchResult {
  total_count: string;
  items: SearchResultItem[];
}

interface SearchResultItem {
  id: number;
  clone_url: string;
  full_name: string;
  description: string;
  watchers_count: number;
  stargazers_count: number;
  language: string;
  updated_at: string;
  open_issues: number;
  license: { name: string } | null;
}
