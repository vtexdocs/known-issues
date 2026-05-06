---
title: 'No se envía el correo electrónico de reembolso del pedido cuando se devuelve un importe adicional mediante la nueva interfaz de usuario (OMS).'
slug: no-se-envia-el-correo-electronico-de-reembolso-del-pedido-cuando-se-devuelve-un-importe-adicional-mediante-la-nueva-interfaz-de-usuario-oms
status: PUBLISHED
createdAt: 2022-04-19T15:27:06.000Z
updatedAt: 2023-03-08T18:00:37.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-refund-email-not-getting-sent-when-additional-amount-is-refunded-using-new-ui-oms
locale: es
kiStatus: Fixed
internalReference: 563300
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando Marketplace devuelve un pedido a través de la «nueva interfaz de usuario» y se introduce un valor «adicional» en dicha interfaz, se genera una tarjeta regalo de forma errónea y, con ello, Checkout devuelve un error indicando «que no hay ningún valor que revertir» y no se envía el correo electrónico transaccional «vtexcommerce-order-refunded» al cliente final.

## Simulación

Para simular este caso, es necesario realizar un reembolso añadiendo un valor adicional a través de «New_UI».
No se detectará el envío del correo electrónico transaccional «vtexcommerce-order-refunded» al cliente final.

## Workaround

En estos casos en los que el reembolso se ha realizado en «New_UI», no disponemos de una solución alternativa. Si es necesario realizar un reembolso, es posible hacerlo a través de Old_UI.