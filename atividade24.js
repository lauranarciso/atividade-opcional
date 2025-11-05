//24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M.

const readline = require("readline-sync");

console.log("Contagem de Elementos Negativos");

let M = [];
let C = [];

console.log("Digite os elementos da matriz 6x8:");
for (let i = 0; i < 6; i++) {
  M[i] = [];
  console.log(`Linha ${i + 1}:`);
  for (let j = 0; j < 8; j++) {
    M[i][j] = parseFloat(
      readline.question(`Elemento [${i + 1}][${j + 1}]: `)
    );
  }
  console.log();
}

for (let i = 0; i < 6; i++) {
  let negativos = 0;
  for (let j = 0; j < 8; j++) {
    if (M[i][j] < 0) {
      negativos++;
    }
  }
  C[i] = negativos;
}

console.log("Vetor C (quantidade de negativos por linha)");
for (let i = 0; i < C.length; i++) {
  console.log(`Linha ${i + 1}: ${C[i]} elementos negativos`);
}
