//3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.
const prompt = require('prompt-sync')();

const distancia = parseFloat(prompt("Qual distância deseja percorrer em Km? "));
let valor;

if(distancia <= 200){
    valor = distancia * 0.50;
} else {
    valor = distancia * 0.45;
}

console.log(`O preço da passagem é R$ ${valor}`);

