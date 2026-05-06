---
title: 'O modo de arredondamento "ceiling/floor" não funciona corretamente em itens com um multiplicador de unidade diferente de 1'
slug: o-modo-de-arredondamento-ceilingfloor-nao-funciona-corretamente-em-itens-com-um-multiplicador-de-unidade-diferente-de-1
status: PUBLISHED
createdAt: 2024-01-18T17:52:51.000Z
updatedAt: 2024-01-18T17:52:51.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: roundingmode-ceilingfloor-not-working-properly-among-items-with-unitmultiplier-other-than-1
locale: pt
kiStatus: Backlog
internalReference: 968349
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

É possível definir, por meio de uma tarefa para a equipe de produtos, a alteração da forma como o valor do desconto é arredondado no carrinho.
Em um cenário em que a conta utiliza um modo de arredondamento por excesso ou por defeito, esse arredondamento não funcionará corretamente com itens cujo multiplicador de unidade seja diferente de 1.

Isso ocorre porque o multiplicador de unidade desse item é 100,0. Quando o RnB arredonda para cima o valor do desconto no checkout, ele arredonda para cima o preço unitário. Assim, ele pega o valor de uma pequena unidade e o arredonda para cima. Em seguida, ele pega o desconto total, divide-o pela quantidade multiplicada pelo multiplicador de unidade e arredonda para duas casas decimais.
Como o RnB leva em conta apenas duas casas decimais, ele arredonda para 0,01 ou 0,02.

## Simulação

Exemplo:
Desconto total: -3,96
Desconto unitário = -3,96 / (2*100) = -0,0198

Então, qual item receberá 0,0198% do desconto, em vez de 3,96%

## Workaround

Uma solução alternativa válida seria redefinir para nenhum roundingMode, para que o problema deixe de ocorrer.