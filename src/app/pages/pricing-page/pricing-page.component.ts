import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'pricing-about-page',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html'
})
export default class AboutPageComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);


  ngOnInit(): void {
    if( isPlatformBrowser(this.platform) ){
      document.title = 'Pricing page';
    }

    // this.title.setTitle('Pricing page');
    // this.meta.updateTag({name: "description", content: "Este es mi pricing page"});
    // this.meta.updateTag({name: "keywords", content: "Hola, Mundo, Fernando, Herrera, Curso, Angular, Pro"});
  }

}
