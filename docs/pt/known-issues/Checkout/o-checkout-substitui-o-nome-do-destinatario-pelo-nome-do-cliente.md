---
title: 'O checkout substitui o nome do destinatário pelo nome do cliente'
slug: o-checkout-substitui-o-nome-do-destinatario-pelo-nome-do-cliente
status: PUBLISHED
createdAt: 2021-01-15T16:22:11.000Z
updatedAt: 2022-09-26T21:11:13.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-overwrites-receiver-name-with-customer-name
locale: pt
kiStatus: Fixed
internalReference: 324792
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O nome do destinatário é substituído pelo nome do cliente após a página de finalização da compra ser recarregada.

## Simulação

- crie um novo carrinho
- prossiga como um novo cliente com o nome "A"
- insira um endereço, preenchendo o campo do destinatário com o nome "B"
- vá para a etapa de pagamento
- recarregue a página

## Workaround

N/A