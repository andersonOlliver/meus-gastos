export class Usuario {
  key: string;
  apelido: string;
  email: string;

  constructor(apelido?: string, email?: string) {
    this.apelido = apelido;
    this.email = email;
  }
}
