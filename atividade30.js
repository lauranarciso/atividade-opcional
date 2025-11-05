//30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados.

const readline = require("readline-sync");

console.log("=== Somas de Linhas e Colunas ===\n");

let M = [];
let SL = [];
let SC = [];

console.log("Digite os elementos da matriz 5x5:");
for (let i = 0; i < 5; i++) {
  M[i] = [];
  console.log(`Linha ${i + 1}:`);
  for (let j = 0; j < 5; j++) {
    M[i][j] = parseFloat(readline.question(`M[${i + 1}][${j + 1}]: `));
  }
  console.log();
}

for (let i = 0; i < 5; i++) {
  SL[i] = 0;
  for (let j = 0; j < 5; j++) {
    SL[i] += M[i][j];
  }
}

for (let j = 0; j < 5; j++) {
  SC[j] = 0;
  for (let i = 0; i < 5; i++) {
    SC[j] += M[i][j];
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

console.log("Vetor SL (Soma das Linhas)");
for (let i = 0; i < 5; i++) {
  console.log(`SL[${i + 1}] = ${SL[i].toFixed(2)}`);
}

console.log("Vetor SC (Soma das Colunas)");
for (let i = 0; i < 5; i++) {
  console.log(`SC[${i + 1}] = ${SC[i].toFixed(2)}`);
}
