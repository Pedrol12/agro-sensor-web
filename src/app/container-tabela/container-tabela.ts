import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeituraSolo } from '../interfaces/sensores.interface';

@Component({
  selector: 'app-container-tabela',
  imports: [CommonModule],
  templateUrl: './container-tabela.html',
  styleUrl: './container-tabela.css',
})
export class ContainerTabelaComponent implements OnInit {
  titulo: string = 'Painel de Monitoramento IoT - Sensores de Solo';
  fazenda: string = 'Fazenda Modelo UniRV - Setor de Irrigacao 04';

  leituras: LeituraSolo[] = [
    { data: '04/11/2026 08:00', n: 150, p: 110, k: 125, umidade: 0.55, status: 'Ideal' },
    { data: '04/11/2026 09:30', n: 142, p: 105, k: 118, umidade: 0.48, status: 'Alerta' },
    { data: '04/11/2026 11:00', n: 130, p: 98, k: 110, umidade: 0.38, status: 'Critico' },
    { data: '04/11/2026 12:30', n: 155, p: 112, k: 130, umidade: 0.60, status: 'Ideal' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

export { ContainerTabelaComponent as ContainerTabela };
