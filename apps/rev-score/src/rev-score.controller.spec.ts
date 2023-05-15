import { Test, TestingModule } from '@nestjs/testing';
import { RevScoreController } from './rev-score.controller';
import { RevScoreService } from './rev-score.service';

describe('RevScoreController', () => {
  let revScoreController: RevScoreController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RevScoreController],
      providers: [RevScoreService],
    }).compile();

    revScoreController = app.get<RevScoreController>(RevScoreController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(revScoreController.getHello()).toBe('Hello World!');
    });
  });
});
