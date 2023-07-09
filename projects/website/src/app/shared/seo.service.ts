import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private title: Title, private meta: Meta, private router: Router) {}

  generateTags({ title = '', desc = '', image = '' }) {
    this.title.setTitle(title);
    this.meta.addTags([
      { name: 'og:url', content: `https://manihar.in${this.router.url}` },
      { name: 'og:title', content: title },
      { name: 'og:description', content: desc },
      { name: 'og:image', content: image },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@manihar' },
    ]);
  }
}
