//38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável:
// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.

const readline = require("readline-sync");

console.log("Operações com vetor");

let vetor = [];

console.log("Digite 6 valores:");
for (let i = 0; i < 6; i++) {
  vetor[i] = parseFloat(readline.question(`Valor ${i + 1}: `));
}

console.log("Menu de operações");
console.log("1 - Soma dos elementos");
console.log("2 - Produto dos elementos");
console.log("3 - Média dos elementos");
console.log("4 - Ordenar em ordem crescente");
console.log("5 - Mostrar o vetor");

let opcao = parseInt(readline.question("Escolha uma opcao: "));

console.log();

switch (opcao) {
  case 1:
    let soma = vetor.reduce((acc, val) => acc + val, 0);
    console.log(`Soma dos elementos: ${soma.toFixed(2)}`);
    break;

  case 2:
    let produto = vetor.reduce((acc, val) => acc * val, 1);
    console.log(`Produto dos elementos: ${produto.toFixed(2)}`);
    break;

  case 3:
    let media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
    console.log(`Media dos elementos: ${media.toFixed(2)}`);
    break;

  case 4:
    let vetorOrdenado = [...vetor].sort((a, b) => a - b);
    console.log("Vetor ordenado em ordem crescente:");
    console.log(vetorOrdenado.join(", "));
    break;

  case 5:
    console.log("Vetor:");
    console.log(vetor.join(", "));
    break;

  default:
    console.log("Opcao invalida!");
}
