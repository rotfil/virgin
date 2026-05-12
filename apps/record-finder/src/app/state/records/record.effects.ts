import { Injectable } from '@angular/core';
import { RecordService } from '../../services/record.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getRecordList, getRecordListFailure, getRecordListSuccess } from './record.actions';
import { catchError, concatMap, map, of } from 'rxjs';

@Injectable()
export class RecordEffects {
  constructor(
    private actions$: Actions,
    private recordService: RecordService,
  ) {}

  getRecordList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getRecordList),
      concatMap(() => {
          return this.recordService.getRecordList().pipe(
            map((records) =>
              getRecordListSuccess({ records }),
            ),
            catchError((e) => of(getRecordListFailure({ error: e }))),
          )
        }
      ),
    );
  });
}
