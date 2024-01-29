import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OverheadComponent } from './overhead/overhead.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, OverheadComponent, HeaderComponent]
})
export class ExpensesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
