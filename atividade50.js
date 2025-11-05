//50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema deverá ser capaz de interagir com o usuário através do console do navegador e manter um registro das reservas e hotéis disponíveis.

const readline = require("readline-sync");

let hoteis = [];
let reservas = [];
let contadorIdReserva = 1;

function adicionarHotel() {
  console.log("Adicionar novo hotel");

  let id = hoteis.length + 1;
  let nome = readline.question("Nome do hotel: ");
  let cidade = readline.question("Cidade: ");
  let quartosTotal = parseInt(readline.question("Total de quartos: "));

  let hotel = {
    id: id,
    nome: nome,
    cidade: cidade,
    quartosTotal: quartosTotal,
    quartosDisponiveis: quartosTotal,
    avaliacoes: [],
  };

  hoteis.push(hotel);
  console.log(`\nHotel "${nome}" adicionado com sucesso!`);
}

function buscarHoteisPorCidade() {
  console.log("\nBuscar hotéis por cidade");

  let cidade = readline.question("Digite a cidade: ");
  let hoteisEncontrados = hoteis.filter(
    (h) => h.cidade.toLowerCase() === cidade.toLowerCase()
  );

  if (hoteisEncontrados.length === 0) {
    console.log(`\nNenhum hotel encontrado em ${cidade}.`);
  } else {
    console.log(`\nHotéis em ${cidade} ---`);
    hoteisEncontrados.forEach((hotel) => {
      console.log(
        `ID: ${hotel.id} | ${hotel.nome} | Quartos disponíveis: ${hotel.quartosDisponiveis}/${hotel.quartosTotal}`
      );
    });
  }
}

function fazerReserva() {
  console.log("\nFazer reserva");

  let idHotel = parseInt(readline.question("ID do hotel: "));
  let hotel = hoteis.find((h) => h.id === idHotel);

  if (!hotel) {
    console.log("\nHotel não encontrado!");
    return;
  }

  if (hotel.quartosDisponiveis === 0) {
    console.log("\nDesculpe, não há quartos disponíveis neste hotel.");
    return;
  }

  let nomeCliente = readline.question("Nome do cliente: ");

  let reserva = {
    idReserva: contadorIdReserva++,
    idHotel: idHotel,
    nomeCliente: nomeCliente,
    status: "ativa",
  };

  reservas.push(reserva);
  hotel.quartosDisponiveis--;

  console.log(
    `\nReserva #${reserva.idReserva} realizada com sucesso para ${nomeCliente}!`
  );
}

function cancelarReserva() {
  console.log("\nCancelar Reserva");

  let idReserva = parseInt(readline.question("ID da reserva: "));
  let reserva = reservas.find((r) => r.idReserva === idReserva);

  if (!reserva) {
    console.log("\nReserva não encontrada!");
    return;
  }

  if (reserva.status === "cancelada") {
    console.log("\nEsta reserva já foi cancelada.");
    return;
  }

  let hotel = hoteis.find((h) => h.id === reserva.idHotel);
  hotel.quartosDisponiveis++;
  reserva.status = "cancelada";

  console.log(`\nReserva #${idReserva} cancelada com sucesso!`);
}

function listarReservas() {
  console.log("\n=== Todas as Reservas ===");

  if (reservas.length === 0) {
    console.log("\nNenhuma reserva registrada.");
    return;
  }

  reservas.forEach((reserva) => {
    let hotel = hoteis.find((h) => h.id === reserva.idHotel);
    console.log(`\nReserva #${reserva.idReserva}`);
    console.log(`Cliente: ${reserva.nomeCliente}`);
    console.log(`Hotel: ${hotel.nome} (${hotel.cidade})`);
    console.log(`Status: ${reserva.status}`);
  });
}

function checkIn() {
  console.log("\n=== Check-in ===");

  let idReserva = parseInt(readline.question("ID da reserva: "));
  let reserva = reservas.find((r) => r.idReserva === idReserva);

  if (!reserva) {
    console.log("\nReserva não encontrada!");
    return;
  }

  if (reserva.status === "cancelada") {
    console.log("\nEsta reserva foi cancelada.");
    return;
  }

  if (reserva.status === "check-in") {
    console.log("\nCheck-in já realizado para esta reserva.");
    return;
  }

  reserva.status = "check-in";
  console.log(`\nCheck-in realizado com sucesso para ${reserva.nomeCliente}!`);
}

function checkOut() {
  console.log("\n=== Check-out ===");

  let idReserva = parseInt(readline.question("ID da reserva: "));
  let reserva = reservas.find((r) => r.idReserva === idReserva);

  if (!reserva) {
    console.log("\nReserva não encontrada!");
    return;
  }

  if (reserva.status !== "check-in") {
    console.log("\nCheck-in não foi realizado para esta reserva.");
    return;
  }

  let hotel = hoteis.find((h) => h.id === reserva.idHotel);
  hotel.quartosDisponiveis++;
  reserva.status = "concluída";

  // Solicitar avaliação
  let avaliar = readline.question("\nDeseja avaliar o hotel? (S/N): ");
  if (avaliar.toLowerCase() === "s") {
    let nota = parseFloat(readline.question("Nota (0-10): "));
    let comentario = readline.question("Comentario (opcional): ");

    hotel.avaliacoes.push({
      cliente: reserva.nomeCliente,
      nota: nota,
      comentario: comentario,
    });

    console.log("\nAvaliacao registrada! Obrigado!");
  }

  console.log(`\nCheck-out realizado com sucesso!`);
}

function relatorioOcupacao() {
  console.log("\n=== Relatório de Ocupação ===");

  if (hoteis.length === 0) {
    console.log("\nNenhum hotel cadastrado.");
    return;
  }

  hoteis.forEach((hotel) => {
    let ocupados = hotel.quartosTotal - hotel.quartosDisponiveis;
    let taxaOcupacao = ((ocupados / hotel.quartosTotal) * 100).toFixed(2);

    console.log(`\n${hotel.nome} - ${hotel.cidade}`);
    console.log(`Quartos ocupados: ${ocupados}/${hotel.quartosTotal}`);
    console.log(`Taxa de ocupação: ${taxaOcupacao}%`);

    if (hotel.avaliacoes.length > 0) {
      let somaNotas = hotel.avaliacoes.reduce((acc, av) => acc + av.nota, 0);
      let mediaAvaliacoes = (somaNotas / hotel.avaliacoes.length).toFixed(2);
      console.log(
        `Avaliação média: ${mediaAvaliacoes}/10 (${hotel.avaliacoes.length} avaliações)`
      );
    }
  });
}

function listarAvaliacoes() {
  console.log("\n=== Avaliações dos Hotéis ===");

  let idHotel = parseInt(readline.question("ID do hotel: "));
  let hotel = hoteis.find((h) => h.id === idHotel);

  if (!hotel) {
    console.log("\nHotel não encontrado!");
    return;
  }

  if (hotel.avaliacoes.length === 0) {
    console.log(`\nO hotel ${hotel.nome} ainda não possui avaliações.`);
    return;
  }

  console.log(`\n--- Avaliações: ${hotel.nome} ---`);
  hotel.avaliacoes.forEach((av, index) => {
    console.log(`\nAvaliação ${index + 1}:`);
    console.log(`Cliente: ${av.cliente}`);
    console.log(`Nota: ${av.nota}/10`);
    if (av.comentario) {
      console.log(`Comentário: ${av.comentario}`);
    }
  });

  let somaNotas = hotel.avaliacoes.reduce((acc, av) => acc + av.nota, 0);
  let media = (somaNotas / hotel.avaliacoes.length).toFixed(2);
  console.log(`\nMédia geral: ${media}/10`);
}

function menu() {
  console.log("    SISTEMA DE RESERVA DE HOTÉIS");
  console.log("1 - Adicionar hotel");
  console.log("2 - Buscar hotéis por cidade");
  console.log("3 - Fazer reserva");
  console.log("4 - Cancelar reserva");
  console.log("5 - Listar reservas");
  console.log("6 - Check-in");
  console.log("7 - Check-out");
  console.log("8 - Relatório de ocupação");
  console.log("9 - Ver avaliações de hotel");
  console.log("0 - Sair");

  return readline.question("Escolha uma opcao: ");
}
function iniciar() {
  console.log("Bem-vindo ao Sistema de Reserva de Hotéis!");

  let continuar = true;

  while (continuar) {
    let opcao = menu();

    switch (opcao) {
      case "1":
        adicionarHotel();
        break;
      case "2":
        buscarHoteisPorCidade();
        break;
      case "3":
        fazerReserva();
        break;
      case "4":
        cancelarReserva();
        break;
      case "5":
        listarReservas();
        break;
      case "6":
        checkIn();
        break;
      case "7":
        checkOut();
        break;
      case "8":
        relatorioOcupacao();
        break;
      case "9":
        listarAvaliacoes();
        break;
      case "0":
        console.log("\nObrigado por usar o sistema.");
        continuar = false;
        break;
      default:
        console.log("\nOpção inválida!");
    }
  }
}

iniciar();
