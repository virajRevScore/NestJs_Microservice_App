import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { OnboardingService } from './onboarding.service';
import { AddCRMDetailsRequest } from './dto/AddCRMDetailsRequest.dto';

@Controller('onboarding')
export class OnboardingController {
  constructor(private readonly onboardingService: OnboardingService) {}

  @Post('addCRMDetails')
  async addCRMDetails( @Body() request : AddCRMDetailsRequest){
    return await this.onboardingService.addCRMDetailsService(request)
  }

  @Get('userCRMDetails')
  async getUsersCRMDetails (@Query('id') id ?: string){
    return await this.onboardingService.getUsersCRMDetailsService(id)
  }

}
