import { Test, TestingModule } from '@nestjs/testing';
import { RecordController } from './record.controller';
import { RecordService } from '../services/record.service';
import { IRecordRepository } from '../repositories/record.repository';

describe('RecordController', () => {
  let recordController: RecordController;
  let recordService: RecordService;

  const mockRecordList = [
    { name: 'Pomeranian', description: 'Small dog', size: 'Small', origin: 'Germany', lifeExpectancy: '12-16', temperament: ['Playful'], image: 'pomeranian.jpg' },
    { name: 'Labrador', description: 'Friendly dog', size: 'Medium', origin: 'Canada', lifeExpectancy: '10-12', temperament: ['Friendly'], image: 'labrador.jpg' }
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
