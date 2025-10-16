---
title: El mínimo de artículos se puede enviar como 0 a través del campo "numberOfItemsPerShipment" en API
slug: el-minimo-de-articulos-se-puede-enviar-como-0-a-traves-del-campo-numberofitemspershipment-en-api
status: PUBLISHED
createdAt: 2025-10-16T19:59:06.321Z
updatedAt: 2025-10-16T19:59:06.321Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: minimum-of-items-can-be-sent-as-0-through-the-field-numberofitemspershipment-in-api
locale: es
kiStatus: Backlog
internalReference: 1149818
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El mínimo de artículos puede ser enviado como 0 a través del campo "numberOfItemsPerShipment" en la API, y cuando se archiva con 0, la policía de envío no está disponible.


#### Simulación


Rutas API donde, es posible enviar el campo numberOfItemsPerShipment como 0:

https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/shipping-policies/-id-
https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies

Después de que el campo "numberOfItemsPerShipment" se rellena con 0, la simulación de envío en el admin, mostrará la policía de envío como disponible, pero no funcionará en el proceso de compra.

## Workaround


Sólo tiene que modificar el campo "numberOfItemsPerShipment" a un valor 1 nuestro anterior.



