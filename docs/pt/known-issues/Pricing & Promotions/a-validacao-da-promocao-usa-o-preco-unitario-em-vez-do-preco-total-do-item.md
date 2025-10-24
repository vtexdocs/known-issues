---
title: 'A validação da promoção usa o preço unitário em vez do preço total do item'
slug: a-validacao-da-promocao-usa-o-preco-unitario-em-vez-do-preco-total-do-item
status: PUBLISHED
createdAt: 2025-09-18T20:20:36.075Z
updatedAt: 2025-09-18T20:20:36.075Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-validation-uses-unit-price-instead-of-total-item-price
locale: pt
kiStatus: Backlog
internalReference: 1081841
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


As promoções que dependem de um valor mínimo ou máximo podem falhar quando aplicadas a itens com um multiplicador de unidades. O sistema avalia o preço unitário ajustado (preço base × multiplicador) em vez do valor total do item, o que leva a inconsistências.
## Simulação



1. Configure uma promoção de frete grátis com um limite mínimo de valor de carrinho.
2. Adicione um produto ao carrinho cujo preço seja baseado em um multiplicador de unidades (por exemplo, preço por quilograma) em vez de um preço fixo.
3. Certifique-se de que o valor total dos itens no carrinho exceda o valor mínimo necessário para que a promoção seja aplicada. Entretanto, o valor real do item, considerando o multiplicador de unidades, deve fazer com que o valor total do carrinho seja inferior ao requisito mínimo da promoção.
4. Verifique se a promoção não se aplica quando o valor total do carrinho excede o mínimo exigido devido ao multiplicador de unidades do item.


## Workaround


Atualmente, não há nenhuma solução alternativa disponível para esse problema.



