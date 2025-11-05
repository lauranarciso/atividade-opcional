//45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array.

let palavras = [
  "casa",
  "carro",
  "casa",
  "moto",
  "carro",
  "casa",
  "bicicleta",
  "moto",
  "casa",
];

function contarOcorrencias(array) {
  let objeto = {};

  for (let i = 0; i < array.length; i++) {
    let palavra = array[i];

    if (objeto[palavra]) {
      objeto[palavra]++;
    } else {
      objeto[palavra] = 1;
    }
  }

  return objeto;
}

console.log("Array original");
console.log(palavras);

console.log("Contagem de ocorrências");
let resultado = contarOcorrencias(palavras);
console.log(resultado);
