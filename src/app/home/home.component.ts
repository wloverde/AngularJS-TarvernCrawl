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
      <app-tavern-location
        *ngFor="let tavernLocation of tavernLocationList"
        [tavernLocation]="tavernLocation"
      ></app-tavern-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  tavernLocationList: TavernLocation[] = [
    {
      id: 1,
      name: 'The Drunken Dragon',
      city: 'Waterdeep',
      kingdom: 'Sword Coast',
      photo: '/assets/drunken-dragon.png',
      rooms: true,
      alignment: 'Neutral',
      description:
        'The Drunken Dragon is a tavern in Waterdeep that is known for its good food, good drink, and good company. It is a popular place for adventurers to meet and exchange stories. The tavern is owned by Durnan, a retired adventurer who is most famous for creating the megadungeon known as Undermountain.',
    },
    {
      id: 2,
      name: 'The Elven Elixir',
      city: 'Silverymoon',
      kingdom: 'Luruar',
      photo: '/assets/elven-elixir.png',
      rooms: true,
      alignment: 'Good',
      description:
        'The Elven Elixir is a beautiful tavern nestled in the heart of Silverymoon, known for its exquisite elven cuisine and magical drinks. It is a favorite haunt for scholars and adventurers alike, seeking the wisdom of the city of mages.',
    },
    {
      id: 3,
      name: 'The Fiery Forge',
      city: 'Baldur’s Gate',
      kingdom: 'Sword Coast',
      photo: '/assets/fiery-forge.png',
      rooms: true,
      alignment: 'Lawful Neutral',
      description:
        'The Fiery Forge is a tavern in Baldur’s Gate, famous for its blacksmith-themed decor. It attracts both adventurers and craftsmen with its hearty food and the opportunity to buy and sell weapons and armor on-site.',
    },
    {
      id: 4,
      name: 'The Mysterious Masquerade',
      city: 'Ravenloft',
      kingdom: 'Barovia',
      photo: '/assets/mysterious-masquerade.png',
      rooms: true,
      alignment: 'Chaotic Neutral',
      description:
        'The Mysterious Masquerade is a shadowy tavern in the cursed land of Ravenloft. Patrons wear masks to hide their true identities, and secrets and mysteries are the currency of the realm. It’s a hub for those seeking to escape the grasp of Count Strahd.',
    },
    {
      id: 5,
      name: 'The Rusty Anchor',
      city: 'Saltmarsh',
      kingdom: 'Greyhawk',
      photo: '/assets/rusty-anchor.png',
      rooms: true,
      alignment: 'Chaotic Good',
      description:
        'The Rusty Anchor is a coastal tavern in Saltmarsh, known for its fresh seafood and lively atmosphere. Adventurers often gather here to hire ships and crew for daring voyages on the Azure Sea.',
    },
    {
      id: 6,
      name: 'The Gnomish Gears',
      city: 'Mechanus',
      kingdom: 'Clockwork Plane',
      photo: '/assets/gnomish-gears.png',
      rooms: true,
      alignment: 'Lawful Neutral',
      description:
        'The Gnomish Gears is a tavern located in the mechanical realm of Mechanus. It serves as a hub for planar travelers and is filled with intricate clockwork devices and automatons. The drinks are precision-crafted.',
    },
    {
      id: 7,
      name: 'The Feywild Folly',
      city: 'Arvandor',
      kingdom: 'Feywild',
      photo: '/assets/feywild-folly.png',
      rooms: true,
      alignment: 'Chaotic Good',
      description:
        'The Feywild Folly is a whimsical tavern in the heart of the Feywild, known for its magical drinks and fairy entertainment. Visitors can enjoy dancing with pixies and enchanted libations.',
    },
    {
      id: 8,
      name: 'The Shadowed Spire',
      city: 'Erelhei-Cinlu',
      kingdom: 'Abyss',
      photo: '/assets/shadowed-spire.png',
      rooms: true,
      alignment: 'Chaotic Evil',
      description:
        'The Shadowed Spire is a sinister tavern located in the demon-infested city of Erelhei-Cinlu. It caters to the darkest desires of its patrons, making it a hub for warlocks, cultists, and those who seek to dabble in dark magic.',
    },

    {
      id: 9,
      name: 'The Lich’s Library',
      city: 'Necropolis',
      kingdom: 'Negative Energy Plane',
      photo: '/assets/lichs-library.png',
      rooms: true,
      alignment: 'Neutral Evil',
      description:
        'The Lich’s Library is a tavern on the Negative Energy Plane, a haven for necromancers and scholars of the macabre. The drinks are as cold as death, and knowledge of forbidden spells is traded in hushed tones.',
    },

    {
      id: 10,
      name: 'The Celestial Sanctum',
      city: 'Mount Celestia',
      kingdom: 'Seven Heavens',
      photo: '/assets/celestial-sanctum.png',
      rooms: true,
      alignment: 'Lawful Good',
      description:
        'The Celestial Sanctum is a heavenly tavern on Mount Celestia, where angels and celestial beings gather to celebrate the triumph of good over evil. The ambrosial drinks served here are said to grant temporary divine blessings.',
    },

    {
      id: 11,
      name: 'The Abyssal Abyss',
      city: 'The Abyss',
      kingdom: 'Chaotic Evil',
      photo: '/assets/abyssal-abyss.png',
      rooms: true,
      alignment: 'Chaotic Evil',
      description:
        'The Abyssal Abyss is a tavern in the heart of The Abyss, a chaotic and demon-infested plane. It’s a place for thrill-seekers, mercenaries, and those who thrive on the chaos of the multiverse.',
    },

    {
      id: 12,
      name: 'The Astral Anchor',
      city: 'Astral Plane',
      kingdom: 'Outer Planes',
      photo: '/assets/astral-anchor.png',
      rooms: true,
      alignment: 'True Neutral',
      description:
        'The Astral Anchor is a unique tavern that drifts through the Astral Plane, accessible from many different planes. It is a hub for planar travelers and serves as a meeting place for interplanar diplomats and adventurers.',
    },

    {
      id: 13,
      name: 'The Elemental Ember',
      city: 'City of Brass',
      kingdom: 'Elemental Plane of Fire',
      photo: '/assets/elemental-ember.png',
      rooms: true,
      alignment: 'Lawful Neutral',
      description:
        'The Elemental Ember is a blazing tavern in the City of Brass on the Elemental Plane of Fire. It caters to fire genasi, efreet, and fire elementals, offering drinks that burn as brightly as the plane itself.',
    },

    {
      id: 14,
      name: 'The Underdark Den',
      city: 'Menzoberranzan',
      kingdom: 'Underdark',
      photo: '/assets/underdark-den.png',
      rooms: true,
      alignment: 'Chaotic Evil',
      description:
        'The Underdark Den is a clandestine tavern in Menzoberranzan, the infamous drow city in the Underdark. It’s a hub for spies, assassins, and dark elves, serving drinks that mimic the bioluminescent fungi of the Underdark.',
    },

    {
      id: 15,
      name: 'The Frosty Flagon',
      city: 'Icewind Dale',
      kingdom: 'Ten Towns',
      photo: '/assets/frosty-flagon.png',
      rooms: true,
      alignment: 'Lawful Good',
      description:
        'The Frosty Flagon is a warm respite in the frozen tundra of Icewind Dale. It attracts adventurers and explores, offering hearty stews, warm drinks, and tales of survival in the harsh wilderness.',
    },

    {
      id: 16,
      name: 'The Ironclad Inn',
      city: 'Karak Azgal',
      kingdom: 'Karak Norn',
      photo: '/assets/ironclad-inn.png',
      rooms: true,
      alignment: 'Lawful Neutral',
      description:
        'The Ironclad Inn is a dwarven tavern within the mountain stronghold of Karak Azgal. It’s known for its hearty ale and stone-carved decorations, a favorite spot for warriors and miners alike.',
    },
  ];
}
