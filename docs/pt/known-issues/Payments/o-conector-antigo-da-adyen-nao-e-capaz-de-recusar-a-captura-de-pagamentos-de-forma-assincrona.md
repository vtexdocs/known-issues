---
title: 'O conector antigo da Adyen não é capaz de recusar a captura de pagamentos de forma assíncrona'
slug: o-conector-antigo-da-adyen-nao-e-capaz-de-recusar-a-captura-de-pagamentos-de-forma-assincrona
status: PUBLISHED
createdAt: 2024-02-02T18:15:40.000Z
updatedAt: 2026-06-05T20:12:58.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-legacy-adyen-connector-is-unable-of-asynchronously-denying-payment-capture
locale: pt
kiStatus: No Fix
internalReference: 976005
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O conector Adyen legado captura o pagamento sempre que recebe o campo `"response":"[capture-received]"`. No entanto, esse evento indica apenas que a captura foi recebida e será processada de forma assíncrona. Esse comportamento impede que as capturas sejam recusadas, pois a notificação assíncrona encontra um pagamento já capturado e não o reembolsa.

## Simulação

Depende da resposta de captura da Adyen; portanto, um pagamento precisa ser capturado para receber uma notificação de falha na captura.

## Workaround

N/A