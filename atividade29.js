//29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz.

const readline = require("readline-sync");

console.log("Análise de Matriz 5x5");

let M = [];

console.log("Digite os elementos da matriz 5x5:");
for (let i = 0; i < 5; i++) {
  M[i] = [];
  console.log(`Linha ${i + 1}:`);
  for (let j = 0; j < 5; j++) {
    M[i][j] = parseFloat(readline.question(`M[${i + 1}][${j + 1}]: `));
  }
  console.log();
}

let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonal = 0;
let somaTotal = 0;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    somaTotal += M[i][j];

    if (i === 3) {
      somaLinha4 += M[i][j];
    }

    if (j === 1) {
      somaColuna2 += M[i][j];
    }

    if (i === j) {
      somaDiagonal += M[i][j];
    }
  }
}

console.log("Matriz M");
for (let i = 0; i < 5; i++) {
  let linha = "";
  for (let j = 0; j < 5; j++) {
    linha += M[i][j].toFixed(2) + "\t";
  }
  console.log(linha);
}

console.log("Somas");
console.log(`a) Soma da linha 4: ${somaLinha4.toFixed(2)}`);
console.log(`b) Soma da coluna 2: ${somaColuna2.toFixed(2)}`);
console.log(`c) Soma da diagonal principal: ${somaDiagonal.toFixed(2)}`);
console.log(`d) Soma de todos os elementos: ${somaTotal.toFixed(2)}`);
