---
title: 'La disponibilidad del producto no se actualiza después de un cambio de código postal al regresar a una página visitada anteriormente usando el botón Atrás del navegador.'
slug: la-disponibilidad-del-producto-no-se-actualiza-despues-de-un-cambio-de-codigo-postal-al-regresar-a-una-pagina-visitada-anteriormente-usando-el-boton-atras-del-navegador
status: PUBLISHED
createdAt: 2026-10-27T18:28:12.000Z
updatedAt: 2026-10-27T18:28:12.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: product-availability-is-not-updated-after-a-zip-code-change-when-returning-to-a-previously-visited-page-using-the-browsers-back-button
locale: es
kiStatus: Backlog
internalReference: 1477964
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las tiendas Store Framework que utilizan Delivery Promise, cuando el comprador cambia el código postal mediante el "shopper-location-setter" y luego regresa a una página visitada anteriormente usando el botón Atrás del navegador, la página sigue mostrando la disponibilidad del producto del código postal anterior. La disponibilidad solo se actualiza después de recargar la página (F5).

El problema solo ocurre dentro de la misma pestaña del navegador, cuando se vuelve a visitar la página sin recargarla. Abrir la página en una pestaña nueva o visitarla por primera vez después de cambiar el código postal muestra la disponibilidad correcta. El cambio de código postal se aplica correctamente, pero los datos del producto ya cargados para la página visitada anteriormente no se vuelven a solicitar.

## Simulación

1. En una tienda Store Framework con Delivery Promise habilitado, abra una página con un estante de productos (por ejemplo, la página de inicio) utilizando un código postal que no tiene cobertura para algunos productos, por lo que se muestran como no disponibles. 2. Navegue a otra página (por ejemplo, una página de búsqueda) y cambie el código postal usando el selector de ubicación del comprador en el encabezado, a un código postal cubierto por esos productos.

3. Haga clic en el botón Atrás del navegador para volver a la página visitada anteriormente, sin recargarla.

**Comportamiento esperado:** El catálogo se actualiza y muestra la disponibilidad para el nuevo código postal.

**Comportamiento real:** El catálogo sigue mostrando la disponibilidad del código postal anterior hasta que se recarga la página.

## Workaround

N/A