//32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada.

const readline = require("readline-sync");

console.log("normalização de Matriz 12x13");

let M = [];

console.log("Digite os elementos da matriz 12x13:");
for (let i = 0; i < 12; i++) {
  M[i] = [];
  console.log(`linha ${i + 1}:`);
  for (let j = 0; j < 13; j++) {
    M[i][j] = parseFloat(readline.question(`M[${i + 1}][${j + 1}]: `));
  }
  console.log();
}

console.log("Matriz original");
for (let i = 0; i < 12; i++) {
  let linha = "";
  for (let j = 0; j < 13; j++) {
    linha += M[i][j].toFixed(2) + "\t";
  }
  console.log(linha);
}

let M_modificada = [];
for (let i = 0; i < 12; i++) {
  M_modificada[i] = [];

  let maiorModulo = 0;
  for (let j = 0; j < 13; j++) {
    if (Math.abs(M[i][j]) > maiorModulo) {
      maiorModulo = Math.abs(M[i][j]);
    }
  }

  for (let j = 0; j < 13; j++) {
    if (maiorModulo !== 0) {
      M_modificada[i][j] = M[i][j] / maiorModulo;
    } else {
      M_modificada[i][j] = M[i][j];
    }
  }
}

console.log("Matriz modificada");
for (let i = 0; i < 12; i++) {
  let linha = "";
  for (let j = 0; j < 13; j++) {
    linha += M_modificada[i][j].toFixed(4) + "\t";
  }
  console.log(linha);
}
