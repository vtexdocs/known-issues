---
title: 'Se asignó un almacén incorrecto al artículo agregado mediante ChangeOrderV2 (FFM/SOS ShippingEnricher ignora los DeliveryIds de Logística).'
slug: se-asigno-un-almacen-incorrecto-al-articulo-agregado-mediante-changeorderv2-ffmsos-shippingenricher-ignora-los-deliveryids-de-logistica
status: PUBLISHED
createdAt: 2026-07-10T23:45:23.000Z
updatedAt: 2026-07-23T18:56:13.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: wrong-warehouse-assigned-to-item-added-via-changeorderv2-ffmsos-shippingenricher-ignores-logistics-deliveryids
locale: es
kiStatus: Backlog
internalReference: 1433311
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se agrega un nuevo artículo a un pedido existente mediante el flujo de cambios posterior a la compra, el sistema puede guardar el artículo con una asignación de almacén incorrecta. El síntoma visible es que el artículo se asigna a un almacén que no coincide con la respuesta logística esperada para ese producto. Esto afecta a escenarios con cumplimiento en múltiples almacenes, especialmente cuando el artículo agregado debe tener una ruta diferente a la de los artículos ya presentes en el pedido.

## Simulación

No existe una forma sencilla de reproducir el escenario.

## Workaround

1. Evite usar el flujo de cambios posterior a la compra para agregar artículos que dependan de una ruta de almacén diferente a la de los artículos ya presentes en el pedido.

2. Si el artículo debe venderse por separado, cree un nuevo pedido en lugar de agregarlo al existente.