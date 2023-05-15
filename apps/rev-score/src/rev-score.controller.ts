import { Controller, Get } from '@nestjs/common';
import { RevScoreService } from './rev-score.service';

@Controller()
export class RevScoreController {
  constructor(private readonly revScoreService: RevScoreService) {}

  @Get()
  getHello(): string {
    return this.revScoreService.getHello();
  }
}
