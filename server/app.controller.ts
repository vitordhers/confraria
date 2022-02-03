import { Controller, Get } from "@nestjs/common";
import { IResponse } from "src/app/shared/interfaces/response.interface";

@Controller()
export class AppController {
  @Get("/health")
  async getHealth(): Promise<IResponse> {
    return {
      success: true
    };
  }
}
