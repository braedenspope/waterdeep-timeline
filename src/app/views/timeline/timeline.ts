import { Component, inject } from '@angular/core';
import { TimelineService } from '../../services/timeline';
import { CommonModule } from '@angular/common';
import { HARPTOS_MONTHS, HARPTOS_FESTIVALS } from '../../models/harptos-date.model';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline {
  timelineService = inject(TimelineService);

  getMonthName(month: number): string {
    return HARPTOS_MONTHS[month - 1];
  }
}
