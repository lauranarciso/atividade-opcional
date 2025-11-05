//40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial.

const readline = require("readline-sync");

let resultadoOficial = [];

console.log("Digite o resultado oficial (5 números):");
for (let i = 0; i < 5; i++) {
  resultadoOficial[i] = parseInt(readline.question(`Número ${i + 1}: `));
}
console.log();

let resultadoOrdenado = [...resultadoOficial].sort((a, b) => a - b);

for (let aposta = 1; aposta <= 50; aposta++) {
  console.log(`Aposta ${aposta}:`);

  let numeros = [];
  for (let i = 0; i < 5; i++) {
    numeros[i] = parseInt(readline.question(`Número ${i + 1}: `));
  }

  let apostaOrdenada = [...numeros].sort((a, b) => a - b);

  let ganhou = true;
  for (let i = 0; i < 5; i++) {
    if (apostaOrdenada[i] !== resultadoOrdenado[i]) {
      ganhou = false;
      break;
    }
  }

  if (ganhou) {
    console.log("Ganhador");
  } else {
    console.log("Não foi dessa vez.");
  }
}
