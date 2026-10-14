---
title: 'Shopee O valor da Proteção do Produto é adicionado ao total do pedido em pedidos integrados.'
slug: shopee-o-valor-da-protecao-do-produto-e-adicionado-ao-total-do-pedido-em-pedidos-integrados
status: PUBLISHED
createdAt: 2026-09-29T23:20:48.000Z
updatedAt: 2026-10-14T18:19:30.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-product-protection-amount-is-added-to-the-order-total-of-integrated-orders
locale: pt
kiStatus: Backlog
internalReference: 1468080
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um pedido na Shopee inclui a Proteção do Produto (a garantia que o comprador adiciona no checkout), o valor pago por ela é incluído no total do pedido quando este é integrado ao VTEX. Dependendo do pedido, o valor aparece no preço do item ou no valor do frete. Como resultado, o total do pedido no VTEX é maior que o valor da mercadoria e a fatura é emitida com um valor superior ao correto.

## Simulação

1. Faça um pedido na Shopee com a Proteção do Produto adicionada.

2. Aguarde a integração do pedido ao VTEX.

3. Abra o pedido no Admin do VTEX: o total do pedido é igual ao valor pago pelo comprador, incluindo a Proteção do Produto. O valor é adicionado ao preço do item (como um ajuste de preço do vendedor) ou ao valor do frete.

4. Emita a fatura do pedido: o total da fatura é maior do que o esperado pelo valor da Proteção do Produto.

## Workaround

N/A