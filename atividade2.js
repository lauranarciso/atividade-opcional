//2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
const prompt = require('prompt-sync')();

const velocidadeCarro = parseInt(prompt("Qual é a velocidade do carro em Km/h? "));

if(velocidadeCarro > 80) {
    const excesso = velocidadeCarro - 80;
    const multa = excesso * 5;
    console.log(`Você foi multado! Ultrapassou o limite em ${excesso} Km/h. O valor da multa será: ${multa}`)
} else {
    console.log("Você está dentro do limite de velocidade.")
}