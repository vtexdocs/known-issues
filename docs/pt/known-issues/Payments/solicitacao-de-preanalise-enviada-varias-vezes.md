---
title: 'Solicitação de pré-análise enviada várias vezes'
slug: solicitacao-de-preanalise-enviada-varias-vezes
status: PUBLISHED
createdAt: 2025-10-16T19:22:32.806Z
updatedAt: 2025-10-16T19:22:32.806Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: preanalysis-request-sent-multiple-times
locale: pt
kiStatus: Backlog
internalReference: 1256754
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O gateway de pagamento da VTEX envia a mesma solicitação de pré-análise para o provedor antifraude uma segunda vez, mesmo quando a primeira chamada foi bem-sucedida.

Não se espera que o gateway envie várias solicitações de pré-análise, pois isso pode fazer com que o processo de análise de fraude demore mais do que o necessário. No entanto, de acordo com nosso protocolo, o provedor antifraude deve estar preparado para lidar com várias solicitações.

A solicitação duplicada pode ser vista nos registros de interações:
`Conta do proprietário do provedor é solicitação HTTP POST para /pre-analysis`
## Simulação


Não é possível simular


## Workaround


N/A



