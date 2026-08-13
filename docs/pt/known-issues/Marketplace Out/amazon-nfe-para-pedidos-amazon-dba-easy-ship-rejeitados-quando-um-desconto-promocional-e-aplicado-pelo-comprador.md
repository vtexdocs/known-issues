---
title: 'Amazon NF-e para pedidos Amazon DBA (Easy Ship) rejeitados quando um desconto promocional é aplicado pelo comprador'
slug: amazon-nfe-para-pedidos-amazon-dba-easy-ship-rejeitados-quando-um-desconto-promocional-e-aplicado-pelo-comprador
status: PUBLISHED
createdAt: 2026-08-13T16:45:01.000Z
updatedAt: 2026-08-13T16:45:01.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-nfe-for-amazon-dba-easy-ship-orders-rejected-when-a-promotional-discount-is-applied-by-the-buyer
locale: pt
kiStatus: Backlog
internalReference: 1447551
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A fatura não emitida (NF-e) para pedidos da Amazon DBA (Easy Ship) é rejeitada, possivelmente quando o comprador paga usando um método de pagamento que concede um desconto/incentivo promocional (por exemplo, Pix), causando o cancelamento automático do pedido.

## Simulação

- Faça um pedido pelo programa Amazon DBA (Easy Ship) em que o comprador paga usando um método que concede um desconto ou incentivo promocional (por exemplo, Pix).

- Emita a fatura não emitida (NF-e) usando o valor total do pedido (que já inclui o desconto aplicado pela Amazon).

- Envie a fatura para a Amazon.

- O pedido é cancelado automaticamente após a rejeição da fatura, possivelmente porque o valor do produto não corresponde ao esperado.

![](https://vtexhelp.zendesk.com/attachments/token/RsGjBGfPvONupT0u4R6vhWSTt/?name=image.png)

## Workaround

Não há solução alternativa disponível.