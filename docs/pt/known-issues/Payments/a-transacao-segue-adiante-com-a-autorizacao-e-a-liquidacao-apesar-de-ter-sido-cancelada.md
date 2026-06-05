---
title: 'A transação segue adiante com a autorização e a liquidação, apesar de ter sido cancelada'
slug: a-transacao-segue-adiante-com-a-autorizacao-e-a-liquidacao-apesar-de-ter-sido-cancelada
status: PUBLISHED
createdAt: 2026-06-05T18:29:03.000Z
updatedAt: 2026-06-05T18:29:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-proceeds-through-authorization-and-settlement-despite-being-cancelled
locale: pt
kiStatus: Backlog
internalReference: 1417330
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em casos em que duas subencomendas são criadas na mesma sessão de checkout (mesmo grupo de pedidos), uma transação que já tenha sido **cancelada** pode, inesperadamente, passar por todo o fluxo de autorização, antifraude e liquidação — resultando em uma **cobrança indesejada ao cliente**.
Isso ocorre devido a uma condição de corrida entre as solicitações de cancelamento e autorização. Quando ambas são acionadas quase simultaneamente, o fluxo de autorização pode operar com base em um estado de transação desatualizado, ignorando o status `Cancelado` e sendo concluído como se o pedido ainda fosse válido.
**Comportamento esperado:** Assim que uma transação atinge o status `Cancelado`, nenhuma autorização ou liquidação adicional deve ser permitida.
**Comportamento observado:** A transação passa de `Cancelado` → `Autorizando` → `Liquidado`, gerando uma cobrança que não deveria ter ocorrido.

## Simulação

Não foi possível reproduzir o problema em um ambiente controlado. A falha ocorre de forma intermitente em produção e é mais provável que se manifeste em **cenários de marketplace com pedidos divididos**, onde o cancelamento e a autorização podem ser acionados quase simultaneamente por diferentes serviços dentro da mesma sessão de grupo de pedidos.

## Workaround

Não há solução alternativa disponível.