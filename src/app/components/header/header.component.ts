import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'finance-header',
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> <ng-content></ng-content> </ion-title>
      </ion-toolbar>
    </ion-header>
`,
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
