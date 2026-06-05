---
title: 'Erro ao liquidar transação com 2 cartões - MercadoPagoV1'
slug: erro-ao-liquidar-transacao-com-2-cartoes-mercadopagov1
status: PUBLISHED
createdAt: 2021-07-14T21:48:28.000Z
updatedAt: 2026-06-05T21:03:44.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-when-settling-transaction-with-2-cards-mercadopagov1
locale: pt
kiStatus: No Fix
internalReference: 395943
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma transação é processada através do conector **MercadoPagoV1** utilizando **dois cartões de crédito**, a solicitação de liquidação falha porque a VTEX chama incorretamente a API do MercadoPago ao **concatenar ambos os TIDs** em uma única solicitação, em vez de realizar chamadas individuais para cada pagamento.
**Comportamento atual (incorreto):**

 GET https://api.mercadopago.com/v1/payments/15313374757_15313364925

**Comportamento esperado:**

 GET https://api.mercadopago.com/v1/payments/15313364925GET https://api.mercadopago.com/v1/payments/15313374757

Como resultado, a API do MercadoPago retorna uma resposta `404 Not Found`, fazendo com que a liquidação falhe.

## Simulação

Não foi possível reproduzir o problema em um ambiente controlado. A falha ocorre em produção em transações que utilizam o conector **MercadoPagoV1**, nas quais o cliente divide o pagamento entre **dois cartões de crédito**.

## Workaround

Não há solução alternativa disponível.