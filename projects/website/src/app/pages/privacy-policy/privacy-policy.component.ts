import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { SeoService } from '../../shared/seo.service';
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private ui: UiService,private seo:SeoService) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.seo.generateTags({
      title: 'Manihar',
      desc: `
      This privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. PII, as used in India's privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.

What personal information do we collect from the people that visit our blog, website or app?
When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or other details to help you with your experience.

When do we collect information?
We collect information from you when you register on our site, place an order, subscribe to a newsletter or enter information on our site.

How do we use your information?
We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:

To personalize user's experience and to allow us to deliver the type of content and product offerings in which you are most interested.
To allow us to better service you in responding to your customer service requests.
To quickly process your transactions.
To send periodic emails regarding your order or other products and services.
How do we protect visitor information?
We do not use vulnerability scanning and/or scanning to PCI standards.

We do not use Malware Scanning.

We do not use an SSL certificate

.We do not need an SSL & other periodic security scanning of our website because:

We use Pay-u money payment gateway for receiving online payments & we don't save or store any card information. This company collects all the information of card & transfer money from buyer account to our account & this company is having strict privacy rules & policies. They are pioneer in the field of online payments & ensures all the safety of your card information.

For collecting foreign payments- we use Pay-pal.

Do we use 'cookies'?
Yes, wet use cookies for tracking purposes

Please note- You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser (like Internet Explorer) settings. Each browser is a little different, so look at your browser's Help menu to learn the correct way to modify your cookies.

Third Party Disclosure
We do not sell, trade, or otherwise transfer to outside parties your (PII) personally identifiable information- unless we provide you with advance notice.

This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.

However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.

Third party products (sellers at bangle house)
We are a multi-seller company where other sellers also sell their products in our website. These third party sellers may have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sellers. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sellers.

Please note - Privacy policy of other sellers may be different, But they are still entitled to provide you the best quality products as we choose our sellers after personal inspection of their business

Your complaints & feedback is always important for us to improve our business services, So feel free to raise any type of query or concern. We will help you.

Still, If there are any other questions regarding this privacy policy you may feel free to contact us.
      `,
      image: 'https://manihar.in/assets/images/logo.jpeg',
    });
  }

}
