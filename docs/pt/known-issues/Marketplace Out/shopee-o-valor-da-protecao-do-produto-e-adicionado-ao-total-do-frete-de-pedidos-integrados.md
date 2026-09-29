---
title: 'Shopee O valor da Proteção do Produto é adicionado ao total do frete de pedidos integrados.'
slug: shopee-o-valor-da-protecao-do-produto-e-adicionado-ao-total-do-frete-de-pedidos-integrados
status: PUBLISHED
createdAt: 2026-09-29T23:20:48.000Z
updatedAt: 2026-09-29T23:20:48.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-product-protection-amount-is-added-to-the-shipping-total-of-integrated-orders
locale: pt
kiStatus: Backlog
internalReference: 1468080
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um pedido na Shopee inclui a Proteção do Produto (a garantia que o comprador adiciona no checkout), o valor pago por ela é somado ao custo de envio do pedido quando este é integrado ao VTEX. Como resultado, o pedido exibe um valor de envio maior do que o correto e a fatura é emitida com um total acima do valor justo.

## Simulação

1. Faça um pedido na Shopee com a Proteção do Produto adicionada.

2. Aguarde a integração do pedido ao VTEX.

3. Abra o pedido no painel de administração do VTEX e verifique o valor do envio: ele inclui o valor da Proteção do Produto.

4. Emita a fatura do pedido: o total da fatura é maior do que o esperado, correspondente ao valor da Proteção do Produto.

## Workaround

N/A