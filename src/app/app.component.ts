import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from '@components/menu/menu.component';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <div id="main-content"></div>
      <finance-menu></finance-menu>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  standalone: true,
  imports: [IonRouterOutlet, MenuComponent, IonicModule],
})
export class AppComponent {
  constructor() {}
}
