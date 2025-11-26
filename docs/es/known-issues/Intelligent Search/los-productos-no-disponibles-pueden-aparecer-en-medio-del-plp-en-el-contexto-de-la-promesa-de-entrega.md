---
title: 'Los productos no disponibles pueden aparecer en medio del PLP en el contexto de la Promesa de Entrega'
slug: los-productos-no-disponibles-pueden-aparecer-en-medio-del-plp-en-el-contexto-de-la-promesa-de-entrega
status: PUBLISHED
createdAt: 2025-11-26T14:27:39.316Z
updatedAt: 2025-11-26T14:27:39.316Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: unavailable-products-may-appear-in-the-middle-of-plp-in-delivery-promise-context
locale: es
kiStatus: Backlog
internalReference: 1330836
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando `hideUnavailableItems` es `false`, se espera que los productos no disponibles aparezcan al final del PLP. Sin embargo, en el contexto de la Promesa de Entrega, los productos no disponibles pueden aparecer en medio del PLP.

Esto ocurre porque la Búsqueda Inteligente evalúa la disponibilidad del vendedor de mejor alcance aparte de las Promesas de Entrega. Eso afecta a la posición del producto en PLP, pero no afecta a la disponibilidad en Delivery Promises, manteniendo la visualización del producto como no disponible si no tiene stock en Delivery Promises.


#### Simulación



- Tienda:
En una tienda que utiliza **Promesas de entrega** y tiene un conjunto de códigos postales, los productos no disponibles aparecen en medio de los resultados de la **Página de listado de productos (PLP)**.


- API de búsqueda inteligente:
Al ejecutar la ruta de búsqueda de productos con `hideUnavailableItems = false`, aparecen productos no disponibles en medio de los productos disponibles en los resultados de la búsqueda.


## Workaround


N/A



