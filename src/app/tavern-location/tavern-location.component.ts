import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TavernLocation } from '../tavern-location';

@Component({
  selector: 'app-tavern-location',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="tavern">
    <img class="tavern-photo" [src]="tavernLocation.photo" alt="Exterior photo of {{tavernLocation.name}}">
    <h2 class="tavern-heading">{{ tavernLocation.name }}</h2>
    <p class="tavern-location">{{ tavernLocation.city}}, {{tavernLocation.kingdom }}</p>
  </section>
  `,
  styleUrls: ['./tavern-location.component.css']
})
export class TavernLocationComponent {
  @Input() tavernLocation!: TavernLocation;
}

