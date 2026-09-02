---
title: 'Valor de recompensa incorreto no formulário de pedido quando uma promoção divide um item.'
slug: valor-de-recompensa-incorreto-no-formulario-de-pedido-quando-uma-promocao-divide-um-item
status: PUBLISHED
createdAt: 2026-09-03T00:44:01.000Z
updatedAt: 2026-09-03T00:44:01.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: incorrect-reward-value-in-the-orderform-when-a-promotion-splits-an-item
locale: pt
kiStatus: Backlog
internalReference: 1456081
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma promoção divide um item em várias linhas (por exemplo, uma promoção "mais por menos") e uma promoção de valor de recompensa se aplica ao mesmo item, o valor de recompensa por unidade é calculado e distribuído incorretamente. A API de Checkout recebe o valor total da recompensa do RnB, mas não consegue distribuí-lo entre os itens divididos.

O cálculo correto da recompensa é `items.rewardValue × items.quantity`. Este KI inclui casos em que o valor da recompensa não é calculado por unidade.

O cartão fidelidade é criado com o valor de recompensa correto. Até onde pudemos validar, o problema ocorre apenas no `orderForm` do Checkout.

## Simulação

1. Crie uma promoção que possa dividir itens no checkout (por exemplo, "Mais por menos").
2. Uma promoção com valor de recompensa deve estar ativa.

3. Monte um carrinho com um SKU válido para ambas as promoções.
4. Inspecione o array `items` no orderFormId.

`items.rewardValue` não terá um valor por unidade.

## Workaround

N/A