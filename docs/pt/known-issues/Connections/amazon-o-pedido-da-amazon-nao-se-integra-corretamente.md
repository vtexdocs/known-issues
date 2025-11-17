---
title: 'Amazon O pedido da Amazon não se integra corretamente'
slug: amazon-o-pedido-da-amazon-nao-se-integra-corretamente
status: PUBLISHED
createdAt: 2025-11-17T17:35:08.023Z
updatedAt: 2025-11-17T17:35:08.023Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-amazon-order-does-not-integrate-correctly
locale: pt
kiStatus: Fixed
internalReference: 1109828
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O pedido da Amazon não é enviado corretamente para o OMS ou não segue todo o fluxo de trabalho corretamente, ficando preso em algum estágio.

## Simulação


Para fazer a reserva de pedidos da Amazon, a integração não configura as informações do deliveryChannel.

Na maioria das vezes, a falta dessa informação não tem impacto sobre o pedido, mas em alguns cenários de erro (como timeout para confirmar a reserva) o sistema de logística precisa dessa informação para reprocessar o pedido
## Workaround


N/A



