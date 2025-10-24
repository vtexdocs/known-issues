---
title: 'O link para o pedido na página do cartão-presente leva a uma página inexistente (404)'
slug: o-link-para-o-pedido-na-pagina-do-cartaopresente-leva-a-uma-pagina-inexistente-404
status: PUBLISHED
createdAt: 2025-10-16T20:42:02.667Z
updatedAt: 2025-10-16T20:42:02.667Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-link-to-the-order-on-the-gift-card-page-leads-to-a-nonexistent-page-404
locale: pt
kiStatus: Backlog
internalReference: 1196298
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em alguns extratos de cartão-presente, não é possível acessar o pedido diretamente. O problema é que o link está formatado como:
`https://.myvtex.com/admin/checkout#/orders/`

No entanto, o formato correto deve ser:
`https://.myvtex.com/admin/orders/`
## Simulação


Não é possível reproduzir.


## Workaround


Colete o `orderId` desejado e use a rota correta: `https://.myvtex.com/admin/orders/`



