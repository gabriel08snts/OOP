//CRIANDO UMA CLASSE;
class Veiculo {
  rodas = 4

  mover(direcao) {}
  virar(direcao) {}
}

//NOVA CLASSE QUE HERDA CARACTERÍSTICAS DA CLASSE ANTERIOR ATRAVÉS DO "EXTENDS";
class Moto extends Veiculo {
  constructor() {
    super() //PUXAR ATRIBUTOS E MÉTODOS DO PAI;
    this.rodas = 2
  }
}
