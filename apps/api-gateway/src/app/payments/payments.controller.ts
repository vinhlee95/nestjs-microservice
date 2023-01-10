import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { PaymentsService } from "./payments.service";

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create')
  createPayment(@Body(ValidationPipe) payload: any) {
    this.paymentsService.createPayment(payload);
  }
}