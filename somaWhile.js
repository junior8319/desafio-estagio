// 1) Inicializar INDICE = 13, SOMA = 0 E K=0
const INDICE = 13;
let soma = 0;
let k = 0;

/* Enquanto k < INDICE, faça:
  *k = k + 1;
  *soma = soma + k;
*/
while(k < INDICE) {
  k += 1;
  soma += k;
}

// Imprimir SOMA no console
console.log("RESULTADO FINAL DA SOMA: ", soma);

