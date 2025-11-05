//20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:

const readline = require("readline-sync");

const NUM_FUNCIONARIOS = 80;
const DESCONTO_INSS = 0.12;

let funcionarios = [];

console.log("Cadastro de Funcionários");

for (let i = 0; i < NUM_FUNCIONARIOS; i++) {
  console.log(`Funcionário ${i + 1}:`);
  funcionarios[i] = {
    matricula: readline.question("Matricula: "),
    nome: readline.question("Nome: "),
    salarioBruto: parseFloat(readline.question("Salario bruto: R$ ")),
  };
  console.log();
}

console.log("Contracheques");

for (let i = 0; i < funcionarios.length; i++) {
  let deducaoINSS = funcionarios[i].salarioBruto * DESCONTO_INSS;
  let salarioLiquido = funcionarios[i].salarioBruto - deducaoINSS;

  console.log(`Matricula: ${funcionarios[i].matricula}`);
  console.log(`Nome: ${funcionarios[i].nome}`);
  console.log(`Salario bruto: R$ ${funcionarios[i].salarioBruto.toFixed(2)}`);
  console.log(`Deducao INSS: R$ ${deducaoINSS.toFixed(2)}`);
  console.log(`Salario liquido: R$ ${salarioLiquido.toFixed(2)}`);
}
