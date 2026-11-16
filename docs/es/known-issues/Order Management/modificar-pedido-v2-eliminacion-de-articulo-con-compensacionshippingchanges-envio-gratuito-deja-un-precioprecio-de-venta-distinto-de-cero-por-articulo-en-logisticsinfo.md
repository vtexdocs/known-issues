---
title: 'Modificar pedido V2: eliminación de artículo con compensaciónShippingChanges + envío gratuito deja un precio/precio de venta distinto de cero por artículo en logisticsInfo'
slug: modificar-pedido-v2-eliminacion-de-articulo-con-compensacionshippingchanges-envio-gratuito-deja-un-precioprecio-de-venta-distinto-de-cero-por-articulo-en-logisticsinfo
status: PUBLISHED
createdAt: 2026-11-16T22:27:56.000Z
updatedAt: 2026-11-16T22:27:56.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: change-order-v2-item-removal-with-compensateshippingchanges-free-shipping-leaves-nonzero-pricesellingprice-per-item-in-logisticsinfo
locale: es
kiStatus: Backlog
internalReference: 1485635
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se elimina un artículo mediante la Modificación de Pedido V2 en un pedido con una promoción de envío gratuito, y la cuenta tiene habilitada la opción `compensarCambiosDeEnvío`, el costo de envío por artículo del artículo restante en `shippingData.logisticsInfo[].price` y `sellingPrice` cambia de 0 al monto de envío que correspondía al artículo eliminado (p. ej., 0 → 56). El valor esperado sigue siendo 0, ya que el comprador no paga el envío.

El monto cobrado al comprador y el valor del pedido se mantienen correctos: el costo de envío recalculado después de la eliminación se compensa con un descuento manual del mismo monto (`ManualValues` con signo negativo en los totales de cambio; `Shipping` con signo positivo). Solo el costo de envío por artículo en `logisticsInfo` es incorrecto.

Impacto: las integraciones que suman el costo de envío por artículo en `logisticsInfo` (p. ej., para emitir la factura) obtienen un total superior al valor del pedido, y la factura se rechaza o difiere del pedido. El equipo de ingeniería confirmó que este no es el comportamiento previsto. En algunos casos, el precio de lista del artículo restante también cambió (a la parte correspondiente al artículo eliminado); esta parte no se pudo reproducir y no se confirmó.

## Simulación

Describa aquí los pasos necesarios para reproducir este comportamiento. Tenga cuidado de no exponer información confidencial, como imágenes o archivos adjuntos.

## Workaround

1. Al facturar o conciliar, utilice el valor del pedido o el total de envío del pedido en los totales. No sume el envío por artículo de la información logística después de una modificación.

2. Para obtener el envío original por artículo, utilice el historial de modificaciones: GET /api/order-system/orders/{changeOrderId}/changes (remove.shippingData y replace.from) en lugar de price/listPrice en logisticsInfo.