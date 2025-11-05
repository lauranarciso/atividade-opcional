//49. Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.

let transacoes = [
  { id: 1, valor: 150.0, data: "2024-01-15", categoria: "Alimentacao" },
  { id: 2, valor: 80.0, data: "2024-01-16", categoria: "Transporte" },
  { id: 3, valor: 200.0, data: "2024-01-17", categoria: "Alimentacao" },
  { id: 4, valor: 50.0, data: "2024-01-18", categoria: "Lazer" },
  { id: 5, valor: 120.0, data: "2024-01-19", categoria: "Transporte" },
  { id: 6, valor: 300.0, data: "2024-01-20", categoria: "Saude" },
  { id: 7, valor: 90.0, data: "2024-01-21", categoria: "Alimentacao" },
  { id: 8, valor: 150.0, data: "2024-01-22", categoria: "Lazer" },
];

function agruparTransacoes(arrayTransacoes) {
  let resultado = {};

  for (let transacao of arrayTransacoes) {
    let categoria = transacao.categoria;

    if (!resultado[categoria]) {
      resultado[categoria] = {
        transacoes: [],
        subtotal: 0,
      };
    }

    resultado[categoria].transacoes.push(transacao);
    resultado[categoria].subtotal += transacao.valor;
  }

  return resultado;
}

console.log("Transações financeiras");
console.log(transacoes);

console.log("Transações agrupadas por categoria");
let transacoesAgrupadas = agruparTransacoes(transacoes);

for (let categoria in transacoesAgrupadas) {
  console.log(`\n--- ${categoria} ---`);
  console.log(
    `Subtotal: R$ ${transacoesAgrupadas[categoria].subtotal.toFixed(2)}`
  );
  console.log("Transações:");
  transacoesAgrupadas[categoria].transacoes.forEach((t) => {
    console.log(`  ID ${t.id}: R$ ${t.valor.toFixed(2)} - ${t.data}`);
  });
}

console.log("Resumo geral");
let totalGeral = 0;
for (let categoria in transacoesAgrupadas) {
  totalGeral += transacoesAgrupadas[categoria].subtotal;
  console.log(
    `${categoria}: R$ ${transacoesAgrupadas[categoria].subtotal.toFixed(2)}`
  );
}
console.log(`\nTotal geral: R$ ${totalGeral.toFixed(2)}`);
