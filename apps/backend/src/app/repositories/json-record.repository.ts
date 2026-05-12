import { Injectable } from '@nestjs/common';
import { Record } from '../models/record.model';
import { IRecordRepository } from './record.repository';
import recordList from '../../assets/record-list.json';

@Injectable()
export class JsonRecordRepository implements IRecordRepository {
  getAll(): Record[] {
    return JSON.parse(JSON.stringify(recordList)) as Record[];
  }
}
