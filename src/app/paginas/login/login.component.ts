import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Login} from '../../shared/models/login';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {Registro} from '../../shared/models/registro';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin: NgForm;
  login: Login;
  registro: Registro;

  constructor(private authService: AuthService, private router: Router, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.login = new Login();
    this.registro = new Registro();
  }

  cadastrar(): void {
    this.authService.signUpWithEmail(this.registro)
      .then(() => {
        this.snackBar.open(`Bem vindo :)`, 'fechar', {duration: 3000});
        this.login = this.registro as Login;
        this.efetuarLogin();
      })
      .catch((mensagemErro) =>
        this.snackBar.open(mensagemErro, 'fechar', {duration: 3000}));
  }

  logar() {
    if (this.formLogin.valid) {
      this.efetuarLogin();
    }
  }


  private efetuarLogin() {
    this.authService.login(this.login)
      .then(() =>
        this.snackBar.open(`Bem vindo :)`, 'fechar', {duration: 3000}))
      .catch((mensagemErro) =>
        this.snackBar.open(mensagemErro, 'fechar', {duration: 3000}));
  }

}
