//34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações.

const readline = require("readline-sync");

console.log("Multiplicação de linhas por Diagonal Principal");

let matriz = [];

console.log("Digite os elementos da matriz 50x50:");
for (let i = 0; i < 50; i++) {
  matriz[i] = [];
  console.log(`linha ${i + 1}:`);
  for (let j = 0; j < 50; j++) {
    matriz[i][j] = parseFloat(
      readline.question(`Elemento [${i + 1}][${j + 1}]: `)
    );
  }
  console.log();
}

for (let i = 0; i < 50; i++) {
  let elementoDiagonal = matriz[i][i];
  for (let j = 0; j < 50; j++) {
    matriz[i][j] = matriz[i][j] * elementoDiagonal;
  }
}

console.log("Matriz após Multiplicações");
for (let i = 0; i < 50; i++) {
  let linha = `linha ${i + 1}: `;
  for (let j = 0; j < 50; j++) {
    linha += matriz[i][j].toFixed(2) + "\t";
  }
  console.log(linha);
}
