import json
from datetime import date, timedelta
import random

def gerar_relatorio_faturamento(inicio, fim):
    dados = []
    data_atual = inicio
    while data_atual <= fim:
        if data_atual.weekday() <= 5:
            valor = round(random.uniform(100, 150000), 2)
        else :
            valor = 0
        dados.append({"data": data_atual.isoformat(), "valorTotal": valor})
        data_atual += timedelta(days=1)
    return json.dumps({"relatorioFaturamento": dados})

inicio = date(2024, 1, 1)
fim = date(2024, 8, 31)
json_relatorio = gerar_relatorio_faturamento(inicio, fim)
print(json_relatorio)

with open("relatorio_faturamento.json", "w") as arquivo:
    arquivo.write(json_relatorio)
