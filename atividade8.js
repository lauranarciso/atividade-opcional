//8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O sistema funciona assim: - até 10 h de atividade no mês: ganha 2 pontos por hora - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora - acima de 20 h de atividade no mês: ganha 10 pontos por hora - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos) Faça um programa que leia quantas horas de atividade uma pessoa teve por mês. Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

const prompt = require("prompt-sync")();

let horasPorMes = parseFloat(
  prompt("Quantas horas de atividade física você faz no mês? ")
);

let pontos = 0;

if (horasPorMes <= 10) {
  pontos = horasPorMes * 2;
} else if (horasPorMes <= 20) {
  pontos = 10 * 2 + (horasPorMes - 10) * 5;
} else {
  pontos = 10 * 2 + 10 * 5 + (horasPorMes - 20) * 10;
}

let dinheiro = pontos * 0.05;

console.log(`Você fez ${pontos} pontos e ganhou R$${dinheiro}`);
