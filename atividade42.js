//42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.

let dados = {
  nome: "Luna",
  idade: 25,
  hobbies: ["leitura", "natação", "música"],
  cidade: "São Paulo",
  telefones: ["11-1234-5678", "11-9876-5432"],
  ativo: true,
  notas: [8.5, 9.0, 7.5, 10.0],
  email: "luna@email.com",
};

function filtrarArrays(obj) {
  let resultado = {};

  for (let chave in obj) {
    if (Array.isArray(obj[chave])) {
      resultado[chave] = obj[chave];
    }
  }

  return resultado;
}

console.log("Objeto original");
console.log(dados);

console.log("Propriedades que são arrays");
let apenasArrays = filtrarArrays(dados);
console.log(apenasArrays);
