---
title: 'La búsqueda explicada devuelve resultados de la configuración regional principal en lugar de la configuración regional secundaria seleccionada.'
slug: la-busqueda-explicada-devuelve-resultados-de-la-configuracion-regional-principal-en-lugar-de-la-configuracion-regional-secundaria-seleccionada
status: PUBLISHED
createdAt: 2026-03-10T14:17:05.125Z
updatedAt: 2026-03-10T14:17:05.125Z
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

En **Admin > Tienda > Búsqueda inteligente > Búsqueda explicada**, el resultado de la búsqueda recupera productos de la configuración regional principal en lugar de la secundaria cuando se selecciona esta última.

## Simulación

1. En el Admin de VTEX, vaya a **Tienda > Búsqueda inteligente > Búsqueda explicada**.
2. En el selector **Idioma** de **Búsqueda explicada**, seleccione el idioma secundario (por ejemplo, `es-AR`). 3. Busque un término que tenga: - Productos indexados y visibles en ambos idiomas, pero - Diferencias claras entre los idiomas (por ejemplo, nombres traducidos).
4. Observe que el resultado de la búsqueda recupera productos de la configuración regional principal (`en-US`), aunque la **configuración regional secundaria** (`es-AR`) esté seleccionada en Búsqueda explicada.

## Workaround

N/A