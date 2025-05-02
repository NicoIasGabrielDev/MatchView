import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent {
  @Input() player: Player | null = null;
  @Input() isLeft = true;
  
  constructor() { }
  
  getRatingClass(rating: number): string {
    if (rating >= 90) return 'bg-green-500';
    if (rating >= 80) return 'bg-green-400';
    if (rating >= 70) return 'bg-yellow-400';
    if (rating >= 60) return 'bg-yellow-600';
    if (rating >= 50) return 'bg-orange-500';
    return 'bg-red-500';
  }
}