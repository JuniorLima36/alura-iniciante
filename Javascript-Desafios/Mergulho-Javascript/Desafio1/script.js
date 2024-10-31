alert('Boas vindas ao nosso site!');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro! Preencha todos os campos';

alert(mensagemDeErro);
nome = prompt('Nome do usuário: ')
idade = prompt('Digite sua idade: ')

let cnh = idade >= 18 ? alert('Pode tirar a habilitação!') : alert('Não pode tirar a habilitação!');