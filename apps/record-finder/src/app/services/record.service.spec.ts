import { TestBed } from '@angular/core/testing';
import { RecordService } from './record.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('RecordService', () => {
  let service: RecordService;
  let httpClient: HttpClient;

  const mockRecordList = ['Pomeranian', 'Poodle']

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RecordService,
        {
          provide: HttpClient,
          useValue: {
            get: jest.fn().mockReturnValue(mockRecordList)
          }
        }
      ],
    });

    service = TestBed.inject(RecordService);
    httpClient = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getRecordList', () => {
    it('should call http get', () => {
      expect(service.getRecordList()).toEqual(mockRecordList);
      expect(httpClient.get).toHaveBeenCalledWith('http://localhost:3000/api/record')
    })
  })
});
