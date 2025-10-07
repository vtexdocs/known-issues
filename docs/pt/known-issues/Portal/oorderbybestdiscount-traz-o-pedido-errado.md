---
title: O=OrderByBestDiscount traz o pedido errado
slug: oorderbybestdiscount-traz-o-pedido-errado
status: PUBLISHED
createdAt: 2025-10-07T19:51:10.091Z
updatedAt: 2025-10-07T19:51:10.091Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: oorderbybestdiscount-brings-the-wrong-order
locale: pt
kiStatus: Backlog
internalReference: 409119
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


OrderByBestDiscount é calculado levando em conta o menor `listPrice` e `price` entre todos os canais de vendas disponíveis
## Simulação



- Insira mais de um preço no produto. Ex: dois preços de lista diferentes em vendedores diferentes
- Coloque a ordenação da página por desconto (O=OrderByBestDiscount)
- Veja que a classificação não está na ordem dos preços que estão sendo exibido
## Workaround


N/A