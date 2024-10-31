function exibir() {
  return console.log('Olá, mundo!');
}

function nome() {
  let nome = prompt('Digite seu nome!');
  return console.log(`Olá, ${nome}`);
}

function dobro() {
  let numero = parseInt(prompt('Digite um numero.'));
  let dobro = numero * 2;
  return console.log(dobro);
}

function media() {
  let valor1 = parseInt(prompt('Digite um numero.'));
  let valor2 = parseInt(prompt('Digite um numero.'));
  let valor3 = parseInt(prompt('Digite um numero.'));
  let media = (valor1 + valor2 + valor3) / 3
  return console.log(`A media dos numeros é ${media}`);
}

function maior() {
  let valor1 = parseInt(prompt('Digite um numero.'));
  let valor2 = parseInt(prompt('Digite um numero.'));
  return valor1 >= valor2 ? console.log(valor1) : console.log(valor2);
}

function multi() {
  let numero = parseInt(prompt('Digite um numero.'));
  let multi = numero * numero;
  return console.log(`Numero multiplicado = ${multi}`);
}