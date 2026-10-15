---
title: 'Mostrar más paginación repite los productos después de “Mostrar menos” volver a la página 1'
slug: mostrar-mas-paginacion-repite-los-productos-despues-de-mostrar-menos-volver-a-la-pagina-1
status: PUBLISHED
createdAt: 2026-10-16T00:06:11.000Z
updatedAt: 2026-10-16T00:06:35.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: show-more-pagination-repeats-products-after-show-less-back-to-page-1
locale: es
kiStatus: Backlog
internalReference: 1474360
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En una página de lista de productos (PLP) con paginación "Mostrar más", esta opción puede repetir productos que ya están en pantalla. Esto ocurre cuando el usuario abre una página distinta a la página 1 y pulsa "Mostrar menos" hasta llegar a la página 1. Al pulsar "Mostrar más" de nuevo, se carga la página 2, en lugar de la página siguiente a la última cargada.

## Simulación

1. Abra una página de lista de productos (PLP) con paginación "Mostrar más" en una página distinta a la 1 (por ejemplo, `?page=4`).

2. Pulse "Mostrar menos" hasta llegar a la página 1.
3. A continuación, pulse "Mostrar más" una vez.

**Comportamiento esperado:** Se solicita la página siguiente a la última cargada (página 5 en este ejemplo). No se repiten productos.

**Comportamiento real:** Los productos de la página 2 se cargan de nuevo y se añaden a la lista.

## Workaround

N/A