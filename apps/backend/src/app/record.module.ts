import { Module } from '@nestjs/common';
import { RecordController } from './controllers/record.controller';
import { RecordService } from './services/record.service';
import { JsonRecordRepository } from './repositories/json-record.repository';
import { IRecordRepository } from './repositories/record.repository';

@Module({
  controllers: [RecordController],
  providers: [
    RecordService,
    { provide: IRecordRepository, useClass: JsonRecordRepository },
  ],
  exports: [RecordService],
})
export class RecordModule {}
