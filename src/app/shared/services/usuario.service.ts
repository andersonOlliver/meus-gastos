import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Usuario} from '../models/usuario';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: AngularFireList<Usuario>;
  private path = '/usuarios';

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.usuarios = this.db.list(this.path);
  }

  adicionaUsuario(usuario: Usuario) {
    return this.usuarios.push(usuario);
  }


}
