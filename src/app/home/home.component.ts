import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TavernLocationComponent } from '../tavern-location/tavern-location.component';
import { TavernLocation } from '../tavern-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TavernLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-tavern-location [tavernLocation]='tavernLocation'></app-tavern-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  tavernLocation: TavernLocation = {
    id: 1,
    name: 'The Drunken Dragon',
    city: 'Waterdeep',
    kingdom: 'Sword Coast',
    photo: '/assets/drunken-dragon.png',
    rooms: true,
    alignment: 'Neutral',
    description:
      'The Drunken Dragon is a tavern in Waterdeep that is known for its good food, good drink, and good company. It is a popular place for adventurers to meet and exchange stories. The tavern is owned by Durnan, a retired adventurer who is most famous for creating the megadungeon known as Undermountain.',
  };
}
