---
title: 'Valor incorreto no MELI quando o cliente possui um cupom no MELI'
slug: valor-incorreto-no-meli-quando-o-cliente-possui-um-cupom-no-meli
status: PUBLISHED
createdAt: 2024-01-22T11:57:44.000Z
updatedAt: 2024-10-01T12:14:29.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-incorrect-value-when-client-has-coupon-on-meli
locale: pt
kiStatus: Fixed
internalReference: 969297
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, o cliente utilizou um cupom no MELI; há diversos tipos de cupons no MELI. E alguns deles não são incluídos nos cálculos do VTEX OMS.

## Simulação

No VTEX OMS, o valor do pedido pode ser diferente do valor que o MELI vendeu ao cliente, pois alguns tipos de cupom não são considerados durante a criação do pedido no VTEX.

## Workaround

Para pedidos do MELI, se o vendedor precisar do valor correto do pedido, a fim de enviar o valor da fatura ao MELI, ele pode usar o campo no VTEX OMS chamado “total_paid_amount”; esse campo atualmente considera todos os valores dos cupons.