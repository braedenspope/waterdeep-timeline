import { Injectable, signal, computed } from '@angular/core';
import { Event } from '../models/event.model';
import { HarptosDate } from '../models/harptos-date.model';
import { Character } from '../models/character.model';
import { CharacterClass } from '../models/character-class.enum';
import { CityWard } from '../models/city-ward.enum';

@Injectable({
  providedIn: 'root',
})
export class TimelineService {

  currentDate = signal<HarptosDate>({
    day: 1,
    month: 1,
    year: 1493
  });

  events = signal<Event[]>([
    {
      id: 1,
      title: "The Warehouse Heist",
      description: "The party infiltrated a Deepwater Mercantile warehouse to expose the corrupt city watch captain Zelmazzar.",
      date: { day: 15, month : 4, year: 1493 },
      involvedCharacters: [],
      location: {
        id: 1,
        name: "Deepwater Mercantile Warehouse",
        ward: CityWard.DockWard,
        description: "A large warehouse used by the Deepwater Mercantile company for storing goods."
      }
    }
  ]);

  eventCount = computed(() => this.events().length);

  isSameDate(date1: HarptosDate, date2: HarptosDate): boolean {
    return date1.day === date2.day && date1.month === date2.month && date1.year === date2.year;
  }

  compareDates(date1: HarptosDate, date2: HarptosDate): number {
    if (date1.year !== date2.year) {
      return date1.year - date2.year;
    } else if (date1.month !== date2.month) {
      return date1.month - date2.month;
    }

    return date1.day - date2.day;
  }

  eventsForCurrentDate() {
    return this.events().filter(event => this.isSameDate(event.date, this.currentDate()));
  }

  goToNextDay() {
    this.currentDate.update(date => {
      let { day, month, year } = date;
      day++;
      if (day > 30) {
        day = 1;
        month++;
      } 
      if (month > 12) {
        month = 1;
        year++;
      }
      return { day, month, year };
    });
  }
  
  goToPreviousDay() {
    this.currentDate.update(date => {
      let { day, month, year } = date;
      day--;
      if (day < 1) {
        day = 30;
        month--;
      }
      if (month < 1) {
        month = 12;
        year--;
      }
      return { day, month, year };
    });
  }

  setCurrentDate(date: HarptosDate) {
    this.currentDate.set(date);
  }

  addEvent(event: Event) {
    this.events.update(events => [...events, event].sort((a, b) => this.compareDates(a.date, b.date)));
  }

  removeEvent(eventId: number) {
    this.events.update(events => events.filter(event => event.id !== eventId));
  }

  getEventsByDate(date: HarptosDate): Event[] {
    return this.events().filter(event => this.isSameDate(event.date, date));
  }

  getSortedEvents(): Event[] {
    return [...this.events()].sort((a, b) => this.compareDates(a.date, b.date));
  }

  constructor() { }
}
