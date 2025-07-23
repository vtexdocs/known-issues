---
title: 'O relatório dos assinantes não mostra corretamente as assinaturas ativas'
id: 4sqvm1v4CbCJLQ3HBBVTmp
status: PUBLISHED
createdAt: 2022-05-27T19:44:57.301Z
updatedAt: 2024-07-01T18:48:23.947Z
publishedAt: 2024-07-01T18:48:23.947Z
firstPublishedAt: 2022-05-27T19:44:57.688Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscribers-report-does-not-show-active-subscriptions-correctly
locale: pt
kiStatus: No Fix
internalReference: 587556
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando exportamos o relatório de assinantes, as informações nas colunas "TotalSubscrições" e "TotalSubscriçõesAtivos" são divergentes em comparação com as informações mostradas no painel de controle.
Isto se deve a algumas assinaturas que foram migradas da v2 para a v3, pois na v2 a arquitetura era diferente, sendo considerada pela SKU, e na v3 é considerada por ordem.



## Simulação


Você pode simular este cenário com uma assinatura que foi migrada da v2 para a v3.

1. Ir para a funcionalidade "**Ordens > Assinaturas > Painéis > Assinantes > Relatório de exportação**";
2. Verifique um e-mail que tenha pelo menos uma assinatura com mais de um SKU;
3. Observe que o número de assinaturas no relatório será o mesmo que o número de SKUs, não as assinaturas.



## Workaround


Não há nenhuma solução disponível.

