//27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final.

const readline = require("readline-sync");

console.log("Multiplicação de Matriz por escalar");

let M = [];
let V = [];

console.log("Digite os elementos da matriz 6x6:");
for (let i = 0; i < 6; i++) {
  M[i] = [];
  console.log(`Linha ${i + 1}:`);
  for (let j = 0; j < 6; j++) {
    M[i][j] = parseFloat(readline.question(`M[${i + 1}][${j + 1}]: `));
  }
  console.log();
}

let A = parseFloat(
  readline.question("Digite o valor A para multiplicar a matriz: ")
);

let index = 0;
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    V[index] = M[i][j] * A;
    index++;
  }
}

console.log("Vetor V (36 elementos)");
for (let i = 0; i < 36; i++) {
  console.log(`V[${i + 1}] = ${V[i].toFixed(2)}`);
}
