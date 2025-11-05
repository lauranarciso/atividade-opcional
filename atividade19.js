//19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS.

const readline = require("readline-sync");

let horarios = [];

console.log("Cadastro de 5 Horários");

for (let i = 0; i < 5; i++) {
  let valido = false;

  while (!valido) {
    console.log(`Horário ${i + 1}:`);
    let horas = parseInt(readline.question("Horas (0-23): "));
    let minutos = parseInt(readline.question("Minutos (0-59): "));
    let segundos = parseInt(readline.question("Segundos (0-59): "));

    if (
      horas >= 0 &&
      horas <= 23 &&
      minutos >= 0 &&
      minutos <= 59 &&
      segundos >= 0 &&
      segundos <= 59
    ) {
      horarios[i] = {
        horas: horas,
        minutos: minutos,
        segundos: segundos,
      };
      valido = true;
    } else {
      console.log("Horario invalido! Tente novamente.\n");
    }
  }
  console.log();
}

console.log("Horários Cadastrados");

for (let i = 0; i < horarios.length; i++) {
  let h = horarios[i].horas.toString().padStart(2, "0");
  let m = horarios[i].minutos.toString().padStart(2, "0");
  let s = horarios[i].segundos.toString().padStart(2, "0");
  console.log(`Horario ${i + 1}: ${h}.${m}.${s}`);
}
