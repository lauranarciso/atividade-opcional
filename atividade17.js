//17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.

const readline = require("readline-sync");

let nomes = [];
let idades = [];

console.log("Cadastro de 9 pessoas");

for (let i = 0; i < 9; i++) {
  console.log(`Pessoa ${i + 1}:`);
  nomes[i] = readline.question("Nome: ");
  idades[i] = parseInt(readline.question("Idade: "));
  console.log();
}

console.log("Pessoas menores de idade");

let encontrouMenor = false;
for (let i = 0; i < 9; i++) {
  if (idades[i] < 18) {
    console.log(`Nome: ${nomes[i]} - Idade: ${idades[i]} anos`);
    encontrouMenor = true;
  }
}

if (!encontrouMenor) {
  console.log("Nenhuma pessoa menor de idade foi encontrada.");
}
