import {Injectable} from '@angular/core';
import {Lancamento} from '../models/lancamento';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {
  private path = '/lancamentos';

  constructor() {
  }

  adicionaLancamento(lancamento: Lancamento) {
    // TODO: Implementação de regras aqui
  }

  listar(): Observable<Lancamento[]> {
    // TODO: Implementação de regras aqui
    throw new Error('Não implementado');
  }

  obterPorId(key: string): Observable<Lancamento> {
    // TODO: Implementação de regras aqui
    throw new Error('Não implementado');
  }

  atualizar(id: string, lancamento: Lancamento): Promise<void> {
    // TODO: Implementação de regras aqui
    throw new Error('Não implementado');
  }

  remover(lancamento: Lancamento): Promise<void> {
    // TODO: Implementação de regras aqui
    throw new Error('Não implementado');
  }
}
