import json

def verificarMenorFaturamentoDiario(faturamento_diario):
  menor_faturamento = faturamento_diario[0]
  for faturamento in faturamento_diario:
      if faturamento['valor'] != 0 and faturamento['valor'] < menor_faturamento['valor']:
          menor_faturamento = faturamento
  return menor_faturamento

def verificarMaiorFaturamentoDiario(faturamento_diario):
    maior_faturamento = faturamento_diario[0]
    for faturamento in faturamento_diario:
        if faturamento['valor'] > maior_faturamento['valor']:
            maior_faturamento = faturamento
    return maior_faturamento

def calcularMediaFaturamentoDiarioTotal(faturamento_diario):
    total_faturamento = 0
    for faturamento in faturamento_diario:
        total_faturamento += faturamento['valor']
    return total_faturamento / len(faturamento_diario)
  
def calcularMediaFaturamentoDiarioSemFinaisDeSemana(faturamento_diario):
    total_faturamento = 0
    dias_uteis = 0
    for faturamento in faturamento_diario:
        if faturamento['valor'] != 0:
            total_faturamento += faturamento['valor']
            dias_uteis += 1
    return total_faturamento / dias_uteis
  
def calcularDiasComFaturamentoSuperiorAMedia(faturamento_diario):
    media = calcularMediaFaturamentoDiarioTotal(faturamento_diario)
    dias_acima_media = 0
    for faturamento in faturamento_diario:
        if faturamento['valor'] > media:
            dias_acima_media += 1
    return dias_acima_media
  
def retornarCalculos(faturamento_diario):
      menor_faturamento = verificarMenorFaturamentoDiario(faturamento_diario)
      maior_faturamento = verificarMaiorFaturamentoDiario(faturamento_diario)
      media_faturamento = calcularMediaFaturamentoDiarioTotal(faturamento_diario)
      dias_acima_media = calcularDiasComFaturamentoSuperiorAMedia(faturamento_diario)
      media_sem_finais_de_semana = calcularMediaFaturamentoDiarioSemFinaisDeSemana(faturamento_diario)
      dias_acima_media_sem_finais_de_semana = calcularDiasComFaturamentoSuperiorAMedia(faturamento_diario)
      return {
        "menorFaturamento": menor_faturamento,
        "maiorFaturamento": maior_faturamento,
        "mediaFaturamento": media_faturamento,
        "diasAcimaMedia": dias_acima_media,
        "mediaFaturamentoSemFinaisDeSemana": media_sem_finais_de_semana,
        "diasAcimaMediaSemFinaisDeSemana": dias_acima_media_sem_finais_de_semana
      }

def main():
  with open("dados.json", "r") as arquivo:
      dados = json.load(arquivo)
  resultados = retornarCalculos(dados)
  
  print(f"Menor faturamento ocorrido: dia {resultados['menorFaturamento']['dia']} - R$ {round(resultados['menorFaturamento']['valor'], 2)}")
  print(f"Maior faturamento ocorrido: dia {resultados['maiorFaturamento']['dia']} - R$ {round(resultados['maiorFaturamento']['valor'], 2)}")
  print(f"Média de faturamento diário (considerando dias sem faturamento): R$ {round(resultados['mediaFaturamento'], 2)}")
  print(f"Dias com faturamento acima da média: {resultados['diasAcimaMedia']}")
  print(f"Média de faturamento diário (sem considerar finais de semana): R$ {round(resultados['mediaFaturamentoSemFinaisDeSemana'], 2)}")
  print(f"Dias com faturamento acima da média (sem considerar finais de semana): {resultados['diasAcimaMediaSemFinaisDeSemana']}")
  
main()