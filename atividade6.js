//6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.

const prompt = require("prompt-sync")();

const numeroSorteado = Math.floor(Math.random() * 5) + 1;

const palpite = prompt("Tente adivinhar o número (entre 1 e 5): ");

const numero = parseInt(palpite);

if (numero === numeroSorteado) {
    console.log("Você acertou! Parabéns!");
} else {
    console.log(`Você errou. O número escolhido era: ${numeroSorteado}.`);
}