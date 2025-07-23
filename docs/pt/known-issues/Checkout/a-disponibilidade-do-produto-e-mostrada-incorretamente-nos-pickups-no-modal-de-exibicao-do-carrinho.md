---
title: 'A disponibilidade do produto é mostrada incorretamente nos pickups no modal de exibição do carrinho'
id: 6aoRWAMSGDwcuUPvGd8bI9
status: PUBLISHED
createdAt: 2022-03-30T17:24:21.013Z
updatedAt: 2024-02-16T20:28:45.041Z
publishedAt: 2024-02-16T20:28:45.041Z
firstPublishedAt: 2022-03-30T17:24:21.669Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: product-availability-is-incorrectly-showed-in-the-pickups-in-cart-display-modal
locale: pt
kiStatus: No Fix
internalReference: 552875
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Na pré-visualização de embarque, após entrar no local, o modal de seleção de pickups informa incorretamente a disponibilidade dos itens em suas respectivas lojas. Por exemplo, a loja X tem todos os itens disponíveis, mas no modal a informação é que um dos itens está indisponível. Ao chegar na caixa, a informação é exibida corretamente, tanto na etapa de envio como também no modal de pickups (quando há uma divisão dos itens em vários pickups diferentes).



## Simulação



Neste caso específico, havia três itens no carrinho, cada item vinha de um vendedor diferente, mas era o mesmo SLA para retirar todos os itens em apenas 1 pickup. E com isso, no modal de retirada do carrinho, parecia que dois itens não estavam disponíveis, apesar de estarem disponíveis. Ao chegar à fase de checkout, a divisão de embalagem estava correta com a retirada no SLA único que era equivalente para todos.




## Workaround


N/A

