---
title: 'La paginación de la página de búsqueda no se reinicia al cambiar el contexto de búsqueda'
slug: la-paginacion-de-la-pagina-de-busqueda-no-se-reinicia-al-cambiar-el-contexto-de-busqueda
status: PUBLISHED
createdAt: 2023-07-06T19:54:15.000Z
updatedAt: 2023-07-06T19:58:46.000Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: pagination-on-searchpage-doesnt-reset-when-changing-search-context
locale: es
kiStatus: Scheduled
internalReference: 857392
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al navegar por una página concreta de una PLP, cargar más resultados y cambiar de sección para navegar por otro departamento, se mantendrá el parámetro de paginación y los resultados de la búsqueda comenzarán en la nueva categoría, dentro de la misma página en la que nos encontrábamos anteriormente

## Simulación

Sigue estos pasos:


- Vaya a: https://starter.vtex.app/computer---software
- Haga clic en «Cargar más productos» (el parámetro de página de su URL cambiará)
- Haga clic en un departamento diferente (por ejemplo, «Tecnología»)
- Compruebe que la página de tecnología comenzará con la paginación en la que se encontraba anteriormente

## Workaround

No hay ninguna solución alternativa disponible.