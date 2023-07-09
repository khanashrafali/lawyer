import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderStatusComponent } from "./order-status.component";

@NgModule({
  declarations: [OrderStatusComponent],
  imports: [CommonModule],
  exports: [OrderStatusComponent],
})
export class OrderStatusModule {}
