---
title: 'Erro causado pela substituição do TOKEN no conector PayPal antigo para o status de pagamento pendente'
slug: erro-causado-pela-substituicao-do-token-no-conector-paypal-antigo-para-o-status-de-pagamento-pendente
status: PUBLISHED
createdAt: 2020-11-21T05:11:02.000Z
updatedAt: 2023-06-13T20:01:14.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-triggered-by-overridden-token-in-legacy-paypal-connector-for-pending-payment-status
locale: pt
kiStatus: Backlog
internalReference: 308214
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em nosso conector PayPal legado, enfrentamos um problema relacionado à substituição do campo `TOKEN` por `PAYMENTINFO_0_TRANSACTIONID`. O problema surge quando o provedor envia um status de pagamento como “pendente”. Consequentemente, o TOKEN é substituído pela implementação do nosso conector, levando a um erro acionado pelo PayPal durante solicitações subsequentes. Como resultado, a transação fica bloqueada com uma mensagem de “token inválido”.

## Simulação

Este problema só pode ser reproduzido em casos assíncronos.

## Workaround

N/A