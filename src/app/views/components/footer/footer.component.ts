import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'finance-footer',
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="expenses"> Gastos </ion-tab-button>
        <ion-tab-button tab="loans"> Prestamos </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
