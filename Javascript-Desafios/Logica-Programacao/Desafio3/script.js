function imc() {
  let altura = parseFloat(prompt('Digite sua altura.'));
  let peso = parseFloat(prompt('Digite seu peso.'));
  let imc = peso / (altura * altura);
  return console.log(`O seu IMC é ${imc.toFixed(2)}`);
}

function fatorial() {
  let numero = parseInt(prompt('Digite um numero.'));
  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }
  return console.log(`Valor fatorial do numero ${fatorial}`);
}

function converter() {
  let dolar = parseFloat(prompt('Digite a quantia'));
  let cotacao = 4.80;
  let convert = dolar * cotacao;
  return console.log(`Seu dinheiro convertido para Reais ${convert}`);
}

function area() {
  let altura = parseFloat(prompt('Digite a altura.'));
  let largura = parseFloat(prompt('Digite a largura.'));
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  return console.log(`Área: ${area.toFixed(2)} metros quadrados \nPerímetro: ${perimetro.toFixed(2)} metros`);
}

function areaCirculo() {
  let raio = parseFloat(prompt('Digite o raio.'));
  let pi = 3.14;
  let area = pi * (raio * raio);
  let perimetro = 2 * pi * raio;
  return console.log(`Área: ${area.toFixed(2)} metros quadrados \nPerímetro: ${perimetro.toFixed(2)} metros`);
}

function taboada() {
  let numero = parseInt(prompt('Digite um numero.'));
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}