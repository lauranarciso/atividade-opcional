//28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
// a) a soma dos elementos acima da diagonal principal;
// b) a soma dos elementos abaixo da diagonal principal;

const readline = require("readline-sync");

console.log("Análise de Matriz 10x10");

let matriz = [];

console.log("Digite os elementos da matriz 10x10:");
for (let i = 0; i < 10; i++) {
  matriz[i] = [];
  console.log(`Linha ${i + 1}:`);
  for (let j = 0; j < 10; j++) {
    matriz[i][j] = parseFloat(
      readline.question(`Elemento [${i + 1}][${j + 1}]: `)
    );
  }
  console.log();
}

let somaAcima = 0;
let somaAbaixo = 0;

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i < j) {
      somaAcima += matriz[i][j];
    } else if (i > j) {
      somaAbaixo += matriz[i][j];
    }
  }
}

console.log("Resultados");
console.log(
  `a) Soma dos elementos acima da diagonal principal: ${somaAcima.toFixed(2)}`
);
console.log(
  `b) Soma dos elementos abaixo da diagonal principal: ${somaAbaixo.toFixed(2)}`
);
