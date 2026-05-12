import { createAction, props } from '@ngrx/store';
import { Record } from './record.model';

export const getRecordList = createAction('[Record] Get Record List');

export const getRecordListSuccess = createAction(
  '[Record] Get Record List Success',
  props<{ records: Record[] }>(),
);

export const searchRecords = createAction(
  '[Record] Search Records',
  props<{ query: string }>()
);

export const filterRecords = createAction(
  '[Record] Filter Records',
  props<{ 
    query?: string; 
    size?: string | null; 
    origin?: string | null;
    temperaments?: string[];
  }>()
);

export const filterByTemperament = createAction(
  '[Record] Filter by Temperament',
  props<{ temperament: string }>()
);

export const sortRecords = createAction(
  '[Record] Sort Records',
  props<{ direction: 'asc' | 'desc' }>()
);

export const getRecordListFailure = createAction('[Record] Get Record List Failure', props<{ error: Error }>());

