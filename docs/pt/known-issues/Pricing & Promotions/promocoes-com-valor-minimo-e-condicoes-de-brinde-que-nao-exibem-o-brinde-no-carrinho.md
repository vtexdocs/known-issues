---
title: 'Promoções com valor mínimo e condições de brinde que não exibem o brinde no carrinho'
slug: promocoes-com-valor-minimo-e-condicoes-de-brinde-que-nao-exibem-o-brinde-no-carrinho
status: PUBLISHED
createdAt: 2021-10-07T17:03:27.000Z
updatedAt: 2024-12-19T19:20:01.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotions-with-minimum-value-and-gift-conditions-not-displaying-gift-in-cart
locale: pt
kiStatus: Backlog
internalReference: 445569
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O problema ocorre ao combinar uma promoção com uma condição de valor mínimo e um item de brinde. Nesses casos, o brinde não é exibido ao usuário na interface de checkout. Embora a promoção seja tecnicamente aplicada, o usuário não consegue ver nem selecionar o brinde, o que gera confusão.

## Simulação

Este problema não ocorre de forma consistente em todos os testes, o que dificulta sua reprodução. No entanto, as etapas gerais para reproduzi-lo são as seguintes:

1. Crie uma promoção que combine uma condição de valor mínimo de pedido com um item de brinde.
2. Adicione itens elegíveis ao carrinho para atender à condição de valor mínimo da promoção.
3. Prossiga para o checkout.
4. Observe se o item de brinde é exibido ou selecionável na interface de checkout. Em alguns casos, a promoção parece estar aplicada no pedido, mas o brinde não aparece na interface.

## Workaround

Não há solução alternativa disponível para este problema.