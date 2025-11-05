//26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5].

const readline = require("readline-sync");

console.log("Produto de Matrizes 3x5");

let A = [];
let B = [];
let P = [];

console.log("Digite os elementos da matriz A (3x5):");
for (let i = 0; i < 3; i++) {
  A[i] = [];
  console.log(`Linha ${i + 1}:`);
  for (let j = 0; j < 5; j++) {
    A[i][j] = parseFloat(readline.question(`  A[${i + 1}][${j + 1}]: `));
  }
  console.log();
}

console.log("Digite os elementos da matriz B (3x5):");
for (let i = 0; i < 3; i++) {
  B[i] = [];
  console.log(`Linha ${i + 1}:`);
  for (let j = 0; j < 5; j++) {
    B[i][j] = parseFloat(readline.question(`B[${i + 1}][${j + 1}]: `));
  }
  console.log();
}

for (let i = 0; i < 3; i++) {
  P[i] = [];
  for (let j = 0; j < 5; j++) {
    P[i][j] = A[i][j] * B[i][j];
  }
}

console.log("Matriz Produto P");
for (let i = 0; i < 3; i++) {
  let linha = "";
  for (let j = 0; j < 5; j++) {
    linha += P[i][j].toFixed(2) + "\t";
  }
  console.log(linha);
}
