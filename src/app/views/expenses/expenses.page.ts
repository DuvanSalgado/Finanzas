import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '@header';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-expenses',
  template: `
    <finance-header> Gastos </finance-header>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar slot="top">
          <ion-tab-button tab="overhead"> Generales </ion-tab-button>
          <ion-tab-button tab="fixed"> Fijos </ion-tab-button>
          <ion-tab-button tab="category"> Categiria </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule, HeaderComponent],
})
export class ExpensesPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
