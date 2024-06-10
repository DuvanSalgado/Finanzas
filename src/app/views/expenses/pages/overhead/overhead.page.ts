import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarruselCompone } from '@expensesComponents/carrusel/carrusel.component';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addOutline, heart, settingsSharp } from 'ionicons/icons';

@Component({
  selector: 'app-overhead',
  templateUrl: './overhead.page.html',
  styleUrls: ['./overhead.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CarruselCompone],
})
export class OverheadPage {
  constructor() {
    addIcons({ addOutline, settingsSharp, heart });
  }
}
