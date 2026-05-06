---
title: 'Integração com a Amazon para reservas de estoque de KITS'
slug: integracao-com-a-amazon-para-reservas-de-estoque-de-kits
status: PUBLISHED
createdAt: 2023-05-22T14:28:36.000Z
updatedAt: 2023-09-27T14:37:12.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-integration-stock-reservations-for-kits
locale: pt
kiStatus: Fixed
internalReference: 829583
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, estamos enfrentando um problema com a reserva de estoque na integração com a Amazon. O que ocorre é que, antes de criar o pedido, fazemos uma reserva de estoque; no entanto, para itens que são KITS, estamos enfrentando um problema na reserva de estoque, mas, quando o pedido é criado, o estoque é reservado sem erros.

## Simulação

Isso se aplica apenas a KITS na integração com a Amazon e, para a reserva de estoque, no menu “Pedidos” da ponte, podemos ver um aviso:

Falha na reserva do pedido: SLA indisponível

## Workaround

Assim que o pedido é criado, o estoque é reservado com sucesso.