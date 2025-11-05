//25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente.

const readline = require("readline-sync");

console.log("Soma das colunas de matriz 15x20");

let matriz = [];

console.log("Digite os elementos da matriz 15x20:");
for (let i = 0; i < 15; i++) {
  matriz[i] = [];
  console.log(`Linha ${i + 1}:`);
  for (let j = 0; j < 20; j++) {
    matriz[i][j] = parseFloat(
      readline.question(`Elemento [${i + 1}][${j + 1}]: `)
    );
  }
  console.log();
}

console.log("Soma de Cada Coluna");
for (let j = 0; j < 20; j++) {
  let soma = 0;
  for (let i = 0; i < 15; i++) {
    soma += matriz[i][j];
  }
  console.log(`Coluna ${j + 1}: ${soma.toFixed(2)}`);
}
