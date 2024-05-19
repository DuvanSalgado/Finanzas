import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-config',
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="category"> Categoria </ion-tab-button>
        <ion-tab-button tab="paymentMethods"> Metodos de pago </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
  standalone: true,
  imports: [IonicModule],
})
export class ConfigPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
