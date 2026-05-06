---
title: 'La limpieza completa del catálogo no activa una nueva indexación de la Búsqueda inteligente'
slug: la-limpieza-completa-del-catalogo-no-activa-una-nueva-indexacion-de-la-busqueda-inteligente
status: PUBLISHED
createdAt: 2021-10-14T15:22:47.000Z
updatedAt: 2023-03-13T12:34:54.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-fullcleanup-does-not-trigger-a-new-intelligent-search-indexation
locale: es
kiStatus: Fixed
internalReference: 449763
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al ejecutar una limpieza completa (https://{AccountName}.myvtex.com/admin/Site/fullcleanup.aspx) en el catálogo, el servidor de difusión no envía la notificación de actualización al indexador de Intelligent Search, y los datos de los productos pueden quedar desactualizados, lo que provoca discrepancias entre el contenido de la página de producto (PDP) y la página de lista de productos (PLP).

## Simulación

Ejecute una limpieza completa en el Catálogo y los productos eliminados seguirán activos en la Búsqueda Inteligente.

## Workaround

VTEX no recomienda eliminar productos del Catálogo; una mejor forma de abordar esta situación es marcar los productos como Inactivos.

Si es necesaria una limpieza completa, llame al Soporte de VTEX y solicite una indexación forzada en la Búsqueda Inteligente.