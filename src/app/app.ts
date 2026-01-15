import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Event } from './models/event.model';
import { Character } from './models/character.model';
import { Location } from './models/location.model';
import { CityWard } from './models/city-ward.enum';
import { CharacterClass } from './models/character-class.enum';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Waterdeep Timeline";
  
  // Initialize with sample events
  events = signal<Event[]>([
    {
      id: 1,
      title: "The Warehouse Heist",
      description: "The party infiltrated Deepwater Mercantile warehouse to gather evidence on Captain Zelmazzar's corruption. Duncan Rook betrayed the party, leading to a deadly confrontation.",
      date: "15 Uktar 1492 DR",
      involvedCharacters: [
        {
          id: 1,
          name: "Daphne Hurst",
          class: CharacterClass.Rogue,
          race: "Fairy",
          background: "Noble"
        },
        {
          id: 2,
          name: "Damocles",
          class: CharacterClass.Warlock,
          race: "Human",
          background: "City Watch"
        },
        {
          id: 3,
          name: "Xarrai Bloodstone",
          class: CharacterClass.Cleric,
          race: "Tiefling",
          background: "Acolyte"
        }
      ],
      location: {
        id: 1,
        name: "Deepwater Mercantile Warehouse",
        ward: CityWard.TradesWard,
        description: "A large warehouse storing illegal goods and evidence of corruption"
      }
    },
    {
      id: 2,
      title: "The Golden Night Gala",
      description: "The party attended an exclusive gala at The Gentle Mermaid casino, where they met the mysterious proprietor Merrick Wolfram.",
      date: "17 Uktar 1492 DR",
      involvedCharacters: [
        {
          id: 1,
          name: "Daphne Hurst",
          class: CharacterClass.Rogue,
          race: "Fairy",
          background: "Noble"
        },
        {
          id: 4,
          name: "Vaelen Halosyne",
          class: CharacterClass.Paladin,
          race: "Aasimar",
          background: "Soldier"
        }
      ],
      location: {
        id: 2,
        name: "The Gentle Mermaid Casino",
        ward: CityWard.DockWard,
        description: "An exclusive casino owned by Merrick Wolfram (secretly Jack Rose)"
      }
    },
    {
      id: 3,
      title: "Kaelen's Ritual Disruption",
      description: "The party discovered Kaelen performing a dark ritual to create a soul wraith using the Moonstone Chalice. They interrupted the ritual and saved the kidnapped collector.",
      date: "20 Uktar 1492 DR",
      involvedCharacters: [
        {
          id: 4,
          name: "Vaelen Halosyne",
          class: CharacterClass.Paladin,
          race: "Aasimar",
          background: "Soldier"
        },
        {
          id: 2,
          name: "Damocles",
          class: CharacterClass.Warlock,
          race: "Human",
          background: "City Watch"
        }
      ],
      location: {
        id: 3,
        name: "Abandoned Warehouse",
        ward: CityWard.DockWard,
        description: "A dark warehouse used for Kaelen's necromantic rituals"
      }
    },
    {
      id: 4,
      title: "Defense of the Temple of Tyr",
      description: "Kaelen led an army of undead against the Temple of Tyr. Vaelen faced his fallen brother in final combat and defeated him.",
      date: "25 Uktar 1492 DR",
      involvedCharacters: [
        {
          id: 4,
          name: "Vaelen Halosyne",
          class: CharacterClass.Paladin,
          race: "Aasimar",
          background: "Soldier"
        },
        {
          id: 1,
          name: "Daphne Hurst",
          class: CharacterClass.Rogue,
          race: "Fairy",
          background: "Noble"
        }
      ],
      location: {
        id: 4,
        name: "Temple of Tyr",
        ward: CityWard.CastleWard,
        description: "The grand temple dedicated to the god of justice"
      }
    },
    {
      id: 5,
      title: "The Vault of Dragons Heist",
      description: "The party infiltrated the legendary Vault of Dragons beneath the Brandath Mausoleum, solving ancient dwarven puzzles to recover Dagult Neverember's embezzled gold.",
      date: "28 Uktar 1492 DR",
      involvedCharacters: [
        {
          id: 1,
          name: "Daphne Hurst",
          class: CharacterClass.Rogue,
          race: "Fairy",
          background: "Noble"
        },
        {
          id: 2,
          name: "Damocles",
          class: CharacterClass.Warlock,
          race: "Human",
          background: "City Watch"
        },
        {
          id: 3,
          name: "Xarrai Bloodstone",
          class: CharacterClass.Cleric,
          race: "Tiefling",
          background: "Acolyte"
        },
        {
          id: 5,
          name: "Apoch",
          class: CharacterClass.Artificer,
          race: "Warforged",
          background: "Sage"
        }
      ],
      location: {
        id: 5,
        name: "Vault of Dragons",
        ward: CityWard.CityOfTheDead,
        description: "An ancient dwarven complex beneath the Brandath Mausoleum containing Neverember's stolen treasure"
      }
    }
  ]);
  
  // Automatically calculated
  eventCount = computed(() => this.events().length);
}