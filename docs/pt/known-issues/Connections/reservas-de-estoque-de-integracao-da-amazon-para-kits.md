---
title: 'Reservas de estoque de integração da Amazon para KITS'
id: 6ZEvHuGCOEcuQTya1oDOyu
status: PUBLISHED
createdAt: 2023-05-22T14:28:54.846Z
updatedAt: 2023-09-27T14:37:26.343Z
publishedAt: 2023-09-27T14:37:26.343Z
firstPublishedAt: 2023-05-22T14:28:55.337Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-integration-stock-reservations-for-kits
locale: pt
kiStatus: Fixed
internalReference: 829583
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Atualmente temos um problema de reserva de estoque na integração com a Amazon, o que acontece é que antes de criar o pedido fazemos uma reserva de estoque, e para itens que são KITS estamos tendo um problema na reserva de estoque, mas quando o pedido é criado o estoque está sendo reservado sem nenhum erro.

## Simulação



Isso só será aplicado para KITS na integração com a Amazon, e para a reserva de estoque, dentro do menu bridge - Orders, podemos ver um aviso:

Order reservation failed: SLA não disponíve

## Workaround



Depois que o pedido é criado, o estoque é reservado com sucesso.





