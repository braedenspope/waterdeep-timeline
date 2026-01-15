import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineService } from '../../services/timeline';
import { HARPTOS_MONTHS, HARPTOS_FESTIVALS } from '../../models/harptos-date.model';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
})
export class Calendar {
  timelineService = inject(TimelineService);

  getMonthName(month: number): string {
    return HARPTOS_MONTHS[month - 1];
  }

  daysInMonth = computed(() => {
    const days: number[] = [];
    for (let day = 1; day <= 30; day++) {
      days.push(day);
    }
    return days;
  });

  getCurrentMonthName(): string {
    const currentDate = this.timelineService.currentDate();
    return this.getMonthName(currentDate.month);
  }

  getCurrentYear(): number { 
    return this.timelineService.currentDate().year;
  }

  getEventsForDay(day: number): Event[] {
    const currentDate = this.timelineService.currentDate();
    return this.timelineService.getEventsByDate({ day, month: currentDate.month, year: currentDate.year });
  }

  isCurrentDay(day: number): boolean {
    const currentDate = this.timelineService.currentDate();
    return currentDate.day === day;
  }

  previousMonth() {
    const currentDate = this.timelineService.currentDate();
    let month = currentDate.month - 1;
    let year = currentDate.year;
    if (month < 1) {
      month = 12;
      year--;
    }
    this.timelineService.setCurrentDate({ day: 1, month, year });
  }

  nextMonth() {
    const currentDate = this.timelineService.currentDate();
    let month = currentDate.month + 1;
    let year = currentDate.year;
    if (month > 12) {
      month = 1;
      year++;
    }
    this.timelineService.setCurrentDate({ day: 1, month, year });
  }

  selectDate(day: number) {
    const currentDate = this.timelineService.currentDate();
    this.timelineService.setCurrentDate({ day, month: currentDate.month, year: currentDate.year });
  }

}