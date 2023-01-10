import { Controller, Post } from "@nestjs/common";

@Controller('payments')
export class PaymentsController {
  // constructor() {}

  @Post('create')
  createPayment() {
    return 'Payment created';
  }
}