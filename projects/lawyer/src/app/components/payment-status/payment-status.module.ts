import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaymentStatusComponent } from "./payment-status.component";

@NgModule({
  declarations: [PaymentStatusComponent],
  imports: [CommonModule],
  exports: [PaymentStatusComponent],
})
export class PaymentStatusModule {}
