console.log('Boas-vindas.');

let nome = 'Junior';
console.log(`Olá, ${nome}!`);
alert(`Olá, ${nome}!`);

let pergunta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(pergunta);

let valor1 = 5;
let valor2 = 2;
let resultado1 = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado1}.`);

let valor3 = 5;
let valor4 = 2;
let resultado2 = valor1 - valor2;
console.log(`A subtração do ${valor3} e ${valor4} é igual a ${resultado2}.`);

let idade = prompt('Coloque sua idade!');
let MaiorMenor = idade >= 18 ? console.log('Maior de idade') : console.log('Menor de idade');

let numero = prompt('Digite um numero!');
if (numero >= 1) {
  console.log('Positivo');
} else if (numero <= -1) {
  console.log('Negativo');
} else {
  console.log('Zero');
}

let crescente = 1;
while (crescente <= 10) {
  console.log(crescente);
  crescente++;
}

let nota = 10;
if (nota >= 7) {
  console.log('Aprovado');
} else {
  console.log('Reprovado');
}

let NumeroRamdom = Math.random();
console.log(NumeroRamdom);

let UmADez = Math.floor(Math.random() * 10) + 1;
console.log(UmADez);

let UmAMil = Math.floor(Math.random() * 1000) + 1;
console.log(UmAMil);