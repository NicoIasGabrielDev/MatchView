import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player.model';
import { Router } from '@angular/router';
import { RadarChartComponent } from '../radar-chart/radar-chart.component';

@Component({
  selector: 'app-player-comparison',
  standalone: true,
  imports: [CommonModule, RouterModule, RadarChartComponent],
  templateUrl: './player-comparison.component.html',
  styleUrls: ['./player-comparison.component.scss']
})
export class PlayerComparisonComponent implements OnInit {
  player1: Player | null = null;
  player2: Player | null = null;
  
  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.playerService.selectedPlayer1$.subscribe((player) => {
      this.player1 = player;
      if (!player) this.checkSelection();
    });
    
    this.playerService.selectedPlayer2$.subscribe(player => {
      this.player2 = player;
      if (!player) this.checkSelection();
    });
  }
  
  checkSelection(): void {
    if (!this.player1 || !this.player2) {
      this.router.navigate(['/']);
    }
  }
  
  goBack(): void {
    this.router.navigate(['/']);
  }
}