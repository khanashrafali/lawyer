import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private ui:UiService) { }

  ngOnInit(): void {
    if (!this.ui.isBrowser) return;
    setTimeout(() => {
      window.scroll(0,0)
    }, 100);
  }

}
