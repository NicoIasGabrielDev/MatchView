import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlayerComparisonComponent } from './components/player-comparison/player-comparison.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comparison', component: PlayerComparisonComponent },
  { path: '**', redirectTo: '' }
];