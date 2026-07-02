---
title: 'Para dívidas com a CieloV3, não estamos respeitando o status da resposta.'
slug: para-dividas-com-a-cielov3-nao-estamos-respeitando-o-status-da-resposta
status: PUBLISHED
createdAt: 2021-05-11T23:59:02.000Z
updatedAt: 2026-07-02T15:58:20.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: for-debt-with-cielov3-we-are-not-respecting-the-status-of-the-response
locale: pt
kiStatus: No Fix
internalReference: 367284
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma transação de débito é processada pelo CieloV3 e o Cielo retorna o status "aguardando resposta" na segunda chamada de autorização, o VTEX interpreta isso incorretamente como uma recusa e cancela a transação. Como resultado, o pagamento do cliente é rejeitado, mesmo que ainda esteja em processamento no lado do Cielo.

## Simulação

Não foi possível reproduzir sob demanda. O comportamento depende do Cielo retornar um status intermediário específico durante o fluxo de autorização, o qual não pode ser forçado externamente.

## Workaround

Não disponível.