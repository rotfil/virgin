import { Record } from '../models/record.model';

export abstract class IRecordRepository {
  abstract getAll(): Record[];
}
