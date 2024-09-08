const prompt = require('prompt-sync');
const readline = prompt();

// Função que retorna a mensagem de acordo com a presença do número na sequência de Fibonacci
const retornarMensagem = (n, listaFibonacciResultante) => {
  const posicao = listaFibonacciResultante.findIndex((elemento) => elemento === n);
  
  const mensagemPositiva = `O numero informado ${n} está na sequência de Fibonacci, com o índice:
    ${posicao}, ou seja, na ${posicao + 1}ª posição da sequência, em ${listaFibonacciResultante}.\n`;
  
  const mensagemNegativa = `O número informado ${n} não está na sequência de Fibonacci,
    mas a sequência que inclui o maior mais próximo é:
    ${listaFibonacciResultante}.\n`;
  
  if (posicao !== -1) {
    return mensagemPositiva;
  }
  
  return mensagemNegativa;
}

// Calcular fibonacci até um índice n
const fibonacci = (n, primeiro = 0, segundo = 1) => {
  let listaFibonacciResultante = [primeiro, segundo];
  let indiceUltimo = listaFibonacciResultante.length - 1;
  let ultimo = listaFibonacciResultante[listaFibonacciResultante.length - 1];
  let proximo = segundo + primeiro;
  
  if (n === primeiro) {
    return retornarMensagem(0, listaFibonacciResultante);
  }
  
  if (n === segundo) {
    return retornarMensagem(1, listaFibonacciResultante);
  }

  while (ultimo <= n) {    
    proximo = ultimo + listaFibonacciResultante[indiceUltimo - 1];
    listaFibonacciResultante.push(proximo);
    ultimo = proximo;
    indiceUltimo += 1;
  }  

  return retornarMensagem(n, listaFibonacciResultante);
}

let n = 1;

while (!isNaN(n)) {
  n = readline('Digite um número para verificar se está na sequência de Fibonacci: (Qualquer letra para sair)');
  const numberToTest = Number(n);
  console.log('n:', n);
  if (isNaN(n)) {
    console.log('Saindo...');
    return;
  }
  console.log(fibonacci(numberToTest));
}