---
title: 'Shopee Divergência no valor do frete em pedidos de logística do vendedor'
slug: shopee-divergencia-no-valor-do-frete-em-pedidos-de-logistica-do-vendedor
status: PUBLISHED
createdAt: 2026-04-10T22:08:20.000Z
updatedAt: 2026-06-30T21:38:19.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-freight-value-mismatch-on-seller-logistics-orders
locale: pt
kiStatus: Fixed
internalReference: 1391278
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em pedidos de logística do vendedor, quando a Shopee cobre o custo do frete (campanha de frete grátis), o valor do frete se torna zero. No entanto, isso não está sendo reconhecido corretamente pela VTEX, então o valor do frete acaba incorreto na loja.

O valor total do pedido não parece ser afetado, já que o campo utilizado já inclui o desconto no frete. Quando combinado com o valor do frete da loja, o total final ainda corresponde.

## Simulação

1. Crie ou identifique um pedido de logística do vendedor na Shopee onde o marketplace cobre o custo do frete (frete = 0 – campanha de frete grátis).

2. Integre o pedido à VTEX.

3. Verifique o valor do frete na VTEX.

4. Observe que o valor do frete não reflete o valor esperado (deveria ser zero, mas não é).

## Workaround

N/A.