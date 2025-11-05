//31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados.

const readline = require("readline-sync");

console.log("Busca e Filtragem em Matriz 30x30");

let A = parseInt(readline.question("Digite o valor A a ser buscado: "));
console.log();

let V = [];

console.log("Digite os elementos da matriz 30x30:");
for (let i = 0; i < 30; i++) {
  V[i] = [];
  console.log(`Linha ${i + 1}:`);
  for (let j = 0; j < 30; j++) {
    V[i][j] = parseInt(readline.question(`V[${i + 1}][${j + 1}]: `));
  }
  console.log();
}

let contador = 0;
for (let i = 0; i < 30; i++) {
  for (let j = 0; j < 30; j++) {
    if (V[i][j] === A) {
      contador++;
    }
  }
}

let X = [];
for (let i = 0; i < 30; i++) {
  X[i] = [];
  for (let j = 0; j < 30; j++) {
    if (V[i][j] !== A) {
      X[i].push(V[i][j]);
    }
  }
}

console.log(`Resultados`);
console.log(`Quantidade de valores iguais a ${A}: ${contador}`);
console.log(`\nMatriz X (elementos diferentes de ${A}):`);
for (let i = 0; i < X.length; i++) {
  if (X[i].length > 0) {
    console.log(`Linha ${i + 1}: ${X[i].join(", ")}`);
  }
}
