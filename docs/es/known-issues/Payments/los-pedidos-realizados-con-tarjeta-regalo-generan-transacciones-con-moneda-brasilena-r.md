---
title: 'Los pedidos realizados con Tarjeta Regalo generan Transacciones con moneda brasileña (R$)'
id: 6KbJ0z705zqqSfL9PiuLHj
status: PUBLISHED
createdAt: 2024-08-19T15:44:05.465Z
updatedAt: 2024-08-19T15:44:06.236Z
publishedAt: 2024-08-19T15:44:06.236Z
firstPublishedAt: 2024-08-19T15:44:06.236Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: orders-placed-with-gift-card-generate-transactions-with-brazilian-currency-r
locale: es
kiStatus: Backlog
internalReference: 1083379
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Los pagos con Tarjeta Regalo no son creados con un `currencyCode`, como consecuencia las transacciones serán creadas con el R$ (Real Brasileño) por defecto, esto no ocurre cuando otro método de pago está presente (ej. Tarjeta Regalo + Tarjeta de Crédito).


##

## Simulación


Realice un pedido utilizando sólo la Tarjeta Regalo, la transacción será en R$ pero el pedido se crea correctamente con la moneda local. El problema es sólo visual, sin impacto operativo.



## Workaround


NA




