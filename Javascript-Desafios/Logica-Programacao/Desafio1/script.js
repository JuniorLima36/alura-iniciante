const titulo = document.querySelector('h1');
titulo.textContent = 'Hora do desafio';

function clicado() {
  return console.log('O botão foi clicado');
}

function alerta() {
  return alert('Eu amo JS');
}

function cidade() {
  let cidade = prompt('Digite o nome de uma cidade do Brasil.');
  return alert(`Estive em ${cidade} e lembrei de você.`);
}

function soma() {
  let valor1 = parseFloat(prompt('Digite um numero.'));
  let valor2 = parseFloat(prompt('Digite um numero.'));
  let somar = valor1 + valor2;
  return alert(`a soma de ${valor1} + ${valor2} = ${somar}`)
}