import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-overhead',
  templateUrl: './overhead.page.html',
  styleUrls: ['./overhead.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class OverheadPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
