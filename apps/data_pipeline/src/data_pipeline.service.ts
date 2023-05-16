import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class DataPipelineService {
  private readonly logger = new Logger(DataPipelineService.name)
 
  extractHubSpotData (hubSpotAccessToken : any) {
    this.logger.log(`Token received ${hubSpotAccessToken} ... Starting data extraction`)
    console.log('reached here')
    
  }
}
