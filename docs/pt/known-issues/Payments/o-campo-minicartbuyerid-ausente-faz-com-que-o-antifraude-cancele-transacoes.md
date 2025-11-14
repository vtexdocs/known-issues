---
title: 'O campo minicart.buyer.id ausente faz com que o antifraude cancele transações'
slug: o-campo-minicartbuyerid-ausente-faz-com-que-o-antifraude-cancele-transacoes
status: PUBLISHED
createdAt: 2025-11-14T19:29:27.151Z
updatedAt: 2025-11-14T19:29:27.151Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: missing-minicartbuyerid-field-causes-antifraud-to-cancel-transactions
locale: pt
kiStatus: Backlog
internalReference: 514335
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Houve casos em que determinadas transações estavam sendo recusadas durante a análise antifraude devido ao valor nulo no campo `minicart.buyer.id`. Portanto, espera-se que o `minicart.buyer.id` seja enviado do checkout para o gateway por meio de `sendAdditionalData`. No entanto, de acordo com a arquitetura atual do checkout, não há nenhum requisito específico para fornecer esse campo em `sendAdditionalData`, e sua definição pode ou não estar disponível em um estágio posterior.
## Simulação


Não é possível reproduzir esse comportamento, pois ele é intermitente.


## Workaround


É possível enviar os dados adicionais posteriormente por meio de nossa API:
https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/additional-data



