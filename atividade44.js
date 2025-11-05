//44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número.

let objeto = {
  nome: "Luna",
  idade: 28,
  cidade: "Belo Horizonte",
  ativo: true,
  email: "luna@email.com",
  salario: 5000.0,
  cargo: "Desenvolvedora",
  casada: false,
};

function contarStrings(obj) {
  let contador = 0;

  for (let chave in obj) {
    if (typeof obj[chave] === "string") {
      contador++;
    }
  }

  return contador;
}

console.log("objeto");
console.log(objeto);

console.log("Resultado");
let quantidadeStrings = contarStrings(objeto);
console.log(`Número de propriedades do tipo string: ${quantidadeStrings}`);
