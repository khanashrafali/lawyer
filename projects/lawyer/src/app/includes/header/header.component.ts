import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AuthData } from '../../models/apis.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  authData: AuthData | null = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authData = this.authService.getAuthData;
  }

  logout() {
    this.authService.logout();
  }
}
