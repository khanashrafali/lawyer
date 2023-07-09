import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  constructor(private ui:UiService) { }

  ngOnInit(): void {
    if (!this.ui.isBrowser) return;
    setTimeout(() => {
      window.scroll(0,0)
    }, 100);
  }

}
