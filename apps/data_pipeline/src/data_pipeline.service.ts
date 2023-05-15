import { Injectable } from '@nestjs/common';

@Injectable()
export class DataPipelineService {
  getHello(): string {
    return 'Hello World!';
  }
}
