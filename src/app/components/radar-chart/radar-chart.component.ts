import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, ChartData, registerables } from 'chart.js';
import { Player } from '../../models/player.model';

Chart.register(...registerables);

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnChanges {
  @Input() player1: Player | null = null;
  @Input() player2: Player | null = null;
  
  chart: Chart | null = null;
  
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['player1'] || changes['player2']) && this.player1 && this.player2) {
      this.createChart();
    }
  }
  
  createChart(): void {
    if (!this.player1 || !this.player2) return;
    
    const canvas = document.getElementById('radarChart') as HTMLCanvasElement;
    if (!canvas) return;
    
    // Destruir gráfico existente se houver
    if (this.chart) {
      this.chart.destroy();
    }
    
    const labels = ['Velocidade', 'Chute', 'Passe', 'Drible', 'Defesa', 'Físico'];
    
    const chartData: ChartData = {
      labels: labels,
      datasets: [
        {
          label: this.player1.name,
          data: [
            this.player1.pace,
            this.player1.shooting,
            this.player1.passing,
            this.player1.dribbling,
            this.player1.defending,
            this.player1.physical
          ],
          fill: true,
          backgroundColor: 'rgba(0, 156, 59, 0.2)',
          borderColor: 'rgb(0, 156, 59)',
          pointBackgroundColor: 'rgb(0, 156, 59)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(0, 156, 59)'
        },
        {
          label: this.player2.name,
          data: [
            this.player2.pace,
            this.player2.shooting,
            this.player2.passing,
            this.player2.dribbling,
            this.player2.defending,
            this.player2.physical
          ],
          fill: true,
          backgroundColor: 'rgba(255, 223, 0, 0.2)',
          borderColor: 'rgb(255, 223, 0)',
          pointBackgroundColor: 'rgb(255, 223, 0)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 223, 0)'
        }
      ]
    };
    
    const config: ChartConfiguration = {
      type: 'radar',
      data: chartData,
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        },
        scales: {
          r: {
            angleLines: {
              color: 'rgba(255, 255, 255, 0.5)'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            pointLabels: {
              color: 'white',
              font: {
                size: 14,
                weight: 'bold'
              }
            },
            ticks: {
              color: 'white',
              backdropColor: 'transparent',
              font: {
                size: 12
              }
            },
            min: 0,
            max: 100,
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white',
              font: {
                size: 14,
                weight: 'bold'
              }
            }
          }
        }
      }
    };
    
    this.chart = new Chart(canvas, config);
  }
}