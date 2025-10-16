---
title: Desconto nominal + Multiplicador de unidades pode gerar valores negativos
slug: desconto-nominal-multiplicador-de-unidades-pode-gerar-valores-negativos
status: PUBLISHED
createdAt: 2025-10-16T19:52:15.600Z
updatedAt: 2025-10-16T19:52:15.600Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: nominal-discount-unit-multipler-may-generate-negative-values
locale: pt
kiStatus: Backlog
internalReference: 867838
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao usar um desconto do tipo "valor nominal", se houver vários valores afetados por um mesmo desconto no mesmo carrinho, esse desconto será distribuído proporcionalmente entre os itens.

Por exemplo, digamos que eu tenha "um desconto nominal de US$ 50" em um pedido que se aplica a todos os itens do meu carrinho, que é composto pelos seguintes itens e preços originais:

- Item A, custa US$ 100 --> com um multiplicador de 0,01 unidade
- 2x Item B, custa US$ 200


---> Total do pedido (sem o desconto) = $500

O desconto de US$ 100 será distribuído de acordo com o preço original dos itens, ou seja:

A --> 100/500 --> -$50*1/5 = -$10
B --> 200/500 --> -$50*2/5 = -$20
B --> 200/500 --> -$50*2/5 = -$20

Entretanto, o preço do item A é, na verdade, 100*0,01 devido ao seu multiplicador unitário, portanto, o cálculo final do preço no pedido será: $1-$50 = -$49, que é um preço negativo.

Embora isso não afete o cálculo do preço final do pedido (porque o preço deduzido do desconto ainda será de -US$ 20), isso pode afetar as integrações de ERP.


## Simulação


Crie um pedido no qual haja mais de 2 itens, um com um multiplicador de unidade de valor < 1 (idealmente um valor muito pequeno, como 0,01) e outro(s) sem um multiplicador de unidade.

Em seguida, crie uma promoção de desconto nominal válida para todos os itens do carrinho.

O desconto será distribuído considerando o preço original do item com o multiplicador de unidade e possivelmente resultará em um preço negativ
## Workaround


Usar outros tipos de promoção para distribuir o desconto.



