//35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.

const readline = require("readline-sync");

console.log("Pares e ímpares");

let vetorPares = [];
let vetorImpares = [];

for (let i = 0; i < 30; i++) {
  let valor = parseInt(readline.question(`Digite o valor ${i + 1}: `));

  if (valor % 2 === 0) {
    vetorPares.push(valor);

    if (vetorPares.length === 5) {
      console.log("Vetor de pares cheio:");
      console.log(vetorPares.join(", "));
      console.log();
      vetorPares = [];
    }
  } else {
    vetorImpares.push(valor);

    if (vetorImpares.length === 5) {
      console.log("Vetor de impares cheio:");
      console.log(vetorImpares.join(", "));
      console.log();
      vetorImpares = [];
    }
  }
}

console.log("Conteúdo final dos vetores");
console.log("Vetor de pares:");
if (vetorPares.length > 0) {
  console.log(vetorPares.join(", "));
} else {
  console.log("Vazio");
}

console.log("Vetor de impares:");
if (vetorImpares.length > 0) {
  console.log(vetorImpares.join(", "));
} else {
  console.log("Vazio");
}
