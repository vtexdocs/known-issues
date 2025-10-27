---
title: 'No se puede seleccionar la configuración regional del sinónimo en la búsqueda inteligente multilingüe.'
slug: no-se-puede-seleccionar-la-configuracion-regional-del-sinonimo-en-la-busqueda-inteligente-multilingue
status: PUBLISHED
createdAt: 2025-08-14T18:13:42.121Z
updatedAt: 2025-08-14T18:13:42.121Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: cannot-select-the-locale-for-synonym-in-multilanguage-intelligent-search
locale: es
kiStatus: Backlog
internalReference: 1276576
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Para tiendas multilingües, la Búsqueda Inteligente permite seleccionar la configuración regional o establecer que se aplique a todas las configuraciones regionales al crear/editar sinónimos.

Pero, cuando la tienda está configurada para 2 (dos) locales, el formulario de creación/edición de un sinónimo se atasca y sólo permite la opción `Todas`, lo que significa que el sinónimo se aplicará a todas las locales.


#### Simulación


Los pasos para simular el Know Issue son:

- Abre el formulario para crear o editar un sinónimo.
- En el campo _Local_, selecciona cualquier opción que no sea **Todos**.

**Resultado esperado:** El campo _Locale_ cambia a la opción seleccionada.
**Resultado real:** El campo _Locale_ no cambia a la opción seleccionada.

## Workaround


N/A



