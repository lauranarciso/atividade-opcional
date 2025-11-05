//9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.
const prompt = require("prompt-sync")();

let totalHomens = 0;
let totalMulheres = 0;
let continuar = true;

while (continuar) {
  let salario = parseFloat(prompt("Digite o salário do funcionário: "));
  let genero = prompt(
    "Digite o gênero do funcionário (M pra masculino e F pra feminino): "
  ).toUpperCase();

  if (genero === "M") {
    totalHomens += salario;
  } else if (genero === "F") {
    totalMulheres += salario;
  } else {
    console.log("Gênero inválido. Digite M ou F");
  }

  let resposta = prompt(
    "Deseja continuar? (S pra sim ou N pra não) "
  ).toUpperCase;
  if (resposta !== "S") {
    continuar = false;
  }
}

console.log(
  `Total de salários pagos: Homens: R$ ${totalHomens.toFixed(
    2
  )} Mulheres: R$ ${totalMulheres.toFixed(2)}`
);
