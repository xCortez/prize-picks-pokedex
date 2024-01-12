export interface HistoryEntry {
  id: number;
  name: string;
  sprite: string;
  dateSearched: number;
}

export interface HistoryState {
  searches: HistoryEntry[];
}