let dia = prompt('Qual é o dia da semana?');
let semana = dia == 'sabado' ? alert('Bom fim de semana!') : alert('Boa semana!');

let numero = prompt('Digite um numero!');
let positivoNegativo = numero >= 1 ? alert('Positivo!') : alert('Negativo!');

let pontos = prompt('Digite seus pontos!');
let vencer = pontos >= 100 ? alert('Parabéns, você venceu!') : alert('Tente novamente para ganhar.');

let nome = prompt('Olá digite seu nome');
let saldo = 1500;
let conta = saldo >= 1 
  ? alert(`${nome} Seu saldo atual é R$ ${saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}`) 
  : alert(`${nome} Você não tem saldo atual R$ ${saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}`);

nome = prompt('Olá digite seu nome');
alert(`Boas-vindas ${nome}`)