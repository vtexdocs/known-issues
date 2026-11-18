---
title: 'La PLP se muestra en blanco en la navegación hacia atrás después de la paginación, la regionalización de PDP y la recarga completa.'
slug: la-plp-se-muestra-en-blanco-en-la-navegacion-hacia-atras-despues-de-la-paginacion-la-regionalizacion-de-pdp-y-la-recarga-completa
status: PUBLISHED
createdAt: 2026-11-18T16:30:21.000Z
updatedAt: 2026-11-18T16:30:21.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: plp-renders-blank-on-back-navigation-after-pagination-pdp-regionalization-and-full-reload
locale: es
kiStatus: Backlog
internalReference: 1486412
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al regresar (botón Atrás del navegador) a una página de listado de productos paginada (PLP), se muestra un contenedor de listado vacío si el usuario ha paginado más allá de la página 1, ha abierto una página de detalles del producto (PDP) y ha introducido un código postal (regionalización) antes de volver.

## Simulación

1. Abra una PLP y navegue hasta la página 2 (la página 2 debe accederse en el lado del cliente, sin que se cargue la página completa).

2. Abra un producto de la lista (PDP).

3. En la PDP, introduzca un código postal para regionalizar la página. La página se recarga y se regionaliza correctamente.

4. Pulse el botón Atrás del navegador.

5. Resultado esperado: la PLP se muestra con el contenido de la página 2. Resultado real: la PLP está en blanco. La URL se devuelve sin `page=2`, no se realiza ninguna solicitud de búsqueda de documento PLP ni de producto, y el contenedor `div.render-container.render-route-store-search` está vacío. No aparece ningún error de JavaScript en la consola.

## Workaround

Actualiza la página. O bien, configura la paginación para que cargue la URL `page=2` como un documento completo, de modo que la página de detalles del producto (PLP) no se cargue desde el estado del cliente. Alternativas: 1. Fuerza a las tarjetas de producto de la PLP a navegar a la página de detalles del producto (PDP) cargando una página completa. 2. Como último recurso, detecta una PLP vacía al regresar y activa una recarga automática. Esta solución es poco fiable y solo debe usarse si las opciones anteriores no son viables.