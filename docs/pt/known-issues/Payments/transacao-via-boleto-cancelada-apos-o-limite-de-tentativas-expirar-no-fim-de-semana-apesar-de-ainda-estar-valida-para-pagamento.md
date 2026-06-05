---
title: 'Transação via boleto cancelada após o limite de tentativas expirar no fim de semana, apesar de ainda estar válida para pagamento'
slug: transacao-via-boleto-cancelada-apos-o-limite-de-tentativas-expirar-no-fim-de-semana-apesar-de-ainda-estar-valida-para-pagamento
status: PUBLISHED
createdAt: 2021-05-27T21:52:23.000Z
updatedAt: 2026-06-05T20:31:21.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: boleto-transaction-cancelled-after-retry-limit-expires-over-weekend-despite-still-being-valid-for-payment
locale: pt
kiStatus: No Fix
internalReference: 374288
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um **boleto bancário** é criado com data de vencimento em um **fim de semana**, a transação pode ser **cancelada antes que o cliente tenha a chance de pagá-la**, mesmo que o boleto ainda seja válido para pagamento no próximo dia útil.
Isso ocorre porque o sistema está configurado para verificar o status do pagamento (via **CieloV3** ou **BrasPag**) a cada 30 minutos durante 7 dias consecutivos — totalizando **336 tentativas**. Se esses 7 dias expirarem em um fim de semana, o limite de tentativas é atingido e a transação é cancelada. No entanto, o boleto permanece válido e o cliente ainda pode pagá-lo na segunda-feira, fazendo com que o pagamento seja aceito pelo banco enquanto o pedido já está cancelado no lado da VTEX.

## Simulação

Para reproduzir o problema, é necessário criar um boleto na segunda-feira com prazo de pagamento que expire no sábado ou domingo, de modo que as 336 tentativas de repetição sejam esgotadas no fim de semana antes do próximo dia útil.

## Workaround

Não há solução alternativa disponível.