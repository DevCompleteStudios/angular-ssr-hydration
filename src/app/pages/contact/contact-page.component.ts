import { Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'contact-about-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html'
})
export default class AboutPageComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);


  ngOnInit(): void {
    this.title.setTitle('Contact page');
    this.meta.updateTag({name: "description", content: "Este es mi contact page"});
    this.meta.updateTag({name: "keywords", content: "Hola, Mundo, Fernando, Herrera, Curso, Angular, Pro"});
  }
}
