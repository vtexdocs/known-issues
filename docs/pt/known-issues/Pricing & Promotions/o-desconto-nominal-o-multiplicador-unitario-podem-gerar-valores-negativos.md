---
title: 'O desconto nominal + o multiplicador unitário podem gerar valores negativos'
slug: o-desconto-nominal-o-multiplicador-unitario-podem-gerar-valores-negativos
status: PUBLISHED
createdAt: 2023-07-24T19:13:35.000Z
updatedAt: 2023-07-25T16:50:28.000Z
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

Ao utilizar um desconto do tipo “valor nominal”, se houver vários valores afetados por um mesmo desconto no mesmo carrinho, esse desconto é distribuído proporcionalmente entre os itens.

Por exemplo, digamos que eu tenha `um desconto nominal de $50` em um pedido que se aplica a todos os itens do meu carrinho, composto pelos seguintes itens e preços originais:

- Item A, custa $100 --> com um multiplicador de 0,01
- 2 unidades do Item B, custam $200


---> Total do pedido (sem o desconto) = $500

O desconto de $100 será distribuído de acordo com o preço original dos itens, ou seja:

A --> 100/500 --> -$50*1/5 = -$10
B --> 200/500 --> -$50*2/5 = -$20
B --> 200/500 --> -$50*2/5 = -$20

No entanto, o preço do item A é, na verdade, 100*0,01 devido ao seu multiplicador unitário; portanto, o cálculo final do seu preço no pedido será: $1-$50 = -$49, o que é um preço negativo.

Embora isso não afete o cálculo do preço final do pedido (porque o preço deduzido do desconto ainda será -$20), isso pode impactar as integrações de ERP.

## Simulação

Crie um pedido no qual haja  2 ou mais itens, um com um multiplicador unitário de valor < 1 (idealmente um valor muito pequeno, como 0,01) e outro(s) sem multiplicador unitário.

Em seguida, crie uma promoção de desconto nominal válida para todos os itens no carrinho.

O desconto será distribuído considerando o preço original do item com o multiplicador unitário e poderá resultar em um preço negativo

## Workaround

Usar outros tipos de promoção para distribuir o desconto.