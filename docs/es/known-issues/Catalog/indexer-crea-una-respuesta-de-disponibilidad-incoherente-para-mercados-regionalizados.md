---
title: 'Indexer crea una respuesta de disponibilidad incoherente para mercados regionalizados'
slug: indexer-crea-una-respuesta-de-disponibilidad-incoherente-para-mercados-regionalizados
status: PUBLISHED
createdAt: 2025-10-16T20:34:27.025Z
updatedAt: 2025-10-16T20:34:27.025Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: indexer-builds-inconsistent-availability-response-for-regionalized-marketplaces
locale: es
kiStatus: Backlog
internalReference: 1172289
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Actualmente, el indexador, cuando comprueba si un artículo está disponible para un mercado, realiza una simulación de pago.

Este proceso construye un JSON con varios campos, en el que el campo "stockBalance", del checkout, se considera para determinar la disponibilidad de un artículo en un canal de venta.

Sin embargo, un artículo puede estar disponible incluso con stockBalance = 0, cuando sólo tiene stock procedente de vendedores regionalizados, el checkout utiliza otro campo para actualizar la propiedad "disponibilidad".

El indexador debe tener en cuenta esto último y esta inconsistencia puede, en ocasiones, provocar el comportamiento de que no muestre correctamente la disponibilidad del artículo en su respuesta.

Es importante tener en cuenta que esto no afecta a la disponibilidad real del artículo, ya que estos artículos sólo se mostrarán cuando se regionalicen de antemano y también es necesario mantener la bandera "mostrar sin stock" establecida como true, tal y como se describe en este otro caso de problema: https://help.vtex.com/en/known-issues/product-unavailable-even-with-franchised-stock--58KRJl4MFOaeb5KUYGmH8G


#### Simulación


1 - tener un producto sólo disponible para los vendedores regionalizados
2 - comprobar sus datos indexados para un canal de venta que sólo tiene ofertas para este vendedor
3 - se mostrará como no disponible, incluso si tiene stock para los vendedores

## Workaround


Establezca 1+ unidades de stock para el propio marketplace si la información de los datos indexados es crucial para su operación.

Además, las próximas actualizaciones de los motores de búsqueda VTEX cubrirán este problema.