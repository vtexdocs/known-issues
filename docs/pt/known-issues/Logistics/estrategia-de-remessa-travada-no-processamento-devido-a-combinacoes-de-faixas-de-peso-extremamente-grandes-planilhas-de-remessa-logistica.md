---
title: 'Estratégia de remessa travada no processamento devido a combinações de faixas de peso extremamente grandes (planilhas de remessa logística)'
slug: estrategia-de-remessa-travada-no-processamento-devido-a-combinacoes-de-faixas-de-peso-extremamente-grandes-planilhas-de-remessa-logistica
status: PUBLISHED
createdAt: 2025-10-31T16:42:33.564Z
updatedAt: 2025-10-31T16:42:33.564Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: shipping-strategy-stuck-in-processing-due-to-extremely-large-weightrange-combinations-logistics-shipping-spreadsheets
locale: pt
kiStatus: Backlog
internalReference: 1304893
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


As políticas de remessa carregadas por meio da planilha de logística podem permanecer em processamento indefinidamente quando o arquivo contém uma grande combinação de faixas de peso por faixa de CEP, resultando em um número excessivo de combinações de estratégias de remessa.

O sintoma visível é que o status da estratégia de envio nunca muda de Processando após a importação da planilha.
As contas com tabelas de envio com milhares de faixas de peso por faixa de CEP são afetadas, mesmo que o total de linhas da planilha seja grande, mas estruturalmente repetitivo.


## Simulação


## Workaround

