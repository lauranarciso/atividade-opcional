//23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos.

console.log("Matriz identidade 7x7");

let MI = [];

for (let i = 0; i < 7; i++) {
  MI[i] = [];
  for (let j = 0; j < 7; j++) {
    if (i === j) {
      MI[i][j] = 1;
    } else {
      MI[i][j] = 0;
    }
  }
}

for (let i = 0; i < 7; i++) {
  let linha = "";
  for (let j = 0; j < 7; j++) {
    linha += MI[i][j] + " ";
  }
  console.log(linha);
}
