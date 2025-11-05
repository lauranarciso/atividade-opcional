//48. Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.

let inventarioLojaA = {
  notebook: 10,
  mouse: 25,
  teclado: 15,
  monitor: 8,
  webcam: 12,
};

let inventarioLojaB = {
  mouse: 30,
  teclado: 20,
  headset: 18,
  webcam: 8,
  impressora: 5,
};

function combinarInventarios(lojaA, lojaB) {
  let inventarioCombinado = { ...lojaA };

  for (let item in lojaB) {
    if (inventarioCombinado[item]) {
      inventarioCombinado[item] += lojaB[item];
    } else {
      inventarioCombinado[item] = lojaB[item];
    }
  }

  return inventarioCombinado;
}

console.log("Inventário loja A");
console.log(inventarioLojaA);

console.log("Inventário loja B");
console.log(inventarioLojaB);

console.log("Inventário combinado");
let inventarioTotal = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log(inventarioTotal);

console.log("Detalhamento do inventário total");
for (let item in inventarioTotal) {
  console.log(`${item}: ${inventarioTotal[item]} unidades`);
}
