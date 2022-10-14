//DEFINIR UMA CLASSE;
class Pessoa {
  constructor(nome) {
    this.id = ~~(Math.random() * 100000)
    this.nome = nome
  }

  dizerNome() {
    console.log(this.nome)
  }
}

//CRIAR UM OBJETO;
const pessoa = new Pessoa('Mayk')
console.log(pessoa)
