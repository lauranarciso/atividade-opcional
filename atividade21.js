//21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const readline = require("readline-sync");

function calcularPesoIdeal(altura, sexo) {
  if (sexo.toLowerCase() === "m" || sexo.toLowerCase() === "masculino") {
    return 72.7 * altura - 58;
  } else if (sexo.toLowerCase() === "f" || sexo.toLowerCase() === "feminino") {
    return 62.1 * altura - 44.7;
  } else {
    return null;
  }
}

console.log("Cálculo de Peso Ideal");

let altura = parseFloat(readline.question("Informe sua altura (em metros): "));
let sexo = readline.question("Informe seu sexo (M/F): ");

let pesoIdeal = calcularPesoIdeal(altura, sexo);

if (pesoIdeal !== null) {
  console.log(`\nSeu peso ideal e: ${pesoIdeal.toFixed(2)} kg`);
} else {
  console.log("\nSexo invalido! Use M para masculino ou F para feminino.");
}
