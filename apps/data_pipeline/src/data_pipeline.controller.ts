import { Controller, Get } from '@nestjs/common';
import { DataPipelineService } from './data_pipeline.service';

@Controller()
export class DataPipelineController {
  constructor(private readonly dataPipelineService: DataPipelineService) {}

  @Get()
  getHello(): string {
    return this.dataPipelineService.getHello();
  }
}
