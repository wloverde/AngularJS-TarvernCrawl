import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TavernLocationComponent } from '../tavern-location/tavern-location.component';
import { TavernLocation } from '../tavern-location';
import { TavernService } from '../tavern.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TavernLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="button" 
        (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-tavern-location
        *ngFor="let tavernLocation of filteredTavernList"
        [tavernLocation]="tavernLocation"
      ></app-tavern-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  tavernLocationList: TavernLocation[] = [];
  tavernService: TavernService = inject(TavernService);
  filteredTavernList: TavernLocation[] = [];

  constructor() {
    this.tavernLocationList = this.tavernService.getAllTavernLocations();
    this.filteredTavernList = this.tavernLocationList;
  }

  filterResults(text: string) {
    if (!text){
      this.filteredTavernList = this.tavernLocationList;
    }

    this.filteredTavernList = this.tavernLocationList.filter(
      tavernLocation => 
      tavernLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
