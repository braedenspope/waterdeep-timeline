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
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Waterdeep Timeline";
  
  // Initialize with sample events
  events = signal<Event[]>([]);
  
  // Automatically calculated
  eventCount = computed(() => this.events().length);

}
