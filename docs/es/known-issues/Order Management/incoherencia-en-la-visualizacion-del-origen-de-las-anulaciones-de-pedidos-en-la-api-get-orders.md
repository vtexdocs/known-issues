---
title: 'Incoherencia en la visualización del origen de las anulaciones de pedidos en la API Get Orders.'
slug: incoherencia-en-la-visualizacion-del-origen-de-las-anulaciones-de-pedidos-en-la-api-get-orders
status: PUBLISHED
createdAt: 2025-10-22T12:34:17.300Z
updatedAt: 2025-10-22T12:34:17.300Z
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


En algunos casos de pedidos originados en el flujo nativo entre el marketplace y el vendedor, cuando la cancelación es iniciada por el sistema o a través del vendedor, por ejemplo en caso de fallo de pago o reglas internas, la información sobre el origen de la cancelación puede no mostrarse correctamente en las respuestas de las APIs OMS Get Order y Orders.

El campo cancellationData, que identifica históricamente el origen de la cancelación (como `requestedByPaymentNotification`), puede contener información genérica -como fulfillment- o no mostrar ningún detalle. Esto se debe al proceso de fusión de la información de cancelación entre el mercado y el vendedor, que puede sobrescribir datos relevantes dependiendo del orden de los eventos.


#### Simulación



- Generar un pedido en una cuenta con integración entre vendedor y marketplace.
- Simule una cancelación automática, por ejemplo, debido a un fallo en la autorización del pago.
- Acceda a la API OMS Get Order o a Pedidos.
- Tenga en cuenta que el campo `cancellationData` puede no indicar claramente que la cancelación ha sido realizada por el módulo de pago.
- Si es posible, compárelo con la respuesta de la API de pedidos de OMS, donde el origen suele aparecer correctamente.

## Workaround


Actualmente, no existe ninguna solución para evitar que se produzca este tipo de situación. Sin embargo, para identificar correctamente el origen de la cancelación en los casos afectados, se requiere el apoyo del equipo interno. Por lo tanto, recomendamos abrir un ticket para analizar manualmente los registros y validar el origen real de la cancelación.



