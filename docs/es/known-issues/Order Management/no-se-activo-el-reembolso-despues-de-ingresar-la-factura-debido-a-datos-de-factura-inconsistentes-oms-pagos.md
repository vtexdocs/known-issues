---
title: 'No se activó el reembolso después de ingresar la factura debido a datos de factura inconsistentes (OMS ↔ Pagos).'
slug: no-se-activo-el-reembolso-despues-de-ingresar-la-factura-debido-a-datos-de-factura-inconsistentes-oms-pagos
status: PUBLISHED
createdAt: 2026-01-15T15:30:15.000Z
updatedAt: 2026-09-21T16:24:34.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: refund-not-triggered-after-input-invoice-due-to-inconsistent-invoicedata-oms-payments
locale: es
kiStatus: Fixed
internalReference: 1351358
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Tras un reembolso exitoso, es posible que los datos de la factura del pedido no se actualicen si falla el paso síncrono posterior al reembolso (p. ej., error de almacenamiento). Cuando se agrega una nueva factura de entrada (devolución) posteriormente, SOS calcula los reembolsos pendientes utilizando los datos de factura obsoletos e intenta procesar el reembolso anterior en lugar del nuevo. El síntoma visible es: la factura de entrada aparece en Interacciones del pedido, pero no se crea ninguna interacción de "Pago de reembolso" y no se envía ningún reembolso al conector.

## Simulación

Requisitos previos:

Un pedido con un reembolso previo ejecutado con éxito y un recibo de reembolso guardado, pero cuyos datos de factura no se actualizaron debido a un fallo en el flujo síncrono.

Pasos:

Ejecutar el primer reembolso; el recibo se guarda, pero los datos de la factura no se actualizan (estado inconsistente).

Insertar una segunda factura de entrada (p. ej., 50 $).

SOS verifica los reembolsos pendientes según los datos de la factura e intenta procesar el reembolso de la primera factura en lugar del nuevo.

El sistema de pagos devuelve el código CHK0054 «no hay valor para reembolsar» y no se crea ninguna interacción de «Reembolso» para la segunda factura (solo aparecen las notificaciones de factura).

## Workaround

Procese manualmente el reembolso faltante en la interfaz de usuario de PCI Gateway o mediante la API de reembolsos de pagos para la transacción afectada; confirme que se crea una nueva interacción de «Reembolso» posteriormente.

Si es necesario internamente, corrija el estado del pedido alineando los datos de la factura con el recibo de reembolso guardado y, a continuación, ejecute el reembolso pendiente para que SOS aplique el importe correcto de la factura.