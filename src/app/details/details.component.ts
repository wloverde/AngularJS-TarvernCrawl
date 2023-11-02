import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TavernService } from '../tavern.service';
import { TavernLocation } from '../tavern-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
<article>
    <img class="tavern-photo" [src]="tavernLocation?.photo"
      alt="Exterior photo of {{tavernLocation?.name}}"/>
    <section class="tavern-description">
      <h2 class="tavern-heading">{{tavernLocation?.name}}</h2>
      <p class="tavern-location">{{tavernLocation?.city}}, {{tavernLocation?.kingdom}}</p>
    </section>
    <section class="tavern-features">
      <h2 class="section-heading">About this tavern location</h2>
      <ul>
        <li><h4>{{tavernLocation?.description}}</h4></li>
        <li>Rooms available: {{tavernLocation?.rooms}}</li>
        <li>Average Alignment of guests: {{tavernLocation?.alignment}}</li>
      </ul>
    </section>
  </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  tavernService = inject(TavernService);
  tavernLocation: TavernLocation | undefined;
  
  constructor() {
    const tavernLocationId = Number(this.route.snapshot.params['id']);
    this.tavernLocation = this.tavernService.getTavernLocationById(tavernLocationId);
  }
}
