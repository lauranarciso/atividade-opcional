//37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem "APROVADO" se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de "REPROVADO", caso contrário.

const readline = require("readline-sync");

console.log("Correção de Prova");

let gabarito = [];

console.log("Digite o gabarito (20 questões - A, B, C, D ou E):");
for (let i = 0; i < 20; i++) {
  gabarito[i] = readline.question(`Questao ${i + 1}: `).toUpperCase();
}
console.log();

for (let aluno = 1; aluno <= 50; aluno++) {
  console.log(`Aluno ${aluno}:`);

  let respostas = [];
  console.log("Digite as respostas:");
  for (let i = 0; i < 20; i++) {
    respostas[i] = readline.question(`Questão ${i + 1}: `).toUpperCase();
  }

  let acertos = 0;
  for (let i = 0; i < 20; i++) {
    if (respostas[i] === gabarito[i]) {
      acertos++;
    }
  }

  console.log(`Aluno ${aluno}: ${acertos} acertos`);

  if (acertos >= 12) {
    console.log("APROVADO");
  } else {
    console.log("REPROVADO");
  }
}
