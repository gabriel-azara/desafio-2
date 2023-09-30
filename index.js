function calcLevel(victories, defeats) {
  const balance = victories - defeats;
  let level;

  //No desafio foi proposto utilizar vitorias, mas ficou sem sentido utilizar vitorias como condição para definir o nivel do jogador, e como na saida teria de mostrar o saldo de vitorias e o nivel, acabei colocando como o saldo as condições para definir os niveis dos jogadores.
  if (balance < 10) {
    level = 'Ferro';
  } else if (balance >= 11 && balance <= 20) {
    level = 'Bronze';
  } else if (balance >= 21 && balance <= 50) {
    level = 'Prata';
  } else if (balance >= 51 && balance <= 80) {
    level = 'Ouro';
  } else if (balance >= 81 && balance <= 90) {
    level = 'Diamante';
  } else if (balance >= 91 && balance <= 100) {
    level = 'Lendário';
  } else if (balance >= 101) {
    level = 'Imortal';
  }

  console.log(`O Herói tem um saldo de ${balance} está no nível de ${level}`);
}

let players = [
  [45, 20],
  [127, 32],
  [89, 5],
  [78, 56],
  [198, 41]
];

for (let i = 0; i < players.length; i++) {
  calcLevel(players[i][0], players[i][1]);
}
