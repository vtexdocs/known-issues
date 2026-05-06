---
title: 'Diferencia de precios entre PDP, PLP y Checkout Cart'
slug: diferencia-de-precios-entre-pdp-plp-y-checkout-cart
status: PUBLISHED
createdAt: 2023-06-29T20:01:56.000Z
updatedAt: 2023-06-29T20:01:56.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: difference-in-prices-between-pdp-plp-and-checkout-cart
locale: es
kiStatus: Backlog
internalReference: 853175
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El portal sigue mostrando el mismo contenido en las páginas de producto (PDP) y en las páginas de lista de productos (PLP) incluso después de algunas actualizaciones, como las promociones.

## Simulación

Con una caché caducada, la CDN consulta al sistema del portal si la página ha cambiado. Si es así, el portal envía la nueva página para que se muestre; de lo contrario, la CDN vuelve a generar la página que ya tiene.

En este caso, observamos que, aunque la página había enviado algunos cambios (la inclusión de una promoción), el portal respondió a la CDN que no había cambios con respecto a la página almacenada en caché y, por lo tanto, la capa periférica renderizaba la página sin la promoción.

## Workaround

Una forma de solucionarlo era **modificar la plantilla de la página del producto (por ejemplo, incluyendo un comentario**), de modo que el portal informara de que se había producido un cambio en la estructura y el CDN obtuviera la nueva página para almacenarla en caché.