import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-expenses',
  template: `<ion-router-outlet></ion-router-outlet>`,
  standalone: true,
  imports: [IonicModule]
})
export class ExpensesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
