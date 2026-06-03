---
title: 'As promoções de assinatura com periodicidade definida podem não se aplicar a pedidos recorrentes'
slug: as-promocoes-de-assinatura-com-periodicidade-definida-podem-nao-se-aplicar-a-pedidos-recorrentes
status: PUBLISHED
createdAt: 2026-06-03T18:38:50.000Z
updatedAt: 2026-06-03T18:38:50.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: subscription-promotions-with-defined-periodicity-may-not-apply-to-recurring-orders
locale: pt
kiStatus: Backlog
internalReference: 1416445
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As promoções de assinatura com periodicidade específica configurada podem ser aplicadas corretamente ao pedido inicial, mas não são aplicadas aos pedidos recorrentes subsequentes.

## Simulação

1. Crie uma promoção que se aplique a pedidos de assinatura.
2. Configure a promoção com uma periodicidade específica (por exemplo, diária, semanal ou mensal)
3. Crie uma compra por assinatura que atenda aos critérios da promoção.
4. Verifique se o desconto é aplicado no primeiro pedido.
5. Aguarde o próximo pedido recorrente gerado pelo fluxo de assinatura.
6. Verifique se a promoção não está mais sendo aplicada, mesmo que a assinatura ainda atenda aos critérios configurados.

## Workaround

N/A