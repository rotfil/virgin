export interface Record {
  name: string;
  description: string;
  size: string;
  origin: string;
  releaseType: string;
  style: string[];
  image: string;
}

export interface RecordState {
  recordList: Record[];
  filteredRecords: Record[];
  searchQuery: string; 
  selectedstyles: string[];
  sortKey: 'name' | null;
  sortDirection: 'asc' | 'desc';
} 