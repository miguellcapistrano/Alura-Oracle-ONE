// 1
let perguntaDoDia = prompt ('Qual é o dia da semana?');

if (perguntaDoDia.toLowerCase() === 'Sábado' || perguntaDoDia.toLowerCase){
    console.log('Bom final de semana');
} else {
    console.log('Boa semana!');
}

// 2
let numero = prompt('Digite um número qualquer');

if (numero >= 1){
    alert ('Seu número é positivo.')
} else if ( numero < 0){
    alert ('Seu número é negativo.')
}

alert('Bem vindos ao jogo do número secreto');
let numeroSecreto = 6;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

if (chute === numeroSecreto){
    alert('Parabéns! Você acertou o número secreto' + numeroSecreto);
} else{
    alert('Você errou :(');
    prompt('Tente novamente');
}

// 3
let pontosDeJogo = 101

if (pontosDeJogo >= 100){
    console.log ('Parabéns! Você venceu!');
} else {
    console.log ('Tente novamente para ganhar.');
}

// 4

let saldoDaConta = 3500;

console.log('Seu saldo é: ' + saldoDaConta);

// 5

let nomeDeUsuario = '';

prompt ('Insira seu nome de usuário');
alert ('Seja bem vindo' + nomeDeUsuario);