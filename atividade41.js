//41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.

let pessoa = {
  nome: "Luna Silva",
  idade: 30,
};

console.log("Dados da Pessoa");
console.log(`Idade: ${pessoa.idade}`);

// Adicionar propriedade email
pessoa.email = "luna.silva@email.com";

console.log("Objeto atualizado");
console.log(pessoa);
