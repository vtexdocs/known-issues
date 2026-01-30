---
title: 'Valor divergente do pedido entre o marketplace e o vendedor ao usar substituição de preço e promoções'
slug: valor-divergente-do-pedido-entre-o-marketplace-e-o-vendedor-ao-usar-substituicao-de-preco-e-promocoes
status: PUBLISHED
createdAt: 2026-01-30T19:41:28.284Z
updatedAt: 2026-01-30T19:41:28.284Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: divergent-order-value-between-marketplace-and-seller-while-using-price-override-and-promotions
locale: pt
kiStatus: Backlog
internalReference: 756629
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

 Quando o preço do item do vendedor _menos_ os descontos do mercado tem um valor negativo, ele não pode ser totalmente aplicado ao preço do item no nível do vendedor (eles não podem ter um preço negativo), então será considerado como zero e afetará os cálculos relacionados ao valor adicional e ao valor total do pedido no pedido de atendimento.

Isso acontece quando o marketplace está usando o recurso de substituição do preço do vendedor, gerando valores mais altos do que a própria conta do vendedor e, em seguida, combinando-o com uma promoção que aplica um desconto maior do que o preço original do vendedor.
## Simulação


## Workaround

