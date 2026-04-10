---
title: 'Shopee Discrepância no valor do frete em pedidos de logística do vendedor'
slug: shopee-discrepancia-no-valor-do-frete-em-pedidos-de-logistica-do-vendedor
status: PUBLISHED
createdAt: 2026-04-10T19:08:48.572Z
updatedAt: 2026-04-10T19:08:48.572Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-freight-value-mismatch-on-seller-logistics-orders
locale: pt
kiStatus: Backlog
internalReference: 1391278
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Nos pedidos com logística do vendedor, quando o Shopee arca com os custos de envio (campanha de frete grátis), o valor do frete passa a ser zero. No entanto, isso não está sendo reconhecido corretamente pelo VTEX, de modo que o valor do frete acaba ficando incorreto na loja.
O valor total do pedido não parece ser afetado, já que o campo utilizado já inclui o desconto de frete. Quando somado ao valor do frete da loja, o total final continua batendo.

## Simulação

1. Crie ou identifique um pedido de logística do vendedor no Shopee em que o marketplace cubra o custo de envio (frete = 0 – campanha de frete grátis).
2. Deixe o pedido ser integrado ao VTEX.
3. Verifique o valor do frete no VTEX.
4. Observe que o valor do frete não reflete o valor esperado (deveria ser zero, mas não é).

## Workaround

N/A.