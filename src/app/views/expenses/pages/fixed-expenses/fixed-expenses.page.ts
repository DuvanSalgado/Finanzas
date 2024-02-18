import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-fixed-expenses',
  templateUrl: './fixed-expenses.page.html',
  styleUrls: ['./fixed-expenses.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FixedExpensesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
