valores_por_estado = {
  'SP': 67836.43,
  'RJ': 36678.66,
  'MG': 29229.88,
  'ES': 27165.48,
  'Outros': 19849.53
}

def calcularTotalMensal():
  total = 0
  for estado, valor in valores_por_estado.items():
    total += valor
  return round(total, 2)

def calcularParticipacaoPorEstado():
  total = calcularTotalMensal()
  participacao_por_estado = {}
  for estado, valor in valores_por_estado.items():
    participacao_por_estado[estado] = round((valor / total) * 100, 2)
  return participacao_por_estado

def aplicacao():
  print(f'Total mensal: R$ {calcularTotalMensal()}')
  print('Participação percentual por estado:')
  for estado, participacao in calcularParticipacaoPorEstado().items():
    print(f'{estado}: {participacao}%')
    
aplicacao()