---
title: 'O desconto no frete foi descartado devido ao arredondamento em promoções cumulativas.'
slug: o-desconto-no-frete-foi-descartado-devido-ao-arredondamento-em-promocoes-cumulativas
status: PUBLISHED
createdAt: 2026-10-07T22:47:33.000Z
updatedAt: 2026-10-07T22:48:21.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: shipping-discount-discarded-due-to-rounding-in-cumulative-promotions
locale: pt
kiStatus: Backlog
internalReference: 1471558
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando promoções de frete cumulativas são aplicadas, diferenças de arredondamento podem fazer com que um desconto no frete seja descartado pelo RnB, mesmo quando a promoção deveria conceder o desconto.

Isso pode acontecer quando uma promoção reduz o custo do frete e uma segunda promoção cumulativa aplica um desconto adicional ao valor restante. Se o desconto calculado se tornar maior que o valor restante do frete após o arredondamento, o RnB descarta o desconto.

Por exemplo, se o valor restante do frete for R$ 0,01 e o desconto calculado for arredondado para um valor ligeiramente maior que R$ 0,01, o desconto não será aplicado. Como resultado, o cliente ainda poderá ser cobrado um pequeno valor de frete, mesmo que a combinação das promoções devesse resultar em frete grátis.

## Simulação

1. Configure duas promoções de frete com o modo de competição **cumulativa**.

2. Configure a primeira promoção para reduzir a maior parte do custo do frete.

3. Configure a segunda promoção para aplicar um desconto adicional no frete.

4. Adicione um produto ao carrinho que corresponda a ambas as promoções.
5. Aplique as promoções e verifique os descontos de frete retornados pela RnB.
6. Quando o valor restante do frete for muito pequeno, como R$ 0,01, verifique se o desconto da segunda promoção pode ser descartado devido ao arredondamento.
7. Verifique a etiqueta de preço da promoção e confirme se o desconto descartado é retornado como R$ 0,00.

## Workaround

Sempre que possível, evite combinar promoções de frete cumulativas que resultem em valores de frete restantes muito pequenos.

Como alternativa, configure as promoções para **concorrerem** em vez de se acumularem, dependendo da regra de negócio esperada.