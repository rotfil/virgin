import { Test, TestingModule } from '@nestjs/testing';
import { RecordController } from './record.controller';
import { RecordService } from '../services/record.service';
import { IRecordRepository } from '../repositories/record.repository';

describe('RecordController', () => {
  let recordController: RecordController;
  let recordService: RecordService;

  const mockRecordList = [
    { name: 'Abbey Road', description: 'Great song', size: 'Small', origin: 'UK', releaseType: '12-16', style: ['Playful'], image: 'abbey-road.jpg' },
    { name: 'Let It Be', description: 'Excellent', size: 'Medium', origin: 'UK', releaseType: '10-12', style: ['Friendly'], image: 'Abbey-Road2.jpg' }
  ];

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordController],
      providers: [
        RecordService,
        {
          provide: IRecordRepository,  // inject mock repository
          useValue: {
            getAll: jest.fn().mockReturnValue(mockRecordList),
          },
        },
      ],
    }).compile();

    recordController = module.get<RecordController>(RecordController);
    recordService = module.get<RecordService>(RecordService);
  });

  describe('getRecords', () => {
    it('should return a list of records', () => {
      const result = recordController.getAllRecords();
      expect(result).toEqual(mockRecordList);
      expect(recordService.getAllRecords()).toEqual(mockRecordList);
    });
  });
});
