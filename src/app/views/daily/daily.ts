import { Component, inject } from '@angular/core';
import { TimelineService } from '../../services/timeline';
import { CommonModule } from '@angular/common';
import { HARPTOS_MONTHS, HARPTOS_FESTIVALS } from '../../models/harptos-date.model';  

@Component({
  selector: 'app-daily',
  imports: [CommonModule],
  templateUrl: './daily.html',
  styleUrl: './daily.css',
})
export class Daily {

  timelineService = inject(TimelineService);

  getMonthName(month: number): string {
    return HARPTOS_MONTHS[month - 1];
  }

  getCurrentDateString(): string {
    const currentDate = this.timelineService.currentDate();
    const monthName = this.getMonthName(currentDate.month);
    return `${currentDate.day} ${monthName}, Year ${currentDate.year}`;
  }
}
