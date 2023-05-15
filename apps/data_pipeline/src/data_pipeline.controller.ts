import { Controller, Get } from '@nestjs/common';
import { DataPipelineService } from './data_pipeline.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class DataPipelineController {
  constructor(private readonly dataPipelineService: DataPipelineService) {}

  @EventPattern('HubSpot Access Token Received. Start Data pipeline!') 
  async handleHubSpotTokenReceived (@Payload() data : any , @Ctx() context : RmqContext)  {
    this.dataPipelineService.extractHubSpotData(data.request.HubspotAccessToken)  
  } 
  
}
