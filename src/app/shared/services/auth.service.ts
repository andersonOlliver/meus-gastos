import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Login} from '../models/login';
import {Registro} from '../models/registro';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';
import {Usuario} from '../models/usuario';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any;
  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
    this.angularFireAuth.authState.subscribe((auth) => {
      console.log(auth);
      this.authState = auth;
    });
  }

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false;
  }

  get currentUserId(): string {
    return (this.authState) ? this.authState.uid : localStorage.getItem('token');
  }

  get currentUserName(): string {
    return this.authState['email'];
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    return ((this.authState !== null) && (!this.isUserAnonymousLoggedIn));
  }

  signUpWithEmail(registro: Registro) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(registro.email, registro.senha)
      .then((user) => {
        console.log(user);
        this.authState = user.user;
        console.log(registro);
        return this.criarUsuarioNoDatabase(user.user.uid, registro);
      })
      .catch(error => {
        console.error(error);
        if (error.code === 'auth/invalid-email') {
          return Promise.reject('E-mail está com formato inválido!');
        } else if (error.code === 'auth/weak-password') {
          return Promise.reject('Senha deverá ter no mínimo 6 caracteres!');
        }
      });
  }

  private criarUsuarioNoDatabase(uid: string, registro: Registro) {
    let usuario = new Usuario(registro.apelido, registro.email);

    console.log(uid);
    console.log(usuario);

    alert('Vai criar');
    // return this.db.object<Usuario>(`/usuarios/${uid}`).update(usuario);
    return this.db.list(`/usuarios`).update(uid, usuario)
      .then(() => console.log('foi'))
      .catch(reason => console.log(reason));

  }

  resetPassword(email: string) {
    var auth = firebase.auth();

    return auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }

  loginWithEmail(login: Login) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(login.email, login.senha)
      .then((user) => {
        this.authState = user.user;
        localStorage.setItem('user', JSON.stringify(user));
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  public login(login: Login) {

    return this.angularFireAuth.auth.signInWithEmailAndPassword(login.email, login.senha)
      .then((user: firebase.auth.UserCredential) => {

        console.log(user);
        this.authState = user.user;
        localStorage['token'] = user.user.uid;
        this.router.navigate(['']);

      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          return Promise.reject('Usuário ou senha inválido!');
        } else {
          return Promise.reject(error.toString());
        }
      });

  }

  logout(): void {
    this.angularFireAuth.auth.signOut();
    localStorage.clear();
    this.router.navigate(['/']);
  }

  signOut(): void {
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}
