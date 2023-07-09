import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-page500',
  templateUrl: './page500.component.html',
  styleUrls: ['./page500.component.css'],
})
export class Page500Component implements OnInit {
  constructor(private ui: UiService) {}

  ngOnInit(): void {
    if (!this.ui.isBrowser) return;

    setTimeout(() => {
      window.scroll(0, 0);
    }, 100);
  }
}
