//46. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor.

let vendas = [
  { vendedor: "Luna", valor: 1500 },
  { vendedor: "Maria", valor: 2000 },
  { vendedor: "Luna", valor: 1200 },
  { vendedor: "Lana", valor: 1800 },
  { vendedor: "Maria", valor: 2500 },
  { vendedor: "Luna", valor: 900 },
  { vendedor: "Lana", valor: 1100 },
];

function sumarizarVendas(arrayVendas) {
  let resumo = {};

  for (let venda of arrayVendas) {
    if (resumo[venda.vendedor]) {
      resumo[venda.vendedor] += venda.valor;
    } else {
      resumo[venda.vendedor] = venda.valor;
    }
  }

  return resumo;
}

console.log("Lista de vendas");
console.log(vendas);

console.log("Total de vendas por vendedor");
let totalPorVendedor = sumarizarVendas(vendas);
console.log(totalPorVendedor);

console.log("Detalhamento");
for (let vendedor in totalPorVendedor) {
  console.log(`${vendedor}: R$ ${totalPorVendedor[vendedor].toFixed(2)}`);
}
