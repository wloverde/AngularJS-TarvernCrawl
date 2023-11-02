import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TavernLocation } from '../tavern-location';

@Component({
  selector: 'app-tavern-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      tavern-location works!
    </p>
  `,
  styleUrls: ['./tavern-location.component.css']
})
export class TavernLocationComponent {

}
