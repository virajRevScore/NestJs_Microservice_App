import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { OnboardingService } from './onboarding.service';
import { AddCRMDetailsRequest } from './dto/AddCRMDetailsRequest.dto';
import { JwtAuthGuard } from '@app/common';

@Controller('onboarding')
export class OnboardingController {
  constructor(private readonly onboardingService: OnboardingService) {}

  @Post('addCRMDetails')
  @UseGuards(JwtAuthGuard)
  async addCRMDetails( @Body() request : AddCRMDetailsRequest , @Req() req : any){
    console.log('user' , req.user)
    return await this.onboardingService.addCRMDetailsService(request , req.cookies?.Authentication)
  }

  @Get('userCRMDetails')
  @UseGuards(JwtAuthGuard)
  async getUsersCRMDetails (@Query('id') id ?: string){
    return await this.onboardingService.getUsersCRMDetailsService(id)
  }

}
