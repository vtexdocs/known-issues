---
title: Erro na contagem da quantidade de SKU no checkout quando a promoção Mais por Menos é aplicada em Cotações B2B
slug: erro-na-contagem-da-quantidade-de-sku-no-checkout-quando-a-promocao-mais-por-menos-e-aplicada-em-cotacoes-b2b
status: PUBLISHED
createdAt: 2025-08-26T19:08:33.667Z
updatedAt: 2025-08-26T19:08:33.667Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: sku-quantity-miscount-in-checkout-when-more-for-less-promotion-is-applied-in-b2b-quotes
locale: pt
kiStatus: -
internalReference: 1281922
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando uma promoção "mais por menos" (ou qualquer promoção que divida itens) é aplicada em Cotações B2B para uma SKU, quando você vai para o checkout, o primeiro grupo da SKU dividida permanecerá no carrinho, mas o segundo não. Em outras palavras, o checkout do carrinho calcula incorretamente o total de unidades para a SKU.
## Simulação



- Crie uma cotação com 12 unidades de uma SKU que tenha uma promoção "mais por menos" aplicada para cada 10 unidades.
- O aplicativo B2B Quotes dividirá a SKU em 1 item com 10 unidades (e a promoção aplicada) e 1 item com 2 unidades (com o preço total sem promoção).
- Vá para o checkout.
- O primeiro item com 10 unidades aparecerá no checkout, mas o segundo (com 2 unidades) não aparecerá
## Workaround


NA


