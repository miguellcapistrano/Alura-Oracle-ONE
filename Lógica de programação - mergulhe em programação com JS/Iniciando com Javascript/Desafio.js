// mostrar a mensagem de boas vindas
alert("Boas vindas ao nosso site!");

// declarando as variáveis
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

// alerta com mensagem de erro
alert("Erro! Preencha todos os campos.");

// variável com mensagem de erro  e um alerta com essa variável
let mensagemDeErro = "Erro! Preencha todos os campos."; 
alert(mensagemDeErro);

// prompt na variável "nome" com a mensagem de perguntar o usuário
nome = prompt("Qual o seu nome de usuário?");

// prompt na variável "idade" com a mensagem de perguntar a idade
idade = prompt("Qual a sua idade?");

if (idade >= 18){
    alert("Pode tirar a habilitação!");
}