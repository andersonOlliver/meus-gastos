import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

  }

  get estaLogado(): boolean {
    // TODO: Implementação de regras aqui
    throw new Error('Não implementado');
  }

  logout() {
    // TODO: Implementação de regras aqui
  }
}
