import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { SeoService } from '../../shared/seo.service';
@Component({
  selector: 'app-refund-policy',
  templateUrl: './refund-policy.component.html',
  styleUrls: ['./refund-policy.component.css']
})
export class RefundPolicyComponent implements OnInit {

  constructor(private ui: UiService,private seo:SeoService) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.seo.generateTags({
      title: 'Manihar',
      desc: `
      Manihar.com is an online store of wedding-chuda, bangles & kalira. We are client driven company and we understand the emotions & needs of a bride and her family.


      We as a manufacturer of seep bridal-chuda realized that normally its hard for a small retailer to keep a wide variety of designs of original
      quality seep-chuda because of the factor of high prices of original seep & continuously changing designs. So local market stores came up
      with a solution, they started selling low quality plastic chuda which is economical in terms of money & it helped them in maintaining chuda
      stock in their store with just a very little budget, it also sells fast as it is in the budget of a walk-in customer.


      But it was not fulfilling the traditional purpose of original seep bangles, which is to tie-a-knot in the relations of newly wedded couple.
      So we started associating with only those brands like us, who use original wedding bangle material in manufacturing their wedding-chuda-designs.


      Also the change in the buying behavior of customers triggered us to create a platform where industry leaders can sell together & serve
      the quality concerned brides by delivering to their door-step, so now with bangle-house, the best & the original quality is just a few clicks away.


      We launch new designs periodically as per the trend & demand. We are pioneer in our field and aims at gaining customer satisfaction in terms of- Quality,
      New variety, Price, On-time delivery and Satisfaction.


      We possess customer-centric attitude, paying equal attention to quality, prompt communications and on-time shipment. You may choose us for exclusive
      quality & collection, We ensures hassle-free transactions, smooth processing of orders and long-term association
      `,
      image: 'https://manihar.in/assets/images/logo.jpeg',
    });
  }

}
