const inverterString = (stringRecebida) => {
  let stringInvertida = '';

  for (let indice = stringRecebida.length - 1; indice >= 0; indice -= 1) {
    stringInvertida += stringRecebida[indice];
  }

  console.log('A palavra/frase: ', stringRecebida);
  console.log('Invertida fica: ', stringInvertida);
};

inverterString('teste');
inverterString('ovo');
inverterString('amor');
inverterString('socorram-me, subi no onibus em marrocos');