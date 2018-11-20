export class Lancamento {
  constructor(valor?: number | string, titulo?: string, dataRegistro?: string | Date, observacao?: string) {
    this.valor = valor;
    this.dataRegistro = dataRegistro || '';
    this.titulo = titulo;
    this.observacao = observacao || '';
  }

  key: string;
  valor: number | string;
  dataRegistro: string | Date;
  titulo: string;
  observacao?: string;
  userId: string;
}


