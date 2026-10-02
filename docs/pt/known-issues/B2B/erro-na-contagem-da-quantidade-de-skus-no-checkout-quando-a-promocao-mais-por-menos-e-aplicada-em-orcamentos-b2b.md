---
title: 'Erro na contagem da quantidade de SKUs no checkout quando a promoção "Mais por Menos" é aplicada em orçamentos B2B.'
slug: erro-na-contagem-da-quantidade-de-skus-no-checkout-quando-a-promocao-mais-por-menos-e-aplicada-em-orcamentos-b2b
status: PUBLISHED
createdAt: 2025-08-26T22:07:30.000Z
updatedAt: 2026-10-02T17:14:39.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: sku-quantity-miscount-in-checkout-when-more-for-less-promotion-is-applied-in-b2b-quotes
locale: pt
kiStatus: Fixed
internalReference: 1281922
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma promoção "compre mais, pague menos" (ou qualquer promoção que divida itens) é aplicada no B2B Quotes para um SKU, ao finalizar a compra, o primeiro grupo do SKU dividido permanecerá no carrinho, mas o segundo não. Em outras palavras, a finalização da compra calcula incorretamente o total de unidades do SKU.

## Simulação

- Crie uma cotação com 12 unidades de um SKU que tenha uma promoção "compre mais, pague menos" aplicada a cada 10 unidades.

- O aplicativo B2B Quotes dividirá o SKU em 1 item com 10 unidades (e a promoção aplicada) e 1 item com 2 unidades (com o preço total sem a promoção).

- Vá para a finalização da compra.

- O primeiro item com 10 unidades aparecerá na finalização da compra, o segundo (com 2 unidades) não.

## Workaround

N/A