export interface IDataStats {
  data: IDatum[];
  has_available_keywords: boolean;
  pages: number;
  recordsTotal: number;
  recordsFiltered: number;
  result: string;
}

export interface IDatum {
  keyword: string;
  id: number;
  countryCode?: string;
  updateDate?: string;
  updateDateIpad?: string;
  isCompleted?: boolean;
  canStartCampaign?: boolean | number;
  isAppstore?: boolean;
  is_clustered_search_result?: boolean;
  is_keywordstats_outdated?: boolean;
  position_info: Positioninfo;
  total_apps: number;
  users_per_day?: number;
  ipad_position_info?: Positioninfo;
  ipad_total_apps?: number;
  searchads_popularity?: number;
  suggestions_count: Suggestionscount | number;
  timestamp?: string;
  color: number;
  translation?: string;
  translation_from?: string;
}

interface Suggestionscount {
  [key: string]: any;
}

interface Positioninfo {
  position: number | string;
  change?: number;
}