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
  lancamentos: AngularFireList<Lancamento>;
  private path = '/lancamentos';

  constructor(private db: AngularFireDatabase, private authService: AuthService) {
    this.lancamentos = this.db.list(this.path);
  }

  adicionaLancamento(lancamento: Lancamento) {
    return this.lancamentos.push(lancamento);
  }

  listar(): Observable<Lancamento[]> {
    return this.db.list(this.path, ref =>
        ref.orderByChild('userId').equalTo(this.authService.currentUserId || localStorage["token"]))
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(l => ({key: l.payload.key, ...l.payload.val()} as Lancamento))
        ),
        tap(changes =>
          changes.map(x => x.valor = parseFloat(x.valor.toString()
            .replace(',', '.')))
        )
      );
  }

  obterPorId(key: string): Observable<Lancamento> {
    return this.db.object<Lancamento>(`${this.path}/${key}`).valueChanges();
  }

  atualizar(id: string, lancamento: Lancamento): Promise<void> {
    return this.db.object<Lancamento>(`${this.path}/${id}`)
      .update(lancamento);
  }

  remover(lancamento: Lancamento): Promise<void> {
    return this.db.object<Lancamento>(`${this.path}/${lancamento.key}`)
      .remove();
  }
}
