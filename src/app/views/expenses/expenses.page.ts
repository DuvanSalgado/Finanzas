import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '@components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { card } from 'ionicons/icons';

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
  constructor() {
    addIcons({ card });
  }

  ngOnInit() {}
}
