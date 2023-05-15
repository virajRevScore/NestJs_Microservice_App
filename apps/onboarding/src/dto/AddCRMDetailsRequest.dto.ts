import { IsNotEmpty, IsString } from "class-validator";

export class AddCRMDetailsRequest {
    @IsString()
    @IsNotEmpty()
    HubspotAccessToken : string ;
}