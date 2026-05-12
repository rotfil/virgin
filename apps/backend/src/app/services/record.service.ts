import { Injectable } from '@nestjs/common';
import { IRecordRepository } from '../repositories/record.repository';
import { Record } from '../models/record.model';

@Injectable()
export class RecordService {
  constructor(private readonly repository: IRecordRepository) {}

  getAllRecords(): Record[] {
    return this.repository.getAll();
  }
}
