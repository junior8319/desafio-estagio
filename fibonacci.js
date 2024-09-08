const prompt = require('prompt-sync');
const readline = prompt();

// 2) Calcular fibonacci até um índice n
const fibonacci = (n, primeiro = 0, segundo = 1) => {
  let listaFibonacciResultante = [primeiro, segundo];
  let anterior = segundo;
  let proximo = segundo + primeiro;
  const posicao = listaFibonacciResultante.findIndex((elemento) => elemento === n);

  if (n === primeiro) {
    return `O numero informado ${n} está na sequência de Fibonacci, com o índice:
    ${posicao}, ou seja, na posição ${posicao + 1} da sequência, em ${listaFibonacciResultante}.`;
  }

  if (n === segundo) {
    return `O numero informado ${n} está na sequência de Fibonacci, com o índice:
    ${posicao}, ou seja, na posição ${posicao + 1} da sequência, em ${listaFibonacciResultante}.`;
  }

  for (let indice = 2; indice < n; indice += 1) {
    listaFibonacciResultante.push(proximo);
    anterior = proximo;
    proximo = proximo + listaFibonacciResultante[indice - 1];
  }


  if (posicao !== -1) {
    return `O numero informado ${n} está na sequência de Fibonacci, com o índice:
      ${posicao}, ou seja, na posição ${posicao + 1} da sequência, em ${listaFibonacciResultante}.`;
  }

  return `O número informado ${n} não está na sequência de Fibonacci até a posição ${n},
    mas a sequência com ${n} números é:
    ${listaFibonacciResultante}.`;
}

let n = 0;

while (!isNaN(n)) {
  n = readline('Digite um número para verificar se está na sequência de Fibonacci: (Qualquer letra para sair) \n');
  if (isNaN(n)) {
    console.log('Saindo...');
    return;
  }
  console.log(fibonacci(n));
}