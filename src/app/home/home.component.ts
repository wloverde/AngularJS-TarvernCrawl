import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TavernLocationComponent } from '../tavern-location/tavern-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TavernLocationComponent,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
      <section class="results">
        <app-tavern-location></app-tavern-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
