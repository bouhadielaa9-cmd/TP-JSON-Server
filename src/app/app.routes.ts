import { Routes } from '@angular/router';
import { ParkList } from './exercice/components/park-list/park-list';
import { ParkSelected } from './exercice/components/park-selected/park-selected';

export const routes: Routes = [
  { path: 'parks', component: ParkList },
  { path: 'parks/:id', component: ParkSelected },
  { path: '', redirectTo: 'parks', pathMatch: 'full' },
  { path: '**', redirectTo: 'parks' }
];