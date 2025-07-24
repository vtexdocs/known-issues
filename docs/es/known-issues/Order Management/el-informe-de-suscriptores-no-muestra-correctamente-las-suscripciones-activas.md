---
title: 'El informe de suscriptores no muestra correctamente las suscripciones activas'
id: 4sqvm1v4CbCJLQ3HBBVTmp
status: PUBLISHED
createdAt: 2022-05-27T19:44:57.301Z
updatedAt: 2024-07-01T18:48:23.947Z
publishedAt: 2024-07-01T18:48:23.947Z
firstPublishedAt: 2022-05-27T19:44:57.688Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscribers-report-does-not-show-active-subscriptions-correctly
locale: es
kiStatus: No Fix
internalReference: 587556
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando exportamos el informe de suscriptores, la información de las columnas `TotalSubscriptions` y `TotalSubscriptionsActives` son divergentes en comparación con la información mostrada en el tablero.
Esto se debe a algunas suscripciones que fueron migradas de la v2 a la v3, ya que en la v2 la arquitectura era diferente, siendo considerada por SKU, y en la v3 es considerada por orden.



## Simulación


Puede simular este escenario con una suscripción que haya sido migrada de v2 a v3.

1. Vaya a la funcionalidad "**Pedidos > Suscripciones > Cuadros de mando > Suscriptores > Informe de exportación**";
2. Compruebe un correo electrónico que tenga al menos una suscripción con más de un SKU;
3. Tenga en cuenta que el número de suscripciones en el informe será el mismo que el número de SKUs, no las suscripciones.



## Workaround


No hay ninguna solución disponible.

