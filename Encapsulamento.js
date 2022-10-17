//ESTRUTURAL;
let altura = 50
let largura = 60
function calcularArea(altura, largura) {
  return altura * largura
}

//ORIENTADO A OBJETOS;
class Poligono {
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }

  get area() {
    return this.#calcularArea()
  }

  #calcularArea() {
    return this.altura * this.largura
  }
}

//CRIAR O OBJETO;
let poligono = new Poligono(50, 60)
console.log(poligono.area)
