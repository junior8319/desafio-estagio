// 2) Calcular fibonacci até um índice n
const fibonacci = (n, primeiro = 0, segundo = 1) => {
  let listaFibonacciResultante = [primeiro, segundo];
  let indiceUltimo = listaFibonacciResultante.length - 1;
  let ultimo = listaFibonacciResultante[listaFibonacciResultante.length - 1];
  let proximo = segundo + primeiro;
  
  if (n === primeiro) {
    controle += 1;
    return mensagemPositiva;
  }

  if (n === segundo) {
    controle += 1;
    return mensagemPositiva;
  }

  while (ultimo <= n) {    
    proximo = ultimo + listaFibonacciResultante[indiceUltimo - 1];
    listaFibonacciResultante.push(proximo);
    ultimo = proximo;
    indiceUltimo += 1;
  }

  const posicao = listaFibonacciResultante.findIndex((elemento) => elemento === n);

  const mensagemPositiva = `O numero informado ${n} está na sequência de Fibonacci, com o índice:
    ${posicao}, ou seja, na ${posicao + 1}ª posição da sequência, em ${listaFibonacciResultante}.`;
  
  const mensagemNegativa = `O número informado ${n} não está na sequência de Fibonacci,
    mas a sequência que inclui o maior mais próximo é:
    ${listaFibonacciResultante}.`;

  if (posicao !== -1) {
    return mensagemPositiva;
  }

  return mensagemNegativa;
}

console.log(fibonacci(2));
console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(8));
console.log(fibonacci(10));
console.log(fibonacci(15));
console.log(fibonacci(21));
