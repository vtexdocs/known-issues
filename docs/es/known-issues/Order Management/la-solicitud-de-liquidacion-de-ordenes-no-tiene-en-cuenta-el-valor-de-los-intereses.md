---
title: 'La solicitud de liquidación de órdenes no tiene en cuenta el valor de los intereses.'
slug: la-solicitud-de-liquidacion-de-ordenes-no-tiene-en-cuenta-el-valor-de-los-intereses
status: PUBLISHED
createdAt: 2024-11-05T20:51:14.000Z
updatedAt: 2026-10-06T16:11:01.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: request-for-settlement-of-orders-does-not-account-for-the-value-of-interest
locale: es
kiStatus: Fixed
internalReference: 1130035
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se aplican intereses a un pedido, el valor total de la transacción resulta ser superior al valor original del pedido. Sin embargo, durante el proceso de envío de la solicitud de liquidación desde el sistema de pedidos a la pasarela de pago, el sistema solo envía el importe del pedido, sin tener en cuenta los intereses. Esto da como resultado una solicitud de liquidación con un importe inferior al total de la transacción, lo que puede impedir que la transacción se capture por completo.

En algunos casos, la transacción puede permanecer en estado de "Capturando" indefinidamente.

## Simulación

Cree un pedido utilizando un método de pago con cálculo de intereses configurado.

Tras finalizar la compra, siga el flujo normal de gestión de pedidos y envíe la factura con el importe total del pedido, incluidos los intereses.

En los detalles de la transacción en la pasarela, verá que la solicitud de captura se envía con el importe del pedido, sin tener en cuenta los intereses.

## Workaround

Para evitar nuevos casos:
El comercio puede habilitar la captura automática en los conectores que aceptan intereses. De esta forma, la captura se realizará directamente en el conector, utilizando el importe total de la transacción, incluidos los intereses, y eliminando la dependencia del importe enviado por el sistema de órdenes.

Para ajustar órdenes que ya se encuentran en estado de «Liquidación»:
Para las órdenes que ya están en estado de «Liquidación» y están a la espera de que se actualice el importe con los intereses, la solución consiste en llamar explícitamente a las API de liquidación desde el área de pagos para ajustar el importe de la transacción.