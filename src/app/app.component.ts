import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <div id="main-content"></div>
      <finance-menu></finance-menu>
      <finance-footer></finance-footer>
    </ion-app>
  `,
  standalone: true,
  imports: [IonApp, IonRouterOutlet, FooterComponent, MenuComponent],
})
export class AppComponent {
  constructor() {}
}
