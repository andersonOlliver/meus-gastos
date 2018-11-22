import {Component, OnInit} from '@angular/core';
import {Lancamento} from '../../shared/models/lancamento';
import {Router} from '@angular/router';
import {LancamentosService} from '../../shared/services/lancamentos.service';

@Component({
  selector: 'app-financas',
  templateUrl: './financas.component.html',
  styleUrls: ['./financas.component.css']
})
export class FinancasComponent implements OnInit {

  lancamentos: Lancamento[];
  colunas = ['titulo', 'valor', 'dataRegistro', 'observacao', 'actions'];

  constructor() {
  }

  ngOnInit() {
    this.lancamentos = [new Lancamento(70.00, 'Ventilador', new Date(), 'Ventilador de mesa para escritório')];
  }

  getCusto() {
    // TODO: Implementação de regras aqui
  }

  adicionar() {
    // TODO: Implementação de regras aqui
  }

  editar(e: Lancamento) {
    // TODO: Implementação de regras aqui
  }
}
