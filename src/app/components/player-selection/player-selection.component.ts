import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-selection',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.scss']
})
export class PlayerSelectionComponent implements OnInit {
  players: Player[] = [];
  selectedPlayer1: Player | null = null;
  selectedPlayer2: Player | null = null;
  
  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.players = this.playerService.getAllPlayers();

    this.playerService.selectedPlayer1$.subscribe(player => {
      this.selectedPlayer1 = player;
    });
    this.playerService.selectedPlayer2$.subscribe(player => {
      this.selectedPlayer2 = player;
    });
  }
  
  selectPlayer(player: Player): void {
    // Se clicar no jogador já selecionado como Jogador 1, desmarca ele
    if (this.selectedPlayer1 && this.selectedPlayer1.id === player.id) {
      this.playerService.resetPlayer1();
      return;
    }
    
    // Se clicar no jogador já selecionado como Jogador 2, desmarca ele
    if (this.selectedPlayer2 && this.selectedPlayer2.id === player.id) {
      this.playerService.resetPlayer2();
      return;
    }
    
    // Se não tiver jogador 1 selecionado, seleciona como jogador 1
    if (!this.selectedPlayer1) {
      this.playerService.selectPlayer1(player);
      
      // Verifica se o jogador 2 já está selecionado, se sim, navega para comparação
      if (this.selectedPlayer2) {
        setTimeout(() => {
          this.router.navigate(['/comparison']);
        }, 500);
      }
    } 
    // Se tiver jogador 1 mas não jogador 2, e for diferente do jogador 1
    else if (!this.selectedPlayer2 && this.selectedPlayer1.id !== player.id) {
      this.playerService.selectPlayer2(player);
      // Navegar para a página de comparação após selecionar os dois jogadores
      setTimeout(() => {
        this.router.navigate(['/comparison']);
      }, 500);
    }
    
    // Lógica normal de seleção
    if (!this.selectedPlayer1) {
      this.playerService.selectPlayer1(player);
    } else if (!this.selectedPlayer2 && this.selectedPlayer1.id !== player.id) {
      this.playerService.selectPlayer2(player);
      // Navegar para a página de comparação após selecionar os dois jogadores
      setTimeout(() => {
        this.router.navigate(['/comparison']);
      }, 500);
    }
  }
  
  resetSelection(): void {
    this.playerService.resetSelections();
  }
  
  isSelected(player: Player): boolean {
    return (this.selectedPlayer1?.id === player.id) || 
           (this.selectedPlayer2?.id === player.id);
  }
}