---
title: 'O status da autorização fica estagnado em transações assíncronas com dois ou mais pagamentos quando o primeiro é cancelado.'
slug: o-status-da-autorizacao-fica-estagnado-em-transacoes-assincronas-com-dois-ou-mais-pagamentos-quando-o-primeiro-e-cancelado
status: PUBLISHED
createdAt: 2023-11-02T15:49:03.000Z
updatedAt: 2023-11-02T19:37:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: authorization-status-is-stuck-for-asynchronous-transactions-with-2-or-more-payments-when-the-first-one-is-canceled
locale: pt
kiStatus: Backlog
internalReference: 929517
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma transação possui vários pagamentos e se torna assíncrona devido ao modo Sherlock ou ao modo Defesa, e se a primeira tentativa de autorização de pagamento falhar, isso pode fazer com que os outros pagamentos fiquem presos no status “Autorizado”. Isso ocorre porque a transação inteira é cancelada, mas nosso worker não reconhece isso e prossegue com uma tentativa de autorização para o segundo pagamento. Consequentemente, o segundo pagamento não pode ser cancelado, pois a transação já foi cancelada e não permite uma solicitação de cancelamento.

## Simulação

Crie uma transação com dois pagamentos, na qual o Modo Defesa ou qualquer outro recurso que torne a transação assíncrona esteja ativado. Em seguida, use um conector de provedor personalizado para recusar a primeira tentativa de autorização de pagamento enquanto aprova a outra.

## Workaround

N/A