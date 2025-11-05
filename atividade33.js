//33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária.

const readline = require("readline-sync");

console.log("Operação com Diagonais de Matriz 3x3");

let matriz = [];

console.log("Digite os elementos da matriz 3x3:\n");
for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  console.log(`Linha ${i + 1}:`);
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = parseFloat(
      readline.question(`Elemento [${i + 1}][${j + 1}]: `)
    );
  }
  console.log();
}

let somaDiagonalSecundaria = 0;
for (let i = 0; i < 3; i++) {
  somaDiagonalSecundaria += matriz[i][2 - i];
}
let mediaDiagonalSecundaria = somaDiagonalSecundaria / 3;

console.log(
  `Média da diagonal secundaria: ${mediaDiagonalSecundaria.toFixed(2)}\n`
);

for (let i = 0; i < 3; i++) {
  matriz[i][i] = matriz[i][i] * mediaDiagonalSecundaria;
}

console.log("Matriz resultante");
for (let i = 0; i < 3; i++) {
  let linha = "";
  for (let j = 0; j < 3; j++) {
    linha += matriz[i][j].toFixed(2) + "\t";
  }
  console.log(linha);
}
