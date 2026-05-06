---
title: 'La simulación de pago con una gran cantidad de artículos del mismo SKU da lugar a un tiempo de espera de logística agotado'
slug: la-simulacion-de-pago-con-una-gran-cantidad-de-articulos-del-mismo-sku-da-lugar-a-un-tiempo-de-espera-de-logistica-agotado
status: PUBLISHED
createdAt: 2021-02-03T00:30:54.000Z
updatedAt: 2025-09-25T18:16:09.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: checkout-simulation-with-a-great-quantity-of-the-same-sku-receives-a-logistics-timeout
locale: es
kiStatus: No Fix
internalReference: 330775
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Se produce un error en el servicio de logística al intentar simular una compra con miles de unidades del mismo SKU. Este error se debe a que la solicitud de dividir el paquete tarda demasiado tiempo.

El detalle del error en la API es: «La operación se ha cancelado».

En el caso de los productos en kit, la situación puede ser aún más restrictiva, ya que el sistema de logística calculará cada componente del kit por separado.

## Simulación

1. Intenta realizar una **simulación de pago** o una simulación en el **carrito de la compra** con miles de unidades del mismo SKU (por ejemplo, 50 000 o 3 000 para kits).
2. Revisa los detalles de la respuesta de la API; probablemente verás un error al procesar esa solicitud (**tiempo de espera agotado**).

## Workaround

Recomendamos aumentar los límites de paquetes del transportista para que quepan todas las unidades en un solo paquete. Esto agilizaría la solicitud y evitaría que se produjera un tiempo de espera agotado.