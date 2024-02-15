import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-category-expenses',
  templateUrl: './category-expenses.component.html',
  styleUrls: ['./category-expenses.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class CategoryExpensesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
