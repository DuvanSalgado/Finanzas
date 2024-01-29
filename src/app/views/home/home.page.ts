import { Component, OnInit } from '@angular/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-home',
  template: `<finance-footer></finance-footer>`,
  standalone: true,
  imports: [FooterComponent]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
