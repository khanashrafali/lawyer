import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private ui:UiService) { }

  ngOnInit(): void {
    if (!this.ui.isBrowser) return;
    setTimeout(() => {
      window.scroll(0,0)
    }, 100);
  }

}
