//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require("prompt-sync")();

const opcoes = ["pedra", "papel", "tesoura"];

const jogador = prompt("Escolha uma das opções: pedra, papel ou tesoura? ");
const computador = opcoes[Math.floor(Math.random() * 3)];

console.log(`Você escolheu a opção: ${jogador}`);
console.log(`Seu adversário escolheu: ${computador}`);

if (!opcoes.includes(jogador)) {
  console.log("Escolha inválida. Escolha apenas pedra, papel ou tesoura. ");
} else if (jogador === computador) {
  console.log("Empate!");
} else if (
  (jogador === "pedra" && computador === "tesoura") ||
  (jogador === "papel" && computador === "pedra") ||
  (jogador === "tesoura" && computador === "papel")
) {
  console.log("Você venceu o jogo");
} else {
  console.log("Você perdeu o jogo");
}
