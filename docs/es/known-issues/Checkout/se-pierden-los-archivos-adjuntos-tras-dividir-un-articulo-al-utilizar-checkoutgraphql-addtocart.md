---
title: 'Se pierden los archivos adjuntos tras dividir un artículo al utilizar «checkout-graphql addToCart»'
slug: se-pierden-los-archivos-adjuntos-tras-dividir-un-articulo-al-utilizar-checkoutgraphql-addtocart
status: PUBLISHED
createdAt: 2026-05-08T21:48:53.000Z
updatedAt: 2026-05-08T21:48:53.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: attachments-lost-after-item-split-when-using-checkoutgraphql-addtocart
locale: es
kiStatus: Backlog
internalReference: 1404093
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Es posible que los archivos adjuntos aplicados mediante el método `addToCart` de `checkout-graphql` no se mantengan en todas las líneas de artículo cuando el proceso de pago divide un artículo (por ejemplo, debido a promociones) tras la adición inicial.

El síntoma visible es que solo uno de los SKU divididos conserva el archivo adjunto, mientras que los demás lo pierden. Esto afecta a las tiendas que utilizan `addToCart` de GraphQL con archivos adjuntos a los artículos y promociones que provocan una división.

## Simulación

- Crea una promoción que pueda provocar la división de un artículo para el mismo SKU (por ejemplo, «Más por menos»);
- Utiliza addToCart de GraphQL para añadir un SKU con los archivos adjuntos u opciones requeridos y con una cantidad que divida los artículos del carrito (por ejemplo, 4 unidades, de las cuales una recibe un descuento)

## Workaround

provisional**
N/A