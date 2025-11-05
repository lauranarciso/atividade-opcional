//4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.

const prompt = require("prompt-sync")();

const lado1 = parseFloat(
  prompt("Digite o comprimento do 1º segmento de reta: ")
);
const lado2 = parseFloat(
  prompt("Digite o comprimento do 2º segmento de reta: ")
);
const lado3 = parseFloat(
  prompt("Digite o comprimento do 3º segmento de reta: ")
);

const formarTriangulo =
  lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2;

if (formarTriangulo) {
  console.log("Os segmentos que você digitou podem formar um triângulo.");
} else {
  console.log("Os segmentos que você digitou não podem formar um triângulo.");
}
