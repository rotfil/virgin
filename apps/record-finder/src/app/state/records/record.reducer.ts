import { createFeature, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { RecordState, Record } from './record.model';
import { getRecordListSuccess, searchRecords, sortRecords, filterRecords } from './record.actions';

// Initial State
export const initialState: RecordState = {
  recordList: [],
  filteredRecords: [],
  searchQuery: '',
  selectedTemperaments: [],
  sortKey: 'name',
  sortDirection: 'asc',
};


const filterBySearch = (records: Record[], query: string) =>
  records.filter(b => b.name.toLowerCase().includes(query.toLowerCase()));

const filterByTemperaments = (records: Record[], temperaments: string[]) =>
  temperaments.length > 0
    ? records.filter(b => b.temperament.some(temp => temperaments.includes(temp)))
    : records;

const sortByName = (records: Record[], direction: 'asc' | 'desc') =>
  records.sort((a, b) => direction === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

const applyFiltersAndSort = (state: RecordState): RecordState => {
  let filtered = [...state.recordList];

  filtered = filterBySearch(filtered, state.searchQuery);
  filtered = filterByTemperaments(filtered, state.selectedTemperaments);
  filtered = sortByName(filtered, state.sortDirection);

  return { ...state, filteredRecords: filtered };
};


// Reducer
export const recordReducer = createFeature({
  name: 'recordState',
  reducer: createReducer(
    initialState,

    on(getRecordListSuccess, (state, { records }) =>
      applyFiltersAndSort({ ...state, recordList: records })
    ),

    on(searchRecords, (state, { query }) =>
      applyFiltersAndSort({ ...state, searchQuery: query })
    ),

    on(sortRecords, (state, { direction }) =>
      applyFiltersAndSort({ ...state, sortDirection: direction })
    ),

    on(filterRecords, (state, { size, origin, temperaments, query }) =>
      applyFiltersAndSort({
        ...state,
        selectedTemperaments: temperaments ?? state.selectedTemperaments,
        searchQuery: query ?? state.searchQuery
      })
    )
  ),
});


// Selectors
export const selectRecordState = createFeatureSelector<RecordState>('recordState');

export const selectFilteredRecords = createSelector(
  selectRecordState,
  state => state.filteredRecords
);

export const selectSearchQuery = createSelector(
  selectRecordState,
  state => state.searchQuery
);
