import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-overhead',
  templateUrl: './overhead.component.html',
  styleUrls: ['./overhead.component.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent]
})
export class OverheadComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
