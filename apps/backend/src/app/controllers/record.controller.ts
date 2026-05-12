import { Controller, Get } from '@nestjs/common';
import { RecordService } from '../services/record.service';
import { Record } from '../models/record.model';

@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Get()
  getAllRecords(): Record[] {
    return this.recordService.getAllRecords();
  }
}
