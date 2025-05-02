import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerSelectionComponent } from '../../components/player-selection/player-selection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PlayerSelectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() { }
}