import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TavernService } from '../tavern.service';
import { TavernLocation } from '../tavern-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img
        class="tavern-photo"
        [src]="tavernLocation?.photo"
        alt="Exterior photo of {{ tavernLocation?.name }}"
      />
      <section class="tavern-description">
        <h2 class="tavern-heading">{{ tavernLocation?.name }}</h2>
        <p class="tavern-location">
          {{ tavernLocation?.city }}, {{ tavernLocation?.kingdom }}
        </p>
      </section>
      <section class="tavern-features">
        <h2 class="section-heading">About this tavern</h2>
        <ul>
          <li>
            <h4>{{ tavernLocation?.description }}</h4>
          </li>
          <li>Rooms available: {{ tavernLocation?.rooms }}</li>
          <li>Average Alignment of guests: {{ tavernLocation?.alignment }}</li>
        </ul>
      </section>
      <section class="tavern-travel">
        <h2 class="section-heading">Reserve Rooms for your Party</h2>
        <form [formGroup]="travelForm" (submit)="enterTavern()">
          <label for="party-name">Party Name</label>
          <input
            type="text"
            id="party-name"
            name="party-name"
            formControlName="partyName">
          <label for="party-size">Party Size</label>
          <input
            type="number"
            id="party-size"
            name="party-size"
            formControlName="partySize">
          <label for="long-rest">Long Rest?</label>
          <input
            type="checkbox"
            id="long-rest"
            name="long-rest"
            formControlName="longRest">
          <button type="submit" class="primary">Time To Tavern Crawl</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  tavernService = inject(TavernService);
  tavernLocation: TavernLocation | undefined;
  travelForm = new FormGroup({
    partyName: new FormControl(''),
    partySize: new FormControl(''),
    longRest: new FormControl(''),
  });
  constructor() {
    const tavernLocationId = Number(this.route.snapshot.params['id']);
    this.tavernLocation =
      this.tavernService.getTavernLocationById(tavernLocationId);
  }
  enterTavern() {
    this.tavernService.enterTavern(
      this.travelForm.value.partySize ?? '',
      this.travelForm.value.longRest ?? '',
      this.travelForm.value.partyName ?? ''
    );
  }
}
