import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { RecordEffects } from './record.effects';
import { RecordService } from '../../services/record.service';
import { getRecordList, getRecordListFailure, getRecordListSuccess } from './record.actions';
import { Record } from './record.model';

describe('RecordEffects', () => {
  let actions: Observable<unknown>;
  let effects: RecordEffects;
  let service: RecordService;
  let store: MockStore;

  const mockRecordList: Record[] = [
    { name: 'Abbey Road', description: '', size: '', origin: '', releaseType: '', style: [], image: '' },
    { name: 'Let It Be', description: '', size: '', origin: '', releaseType: '', style: [], image: '' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RecordEffects,
        provideMockStore(),
        provideMockActions(() => actions),
        {
          provide: RecordService,
          useValue: {
            getRecordList: jest.fn()
          }
        }
      ]
    });

    service = TestBed.inject(RecordService);
    effects = TestBed.inject(RecordEffects);
    store = TestBed.inject(MockStore);

    jest.spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('getRecordList$', () => {
    describe('when the service returns successful', () => {
      it('should dispatch getRecordListSuccess', () => {
        actions = hot('-a', { a: getRecordList() });

        const serviceResponse = cold('-a', { a: mockRecordList });
        service.getRecordList = jest.fn(() => serviceResponse);

        const expected = cold('--a', { a: getRecordListSuccess({ records: mockRecordList }) });

        expect(effects.getRecordList$).toBeObservable(expected);
        expect(service.getRecordList).toHaveBeenCalled();
      });
    });

    describe('when the service returns an error', () => {
      it('should dispatch getRecordListFailure', () => {
        const error = new Error('oops');

        actions = hot('-a', { a: getRecordList() });

        const serviceResponse = cold('-#|', {}, error);
        service.getRecordList = jest.fn(() => serviceResponse);

        const expected = cold('--a', { a: getRecordListFailure({error}) });

        expect(effects.getRecordList$).toBeObservable(expected);
        expect(service.getRecordList).toHaveBeenCalled();
      });
    });
  });
});
