---
title: 'A ausência do campo `minicart.buyer.id` faz com que o sistema antifraude cancele as transações'
slug: a-ausencia-do-campo-minicartbuyerid-faz-com-que-o-sistema-antifraude-cancele-as-transacoes
status: PUBLISHED
createdAt: 2022-01-31T18:18:34.000Z
updatedAt: 2023-05-23T17:10:00.000Z
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

Tem havido casos em que determinadas transações estão sendo recusadas durante a análise antifraude devido ao valor nulo no campo `minicart.buyer.id`. Portanto, espera-se que o `minicart.buyer.id` seja enviado do checkout para o gateway por meio de `sendAdditionalData`. No entanto, de acordo com a arquitetura atual do checkout, não há exigência específica para fornecer esse campo em `sendAdditionalData`, e sua definição pode ou não estar disponível em uma etapa posterior.

## Simulação

Não é possível reproduzir esse comportamento, uma vez que ele é intermitente.

## Workaround

É possível enviar os dados adicionais posteriormente por meio de nossa API:
https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/additional-data