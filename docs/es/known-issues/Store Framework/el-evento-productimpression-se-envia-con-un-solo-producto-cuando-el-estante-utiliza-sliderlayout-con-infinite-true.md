---
title: 'El evento productImpression se envía con un solo producto cuando el estante utiliza slider-layout con infinite: true.'
slug: el-evento-productimpression-se-envia-con-un-solo-producto-cuando-el-estante-utiliza-sliderlayout-con-infinite-true
status: PUBLISHED
createdAt: 2026-07-30T20:41:19.000Z
updatedAt: 2026-07-30T20:41:19.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: productimpression-event-is-sent-with-only-one-product-when-the-shelf-uses-sliderlayout-with-infinite-true
locale: es
kiStatus: Backlog
internalReference: 1441580
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se muestra un estante de productos dentro de un `slider-layout` configurado con `infinite: true`, el evento de píxel `productImpression` se envía con un solo producto, aunque varias tarjetas de producto sean visibles en pantalla simultáneamente. El comportamiento esperado es un único evento que contenga todos los productos visibles; por ejemplo, cuatro impresiones en las posiciones 1 a 4 para un estante que muestra cuatro productos por página.

Como resultado, los datos de impresiones que llegan a Google Analytics, Google Tag Manager y otros usuarios del evento se registran de forma muy incompleta para los estantes configurados como carruseles infinitos. Solo se ven afectadas las impresiones; los clics en productos y otros eventos de comercio electrónico funcionan con normalidad.

Aplicación afectada: `vtex.product-list-context`. Es una dependencia de `vtex.product-summary`, por lo que este comportamiento se presenta en cualquier estante o carrusel de productos creado con los bloques del tema estándar de la tienda.

## Simulación

1. En un tema de tienda, configure una estantería de productos (un bloque `product-summary-list` / shelf) dentro de un bloque `slider-layout`, con `infinite: true` y más productos que los que se muestran por página; por ejemplo, 10 productos con 4 por página.

2. Con Google Tag Manager instalado, publique el tema y abra la página que contiene la estantería, desplazándose hacia abajo hasta que se muestren las tarjetas de producto en pantalla.

3. Inspeccione los eventos de impresión enviados a la capa de datos:

4. Observe una única entrada `productImpression` cuyo array `ecommerce.impressions` contiene solo un producto, en la posición `position: 1`, aunque se muestran cuatro productos. Lo esperado: una entrada que contenga los cuatro productos, en las posiciones 1 a 4.
5. Cambie `infinite` a `false` y repita el proceso. El evento ahora incluye correctamente todos los productos visibles.

## Workaround

Establezca `infinite: false` en el bloque `slider-layout` que envuelve el estante. Esto se ha comprobado: con el bucle infinito desactivado, las impresiones de todos los productos visibles se registran correctamente.

Tenga en cuenta que esto modifica la navegación para los compradores: el carrusel se detiene en el último producto en lugar de volver al primero. Las tiendas que dependen del comportamiento del bucle tendrán que elegir entre datos de impresiones precisos y el carrusel infinito hasta que se publique la solución.