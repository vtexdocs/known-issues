---
title: 'O evento add_to_cart não envia as informações de desconto e o preço do desconto'
slug: o-evento-addtocart-nao-envia-as-informacoes-de-desconto-e-o-preco-do-desconto
status: PUBLISHED
createdAt: 2025-12-09T17:54:08.565Z
updatedAt: 2025-12-09T17:54:08.565Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: addtocart-event-doesnt-send-the-discount-info-and-the-discount-price
locale: pt
kiStatus: Backlog
internalReference: 1337368
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando um produto tem uma promoção aplicada, o evento add_to_cart deve enviar as informações de desconto e o preço com o desconto. Isso está descrito na documentação do GA4: https://developers.google.com/analytics/devguides/collection/ga4/reference/events?utm_source=chatgpt.com&client_type=gtag#add_to_cart_item. Mas, no momento, nosso evento add_to_Cart não está fazendo isso.
## Simulação


Tente adicionar um produto ao carrinho da sua loja e observe o evento add_to_cart_event. Não há desconto na resposta e o preço ainda é o preço total.
## Workaround


N/A



