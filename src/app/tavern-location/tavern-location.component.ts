import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TavernLocation } from '../tavern-location';

@Component({
  selector: 'app-tavern-location',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="listing">
    <img class="listing-photo" [src]="tavernLocation.photo" alt="Exterior photo of {{tavernLocation.name}}">
    <h2 class="listing-heading">{{ tavernLocation.name }}</h2>
    <p class="listing-location">{{ tavernLocation.city}}, {{tavernLocation.kingdom }}</p>
  </section>
  `,
  styleUrls: ['./tavern-location.component.css']
})
export class TavernLocationComponent {
  @Input() tavernLocation!: TavernLocation;
}

