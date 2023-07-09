import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../../services/app.service';
import { UiService } from '../../services/ui.service';
import { SeoService } from '../../shared/seo.service';
import { GetAppHome } from './models/app-home.response';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  slider1?: any[];
  slider2?: any[];
  appHomeData?: Observable<GetAppHome>;
  categories: any = []

  constructor(private appService: AppService, private ui: UiService, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Manihar',
      desc: 'Manihar.com is an online store of wedding-chuda, bangles & kalira. We are client driven company and we understand the emotions & needs of a bride and her family.',
      image: 'https://manihar.in/assets/images/logo.jpeg',
    });
    this.getAppHome();
    this.appService
      .getCarousel()
      .then((rs) => {
        this.slider1 = rs.data.longSlider.slides;
        this.slider2 = rs.data.shortSlider.slides;
        if (!this.ui.isBrowser) return;
        setTimeout(() => {
          window.scroll(0, 0);
        }, 100);
      })
      .catch((err) => console.log(err));

      this.appService.getCategories({isGender:true}).subscribe((rs:any) => {
        this.categories = rs.data.docs;
      })
  }

  getAppHome() {
    this.appHomeData = this.appService.getAppHome();
  }
}
