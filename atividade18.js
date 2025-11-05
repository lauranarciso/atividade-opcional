//18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro.

const readline = require("readline-sync");

console.log("Cadastro de Funcionário");

let funcionario = {
  nome: readline.question("Nome do funcionario: "),
  cargo: readline.question("Cargo: "),
  salario: parseFloat(readline.question("Salario: R$ ")),
};

console.log("Dados do Funcionário");
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salario: R$ ${funcionario.salario.toFixed(2)}`);
