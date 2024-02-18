import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-category-expenses',
  templateUrl: './category-expenses.page.html',
  styleUrls: ['./category-expenses.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CategoryExpensesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
