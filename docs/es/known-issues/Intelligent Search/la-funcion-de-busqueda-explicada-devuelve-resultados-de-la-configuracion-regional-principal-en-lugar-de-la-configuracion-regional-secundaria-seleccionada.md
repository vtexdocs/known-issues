---
title: 'La función de búsqueda explicada devuelve resultados de la configuración regional principal en lugar de la configuración regional secundaria seleccionada.'
slug: la-funcion-de-busqueda-explicada-devuelve-resultados-de-la-configuracion-regional-principal-en-lugar-de-la-configuracion-regional-secundaria-seleccionada
status: PUBLISHED
createdAt: 2026-03-10T17:16:30.000Z
updatedAt: 2026-09-22T16:51:07.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: explained-search-returns-results-from-main-locale-instead-of-selected-secondary-locale
locale: es
kiStatus: Backlog
internalReference: 1376133
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En **Administración > Tienda > Búsqueda Inteligente > Búsqueda Explicada**, el resultado de la búsqueda recupera productos de la configuración regional principal en lugar de la secundaria cuando esta última está seleccionada.

## Simulación

1. En la administración de VTEX, vaya a **Tienda > Búsqueda Inteligente > Búsqueda Explicada**.

2. En el selector de **Configuración Regional** de la **Búsqueda Explicada**, seleccione la configuración regional secundaria (por ejemplo, `es-AR`).

3. Busque un término que cumpla con lo siguiente:

- Que los productos estén indexados y visibles en ambas configuraciones regionales, pero

- Que presenten diferencias claras entre las configuraciones regionales (por ejemplo, nombres traducidos).

4. Observe que el resultado de la búsqueda recupera productos de la configuración regional principal (`en-US`), aunque la **configuración regional secundaria** (`es-AR`) esté seleccionada en la Búsqueda Explicada.

## Workaround

N/A