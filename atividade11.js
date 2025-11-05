//11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência.

const prompt = require("prompt-sync")();

let primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA: "));
let razao = parseInt(prompt("Digite a razão da PA: "));

let soma = 0;
let termos = "";

for (let i = 0; i < 10; i++) {
  let termo = primeiroTermo + i * razao;
  soma += termo;
  termos += termo + " ";
}

console.log("Os 10 primeiros termos da PA são: ");
console.log(termos);
console.log("A soma dos 10 primeiros termos é: " + soma);
