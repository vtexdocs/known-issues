---
title: 'A promoção de frete grátis será aplicada a pedidos divididos fora das restrições da promoção.'
slug: a-promocao-de-frete-gratis-sera-aplicada-a-pedidos-divididos-fora-das-restricoes-da-promocao
status: PUBLISHED
createdAt: 2026-09-16T21:38:49.000Z
updatedAt: 2026-09-16T21:51:24.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: free-shipping-promotion-being-applied-on-split-orders-outside-promotion-restriction
locale: pt
kiStatus: Fixed
internalReference: 1462228
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Na promoção de frete grátis, a conta pode configurar uma restrição a ser aplicada, por exemplo, o método de envio.

Em carrinhos de compras com produtos vendidos por diferentes vendedores, pode ocorrer um cenário de pedidos divididos. Nesses casos, alguns produtos serão entregues por um vendedor e outros por outro.

É comum, nesses cenários, que os métodos de envio dos vendedores sejam diferentes, o que significa que os pedidos divididos terão métodos de envio diferentes.

O problema ocorre quando a promoção de frete grátis não valida a restrição do método de envio em pedidos divididos. O resultado é que o frete será gratuito mesmo para o pedido dividido com um método de envio diferente.

O resultado esperado é que apenas os pedidos divididos com métodos de envio iguais à restrição tenham frete grátis.

## Simulação

1. Crie uma promoção de frete grátis com restrição de método de envio.

2. Simule um carrinho de compras com produtos vendidos por diferentes vendedores (podem ser vendedores de marca branca) que possuem métodos de envio diferentes.
3. Certifique-se de que um dos vendedores esteja usando um método de envio que não pertença à restrição da promoção.
4. Verifique se o frete grátis está sendo aplicado a todo o carrinho.

## Workaround

Não há solução alternativa.