import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LancamentosService} from '../../../shared/services/lancamentos.service';
import {Lancamento} from '../../../shared/models/lancamento';
import {DatePipe} from '@angular/common';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-adiciona-lancamento',
  templateUrl: './adiciona-lancamento.component.html',
  styleUrls: ['./adiciona-lancamento.component.css']
})
export class AdicionaLancamentoComponent implements OnInit {

  dataRegistro: Date = new Date();
  lancamento: Lancamento = new Lancamento();
  ehEdicao = false;
  private id: string;

  constructor(private activedRoute: ActivatedRoute, private authService: AuthService, private lancamentoService: LancamentosService, private router: Router, private datePipe: DatePipe) {
    this.activedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.ehEdicao = true;
        this.lancamentoService.obterPorId(this.id)
          .subscribe((lancamento: Lancamento) => {
            this.lancamento = lancamento;
            this.dataRegistro = new Date(lancamento.dataRegistro);
          });
      } else {
        this.lancamento = new Lancamento();
        this.ehEdicao = false;
      }
    });

  }

  ngOnInit() {
  }

  adicionar() {
    console.log(this.lancamento);
    this.lancamento.dataRegistro = this.dataRegistro.toDateString();
    this.lancamento.userId = this.authService.currentUserId;

    if (this.ehEdicao) {
      this.lancamentoService.atualizar(this.id, this.lancamento)
        .then(() => {
          alert('atualizou com sucesso =)');
          this.voltar();
        });
    } else {
      this.lancamentoService.adicionaLancamento(this.lancamento)
        .then((x) => {
          console.log(x);
          this.voltar();
        });
    }

  }


  voltar() {
    this.router.navigate(['/financas']);
  }

  //
  // private transformDate(data: Date): string {
  //
  // }

  private transformDate(data: string | Date): string | Date {
    if (data instanceof Date) {
      return this.datePipe.transform(data, 'dd/MM/yyyy');
    } else {
      return new Date(data);
    }
  }
}
