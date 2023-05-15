import { Test, TestingModule } from '@nestjs/testing';
import { DataPipelineController } from './data_pipeline.controller';
import { DataPipelineService } from './data_pipeline.service';

describe('DataPipelineController', () => {
  let datapipelineController: DataPipelineController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DataPipelineController],
      providers: [DataPipelineService],
    }).compile();

    datapipelineController = app.get<DataPipelineController>(DataPipelineController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(datapipelineController.getHello()).toBe('Hello World!');
    });
  });
});
