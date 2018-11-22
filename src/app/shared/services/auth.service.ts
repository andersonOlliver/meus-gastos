import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Login} from '../models/login';
import {Registro} from '../models/registro';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any;
  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
  }

  get isUserAnonymousLoggedIn(): boolean {
    throw new Error('Não implementado');
  }

  get currentUserId(): string {
    throw new Error('Não implementado');
  }

  get currentUserName(): string {
    throw new Error('Não implementado');
  }

  get currentUser(): any {
    throw new Error('Não implementado');
  }

  get isUserEmailLoggedIn(): boolean {
    throw new Error('Não implementado');
  }

  signUpWithEmail(registro: Registro) {
    throw new Error('Não implementado');
  }

  /**
   * Ao criar usuário é utilizado o método update ao invés do push,
   * pois será reutilizado o UID criado na autenticação.
   */
  private criarUsuarioNoDatabase(uid: string, registro: Registro) {
    throw new Error('Não implementado');
  }

  resetPassword(email: string) {
    throw new Error('Não implementado');
  }

  loginWithEmail(login: Login) {
    throw new Error('Não implementado');
  }

  public login(login: Login) {
    throw new Error('Não implementado');
  }

  logout(): void {
    throw new Error('Não implementado');
  }

  signOut(): void {
    throw new Error('Não implementado');
  }
}
