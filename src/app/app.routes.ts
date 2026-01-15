import { Routes } from '@angular/router';
import { Timeline } from './views/timeline/timeline';
import { Daily } from './views/daily/daily';
import { Calendar } from './views/calendar/calendar';

export const routes: Routes = [
    {path: '', redirectTo: '/timeline', pathMatch: 'full'},
    {path: 'timeline', component: Timeline},
    {path: 'daily', component: Daily},
    {path: 'calendar', component: Calendar}
];
