import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayerSelectionComponent } from './components/player-selection/player-selection.component';
import { PlayerComparisonComponent } from './components/player-comparison/player-comparison.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerSelectionComponent,
    PlayerComparisonComponent,
    RadarChartComponent,
    PlayerCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }