import { Injectable } from '@angular/core';
import { Player } from '../models/player.model';
import { BRAZILIANPLAYERS } from '../models/player.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private players: Player[] = BRAZILIANPLAYERS;
  
  private selectedPlayer1Subject = new BehaviorSubject<Player | null>(null);
  private selectedPlayer2Subject = new BehaviorSubject<Player | null>(null);
  
  selectedPlayer1$ = this.selectedPlayer1Subject.asObservable();
  selectedPlayer2$ = this.selectedPlayer2Subject.asObservable();
  
  constructor() { }
  
  getAllPlayers(): Player[] {
    return this.players;
  }
  
  getPlayerById(id: number): Player | undefined {
    return this.players.find(player => player.id === id);
  }
  
  selectPlayer1(player: Player): void {
    this.selectedPlayer1Subject.next(player);
  }
  
  selectPlayer2(player: Player): void {
    this.selectedPlayer2Subject.next(player);
  }
  
  resetPlayer1(): void {
    this.selectedPlayer1Subject.next(null);
  }
  
  resetPlayer2(): void {
    this.selectedPlayer2Subject.next(null);
  }
  
  resetSelections(): void {
    this.selectedPlayer1Subject.next(null);
    this.selectedPlayer2Subject.next(null);
  }
}