//47. Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados.

let objeto = {
  a: 2,
  b: 4,
  c: 6,
  d: 8,
};

function transformarObjeto(obj, funcao) {
  let novoObjeto = {};

  for (let chave in obj) {
    novoObjeto[chave] = funcao(obj[chave]);
  }

  return novoObjeto;
}

function dobrar(valor) {
  return valor * 2;
}

function aoQuadrado(valor) {
  return valor * valor;
}

console.log("Objeto original");
console.log(objeto);

console.log("Objeto com valores dobrados");
let objetoDobrado = transformarObjeto(objeto, dobrar);
console.log(objetoDobrado);

console.log("Objeto com valores ao quadrado");
let objetoQuadrado = transformarObjeto(objeto, aoQuadrado);
console.log(objetoQuadrado);
