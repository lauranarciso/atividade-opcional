//43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos.

let obj1 = {
  nome: "Luna",
  idade: 25,
  cidade: "São Paulo",
  profissao: "Desenvolvedora",
};

let obj2 = {
  idade: 30,
  cidade: "Rio de Janeiro",
  email: "luna.silva@email.com",
};

function combinarObjetos(objeto1, objeto2) {
  return { ...objeto1, ...objeto2 };
}

console.log("objeto 1");
console.log(obj1);

console.log("\objeto 2");
console.log(obj2);

console.log("Objeto combinado (objeto 2 tem precedência)");
let objetoCombinado = combinarObjetos(obj1, obj2);
console.log(objetoCombinado);
