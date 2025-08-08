---
title: 'Actualización automática del rastreo de entregas vía Correios'
id: 7hKUU5Qp4AyCW2QaMQC0S6
status: PUBLISHED
createdAt: 2017-08-16T22:07:06.254Z
updatedAt: 2024-02-29T18:16:47.090Z
publishedAt: 2024-02-29T18:16:47.090Z
firstPublishedAt: 2017-08-16T23:00:56.342Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_4
tag: Order Management
slugEN: automatic-update-of-deliveries-tracking-by-correios
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

El OMS posee un recurso que acompaña automáticamente las entregas de Correos (entre otras transportadoras), de modo que registre esas modificaciones en el pedido, notifique al cliente por email en cuanto a las últimas modificaciones, y finalmente, marque el paquete como entregado – información también retransmitida a los marketplaces.

Modificaciones recientes de Correos hicieron que nuestra integración dejara de funcionar, siendo necesario reescribir el servicio responsable de esa tarea.

## Simulación

Basta tener un código de rastreo válido en cualquier pedido. Los días siguientes, según haya actualización en ese código de rastreo, debería haber el envío de emails, que notablemente no ocurrirá.

## Workaround

Es posible enviar actualizaciones de rastreo vía API, manteniendo el comportamiento de envío de e-mails. Lo mismo para la confirmación de entrega, que también puede hacerse por la interfaz del OMS.

![2017-08-16 195850](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Post-purchase/actualizacion-automatica-del-rastreo-de-entregas-via-correios_1.jpg)

La confirmación de entrega hecha vía OMS también se retransmite a los marketplaces.

>ℹ️ Actualmente, ofrecemos el [VTEX Shipping Network](https://help.vtex.com/pt/subcategory/vtex-shipping-network--5n5MnINzWTQUX1I2EZl4Ib), nuestra solución logística para integrar su operación con Correios y/o transportadoras asociadas. Todos los pedidos de su tienda vinculados a esta solución tendrán seguimiento (tracking) con actualizaciones automáticas. (Exclusivo Brasil)

Otra opción es utilizar soluciones desarrolladas por parceros para el seguimiento de las entregas de Correios, como el [rastreo de XP Agência](https://rastreio.xpagencia.com.br/).

