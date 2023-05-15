import { Module } from '@nestjs/common';
import { RevScoreController } from './rev-score.controller';
import { RevScoreService } from './rev-score.service';

@Module({
  imports: [],
  controllers: [RevScoreController],
  providers: [RevScoreService],
})
export class RevScoreModule {}
