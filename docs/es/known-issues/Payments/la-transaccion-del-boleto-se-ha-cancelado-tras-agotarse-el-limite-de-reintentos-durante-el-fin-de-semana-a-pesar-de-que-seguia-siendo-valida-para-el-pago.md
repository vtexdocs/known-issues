---
title: 'La transacción del boleto se ha cancelado tras agotarse el límite de reintentos durante el fin de semana, a pesar de que seguía siendo válida para el pago'
slug: la-transaccion-del-boleto-se-ha-cancelado-tras-agotarse-el-limite-de-reintentos-durante-el-fin-de-semana-a-pesar-de-que-seguia-siendo-valida-para-el-pago
status: PUBLISHED
createdAt: 2021-05-27T21:52:23.000Z
updatedAt: 2026-06-05T20:31:21.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: boleto-transaction-cancelled-after-retry-limit-expires-over-weekend-despite-still-being-valid-for-payment
locale: es
kiStatus: No Fix
internalReference: 374288
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se crea un **boleto bancário** (recibo de pago) con una fecha de vencimiento que cae en **fin de semana**, la transacción puede **cancelarse antes de que el cliente tenga la oportunidad de pagarla**, aunque el boleto siga siendo válido para su pago el siguiente día laborable.
Esto ocurre porque el sistema está configurado para consultar el estado del pago (a través de **CieloV3** o **BrasPag**) cada 30 minutos durante 7 días naturales consecutivos, lo que suma un total de **336 intentos**. Si esos 7 días expiran en un fin de semana, se alcanza el límite de reintentos y la transacción se cancela. Sin embargo, el boleto sigue siendo válido y el cliente aún puede pagarlo el lunes, lo que hace que el pago sea aceptado por el banco mientras que el pedido ya está cancelado por parte de VTEX.

## Simulación

Para reproducir el problema, se debe crear un boleto un lunes con un plazo de pago que venza un sábado o un domingo, de modo que los 336 intentos de reintento se agoten durante el fin de semana antes del siguiente día laborable.

## Workaround

No hay ninguna solución alternativa disponible.