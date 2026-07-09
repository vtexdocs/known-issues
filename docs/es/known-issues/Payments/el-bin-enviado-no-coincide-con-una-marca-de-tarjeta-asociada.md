---
title: 'El BIN enviado no coincide con una marca de tarjeta asociada.'
slug: el-bin-enviado-no-coincide-con-una-marca-de-tarjeta-asociada
status: PUBLISHED
createdAt: 2020-11-24T17:29:48.000Z
updatedAt: 2026-07-09T14:39:17.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: bin-sent-does-not-match-an-associated-card-brand
locale: es
kiStatus: No Fix
internalReference: 308896
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Durante el proceso de pago, los clientes pueden cambiar manualmente la marca de la tarjeta que se muestra junto al número de tarjeta, anulando la marca identificada automáticamente a partir del BIN. Si la compra se completa con la marca incorrecta seleccionada, la transacción se procesa con la marca de tarjeta errónea, lo que genera una discrepancia entre los registros VTEX y la información que identifica el proveedor de pagos.

Esta discrepancia provoca:

- **Problemas de conciliación financiera**, ya que las diferentes marcas de tarjetas tienen diferentes comisiones por transacción.

- **Errores en los pedidos de cambio** cuando la diferencia de valor supera el 10 %, ya que la discrepancia de marca se detecta durante el intento de cargo adicional.

> **Nota final:** Este problema conocido se da por cerrado. Los proveedores de pagos afectados principalmente (Cielo, MaxiPago, Moip, Redecard) son conectores heredados oficialmente obsoletos y no se prevén cambios en el código.

## Simulación

1. Añada un artículo al carrito y proceda al pago.

2. Introduzca el número de tarjeta de crédito y observe la marca de la tarjeta identificada automáticamente a partir del BIN. 3. Haz clic en el logotipo de la marca de la tarjeta y selecciona manualmente una marca diferente.

4. Completa la compra.

5. Revisa la transacción en el panel de administración; la marca registrada en VTEX será diferente de la marca real de la tarjeta identificada por el proveedor de pagos.

## Workaround

Para evitar que los clientes cambien manualmente la marca de la tarjeta, agrega el siguiente código CSS al archivo de personalización de la página de pago (`checkout-custom.css`):

.card-flags .card-flag-label { pointer-events: none;}

Esto desactiva los eventos de clic en el logotipo de la marca de la tarjeta, lo que hace que el campo sea de solo lectura e impide que se cambie la marca.