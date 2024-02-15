import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-fixed-expenses',
  templateUrl: './fixed-expenses.component.html',
  styleUrls: ['./fixed-expenses.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class FixedExpensesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
