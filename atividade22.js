//22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$ 350,00.

const readline = require("readline-sync");

function pesquisaHabitantes() {
  let salarios = [];
  let numeroFilhos = [];
  let continuar = true;

  console.log("Pesquisa da prefeitura");

  while (continuar) {
    let salario = parseFloat(readline.question("Salario: R$ "));
    let filhos = parseInt(readline.question("Numero de filhos: "));

    salarios.push(salario);
    numeroFilhos.push(filhos);

    let resposta = readline.question("Deseja continuar? (s/n): ");
    continuar = resposta.toLowerCase() === "s";
    console.log();
  }

  let somaSalarios = salarios.reduce((acc, sal) => acc + sal, 0);
  let somaFilhos = numeroFilhos.reduce((acc, filhos) => acc + filhos, 0);
  let mediaSalario = somaSalarios / salarios.length;
  let mediaFilhos = somaFilhos / numeroFilhos.length;
  let maiorSalario = Math.max(...salarios);
  let pessoasAte350 = salarios.filter((sal) => sal <= 350).length;
  let percentualAte350 = (pessoasAte350 / salarios.length) * 100;

  return {
    mediaSalario: mediaSalario,
    mediaFilhos: mediaFilhos,
    maiorSalario: maiorSalario,
    percentualAte350: percentualAte350,
  };
}

let resultado = pesquisaHabitantes();

console.log("Resultados da pesquisa");
console.log(`Média de salario: R$ ${resultado.mediaSalario.toFixed(2)}`);
console.log(`Media de filhos: ${resultado.mediaFilhos.toFixed(2)}`);
console.log(`Maior salario: R$ ${resultado.maiorSalario.toFixed(2)}`);
console.log(
  `Percentual com salário ate R$ 350,00: ${resultado.percentualAte350.toFixed(
    2
  )}%`
);
