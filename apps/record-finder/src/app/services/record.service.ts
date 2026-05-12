import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Record } from '../state/records/record.model';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  constructor(private http: HttpClient) {}

  public getRecordList(): Observable<Record[]> {
    return this.http.get<Record[]>('http://localhost:3000/api/record')
  }
}
