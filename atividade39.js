//39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.

const readline = require("readline-sync");

console.log("Compactação de Vetor");

let A = [];

console.log("Digite 100 valores:\n");
for (let i = 0; i < 100; i++) {
  A[i] = parseFloat(readline.question(`A[${i + 1}]: `));
}

let B = [];
for (let i = 0; i < A.length; i++) {
  if (A[i] > 0) {
    B.push(A[i]);
  }
}

console.log("Resultados");
console.log(`Vetor A original: ${A.length} elementos`);
console.log(`Vetor B compactado: ${B.length} elementos (apenas positivos)`);
console.log("Vetor B:");
console.log(B.join(", "));
