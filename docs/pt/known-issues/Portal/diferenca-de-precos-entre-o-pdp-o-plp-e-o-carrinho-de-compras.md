---
title: 'Diferença de preços entre o PDP, o PLP e o carrinho de compras'
slug: diferenca-de-precos-entre-o-pdp-o-plp-e-o-carrinho-de-compras
status: PUBLISHED
createdAt: 2023-06-29T20:01:56.000Z
updatedAt: 2023-06-29T20:01:56.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: difference-in-prices-between-pdp-plp-and-checkout-cart
locale: pt
kiStatus: Backlog
internalReference: 853175
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O portal está exibindo o mesmo conteúdo nas PDPs e PLPs mesmo após algumas atualizações, como promoções.

## Simulação

Com um cache expirado, a CDN consulta o sistema do portal para saber se a página foi alterada. Se for o caso, o portal envia a nova página para ser renderizada; caso contrário, a CDN redesenha a página que já possui.

Nesse caso, observamos que, embora a página tivesse sofrido algumas alterações, como a inclusão de uma promoção, o portal informou à CDN que não havia alteração em relação à página em cache e, portanto, a camada de borda estava renderizando a página sem a promoção.

## Workaround

Uma maneira de contornar isso foi **alterar o modelo da página do produto (por exemplo, incluir um comentário**), para que o portal informasse que houve uma alteração na estrutura e o CDN obtivesse a nova página para ser armazenada em cache.