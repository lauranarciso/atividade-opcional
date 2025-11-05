//10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
//a) O somatório entre todos os valores;
//b) Qual foi o menor valor digitado;
//c) A média entre todos os valores;
//d) Quantos valores são pares.

const prompt = require("prompt-sync")();

let soma = 0;
let menor = null;
let quantidade = 0;
let valoresPares = 0;

do {
  let numero = parseFloat(prompt("Digite um número: "));

  soma += numero;

  if (menor === null || numero < menor) {
    menor = numero;
  }

  quantidade++;

  if (numero % 2 === 0) {
    pares++;
  }

  let continuar = prompt(
    "Deseja continuar? (s) para sim, (n) para não: "
  ).toLocaleLowerCase();
} while (continual === "s");

let media = soma / quantidade;

console.log("Soma: " + soma);
console.log("Menor valor: " + menor);
