import { Component } from '@angular/core';
import { ContainerTabelaComponent } from './container-tabela/container-tabela';

@Component({
  imports: [ContainerTabelaComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'agro-sensor-web';
}
