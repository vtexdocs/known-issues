---
title: 'Os carrinhos criados a partir da substituição de pedidos não recebem as promoções corretamente'
slug: os-carrinhos-criados-a-partir-da-substituicao-de-pedidos-nao-recebem-as-promocoes-corretamente
status: PUBLISHED
createdAt: 2021-11-22T20:31:57.000Z
updatedAt: 2023-10-20T17:47:24.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: carts-created-from-order-replacement-do-not-receive-promotions-correctly
locale: pt
kiStatus: Backlog
internalReference: 473424
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os carrinhos criados a partir de pedidos existentes por meio da funcionalidade “substituir pedidos”, disponível na página “meus pedidos”, estão restritos à promoção original, sem levar em conta que a mesma promoção pode se aplicar a diferentes contextos, como diferentes formas de pagamento ou opções de envio.

## Simulação

- Tenha uma promoção para vários métodos de pagamento
- Finalize o pedido pagando com “A”, que deve ter um desconto
- Na tela “meus pedidos”, opte por alterar o método de pagamento do pedido
- Volte ao carrinho e opte por pagar com “B”
- O desconto não será exibido

## Workaround

N/A