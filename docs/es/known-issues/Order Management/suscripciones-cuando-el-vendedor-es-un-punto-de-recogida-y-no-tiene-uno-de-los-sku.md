---
title: 'Suscripciones cuando el vendedor es un punto de recogida y no tiene uno de los SKU.'
slug: suscripciones-cuando-el-vendedor-es-un-punto-de-recogida-y-no-tiene-uno-de-los-sku
status: PUBLISHED
createdAt: 2022-09-27T22:17:38.000Z
updatedAt: 2026-09-14T22:37:11.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscriptions-when-the-seller-is-a-pickup-point-and-does-not-have-one-of-the-skus
locale: es
kiStatus: Fixed
internalReference: 666701
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Se identificó que en la solicitud de renovación de una suscripción con el siguiente escenario:
La suscripción tiene más de un producto/SKU distinto, uno de estos productos/SKU no tiene stock y el vendedor es un punto de recogida, se mostrará el siguiente error: Ningún artículo cumple las condiciones de

## Simulación

para realizar el pedido.

Esto ocurre porque, en todas las solicitudes de suscripción, se realiza una simulación con el proceso de pago y, en dicha simulación, se recibe el error de pago que indica que uno de los productos no se puede entregar.

## **Simulación**
Para simular este escenario, se requiere una suscripción con más de un SKU distinto, el vendedor debe tener un punto de recogida y uno de los SKU no debe tener stock disponible.

1- Cuando la suscripción realiza la simulación para la renovación, la respuesta mostrará el estado = FALTANTE para los SKU;

2- Al verificar la simulación en el proceso de pago, se mostrará un error que indica que uno de los SKU no se puede entregar y no se realizará el pedido parcial.

3. También veremos que no es posible realizar el pedido de forma parcial.

## Workaround

Cerramos esta KI tras una reevaluación técnica: ¡Kit de herramientas de IA para pedidos (ki-validation-agent, skill ki-validation v1.1.0), Fase 2!