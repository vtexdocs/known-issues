---
title: Incoherencia en la visualización del origen de las anulaciones de pedidos en la API Get Orders.
slug: incoherencia-en-la-visualizacion-del-origen-de-las-anulaciones-de-pedidos-en-la-api-get-orders
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: inconsistency-in-displaying-the-origin-of-order-cancellations-in-the-get-orders-api
locale: es
kiStatus: Backlog
internalReference: 1249934
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En algunos casos de pedidos originados por el flujo nativo entre **marketplace y vendedor**, cuando la cancelación es iniciada automáticamente por el sistema (por ejemplo, fallo de pago o reglas internas), la **información de origen de la cancelación puede no mostrarse correctamente** en las respuestas de las APIs OMS y Pedidos `Get Order`.

El campo `cancellationData`, que identifica históricamente el origen de la cancelación (como `requestedByPaymentNotification`), puede contener información genérica - como `fulfillment` - o no mostrar detalles. Esto se debe al proceso de **fusión de información de cancelación** entre el mercado y el vendedor, que puede sobrescribir datos relevantes dependiendo del orden de los eventos.


#### Simulación



- Generar un pedido en una cuenta con integración entre **vendedor y marketplace**.
- Simular una cancelación automática, por ejemplo debido a un **fallo de autorización de pago**.
- Acceda a la API `Get Order` desde OMS o Pedidos.
- Tenga en cuenta que el campo `cancellationData` puede no indicar claramente que la cancelación ha sido realizada por el módulo de pago.
- Si es posible, compárelo con la respuesta de la API de pedidos de **SOS**, donde el origen suele aparecer correctamente.

## Workaround


Actualmente, para identificar correctamente el origen de la anulación en los casos afectados, se requiere el apoyo del equipo interno.

Recomendamos **abrir un ticket** para analizar manualmente los logs y validar el origen real de la cancelación.




