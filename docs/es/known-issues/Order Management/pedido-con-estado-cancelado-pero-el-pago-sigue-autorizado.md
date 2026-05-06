---
title: 'Pedido con estado «cancelado», pero el pago sigue autorizado'
slug: pedido-con-estado-cancelado-pero-el-pago-sigue-autorizado
status: PUBLISHED
createdAt: 2021-08-26T15:39:43.000Z
updatedAt: 2024-06-28T17:45:42.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-with-status-of-canceled-but-the-payment-remains-authorized
locale: es
kiStatus: Fixed
internalReference: 420019
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunos casos en los que el pedido queda incompleto o se cancela debido a un fallo de comunicación con la pasarela de pago, el pago permanece autorizado y/o aprobado, no entra en el proceso de cancelación y el importe abonado no se reembolsa automáticamente. Además, es posible que se envíen accidentalmente correos electrónicos transaccionales, lo que también permite el pago de recibos bancarios, ya que la URL se incluye en ellos.

## Simulación

No hay forma de simularlo. Sin embargo, tenemos algunos casos en los que esto ha ocurrido anteriormente.

## Workaround

N/A