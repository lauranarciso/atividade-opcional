//7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir: Carros populares - Até 100 Km percorridos: R$ 0,20 por Km - Acima de 100 Km percorridos: R$ 0,10 por Km Carros de luxo - Até 200 Km percorridos: R$ 0,30 por Km - Acima de 200 Km percorridos: R$ 0,25 por Km

const prompt = require("prompt-sync")();

const tipo = prompt("Escolha o tipo de carro (popular ou luxo): ");
const dias = parseInt(prompt("Quantos dias de aluguel: "));
const km = parseFloat(prompt("Quantos km foram percorridos? "));

let valorDia = 0;
let valorKm = 0;

if (tipo === "popular") {
    valorDia = 90;

    if(km <= 100) {
        valorKm = km * 0.20;
    } else {
        valorkm = km * 0.10;
    }
} else if (tipo === "luxo") {
    valorDia = 150;

    if(km <= 200) {
        valorKm = km * 0.30;
    } else {
        valorKm = km * 0.25;
    }
} else {
    console.log("Tipo de carro inválido. Escolha 'popular' ou 'luxo'.");
    process.exit();
}

const total = (valorDia * dias) + valorKm;

console.log(`Resumo do aluguel:`);
console.log(`Tipo de carro escolhido: ${tipo}`);
console.log(`Dias: ${dias}`);
console.log(`Km percorridos: ${km}`);
console.log(`Valor total: ${total}`);