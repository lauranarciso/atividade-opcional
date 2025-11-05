//12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci. Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

let n1 = 1;
let n2 = 1;

let termos = n1 + ", " + n2;

for (let i = 3; i <= 10; i++) {
  let proximo = n1 + n2;
  termos += ", " + proximo;

  n1 = n2;
  n2 = proximo;
}

console.log("Os 10 primeiros termos da sequência são: ");
console.log(termos);
