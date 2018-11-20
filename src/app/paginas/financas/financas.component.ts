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
  estaCarregando = true;

  constructor(private lancamentoService: LancamentosService, private router: Router) {
  }

  ngOnInit() {
    this.lancamentos = [new Lancamento(70.00, 'Ventilador', new Date(), 'Ventilador de mesa para escritório')];
    this.lancamentoService.listar()
      .subscribe((x: Lancamento[]) => {
        this.lancamentos = [...this.lancamentos, ...x];
        console.log(this.lancamentos);
        this.estaCarregando = false;
      }, error1 => {
        console.log(error1);
        this.estaCarregando = false;
      });
  }

  getCusto() {
    return this.lancamentos.map(t => +t.valor).reduce((acc, value) => acc + value, 0);
  }

  adicionar() {
    this.router.navigate(['/financas/adicionar']);
  }

  editar(e: Lancamento) {
    console.log(e);
    this.router.navigate([`/financas/${e.key}`]);
  }
}
