---
title: 'El comprador ve un error genérico en lugar de la pantalla de confirmación del pedido y el pedido se creó.'
slug: el-comprador-ve-un-error-generico-en-lugar-de-la-pantalla-de-confirmacion-del-pedido-y-el-pedido-se-creo
status: PUBLISHED
createdAt: 2021-09-03T18:50:10.000Z
updatedAt: 2026-09-17T16:09:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: buyer-sees-a-generic-error-instead-of-the-order-confirmation-screen-and-the-order-was-created
locale: es
kiStatus: No Fix
internalReference: 425142
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

De forma intermitente, el último paso de la compra falla y el comprador ve una pantalla de error genérica en lugar de la pantalla de confirmación del pedido, aunque este se haya creado correctamente.

Como la pantalla de confirmación nunca se muestra, el comprador tiende a volver a la página anterior. El carrito ya está vacío y, dado que el comprador desconoce la existencia del pedido, existe el riesgo de que cree un nuevo carrito y vuelva a comprar el mismo artículo.

## Simulación

No reproducible: el escenario es intermitente.

Para confirmar un caso, verifique que:

1. El comprador vio una pantalla de error genérica al finalizar la compra.

2. El pedido se creó correctamente.

3. El carrito estaba vacío cuando el comprador volvió a la página anterior.

## Workaround

No aplica