import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-config',
  template: `<ion-router-outlet></ion-router-outlet>`,
  standalone: true,
  imports: [IonicModule],
})
export class ConfigPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
