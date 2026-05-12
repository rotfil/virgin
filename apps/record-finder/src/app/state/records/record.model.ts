export interface Record {
  name: string;
  description: string;
  size: string;
  origin: string;
  lifeExpectancy: string;
  temperament: string[];
  image: string;
}

export interface RecordState {
  recordList: Record[];
  filteredRecords: Record[];
  searchQuery: string; 
  selectedTemperaments: string[];
  sortKey: 'name' | null;
  sortDirection: 'asc' | 'desc';
} 