---
title: 'La función de autocompletado en la búsqueda no siempre se actualiza cuando se modifica varias veces'
slug: la-funcion-de-autocompletado-en-la-busqueda-no-siempre-se-actualiza-cuando-se-modifica-varias-veces
status: PUBLISHED
createdAt: 2023-04-19T13:53:40.000Z
updatedAt: 2023-04-19T13:53:40.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: autocomplete-on-search-not-always-updating-when-changed-multiple-times
locale: es
kiStatus: Backlog
internalReference: 793275
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al buscar cualquier término sin pulsar Intro, la función de autocompletado muestra resultados de productos que contienen ese término.

El problema surge cuando se cambia este término varias veces sin pulsar Intro. Al final, la función de autocompletado deja de mostrar resultados.

## Simulación

1. En una cuenta que utilice la búsqueda del portal, intente buscar un término sin pulsar Intro;
2. Modifique este término y compruebe que las opciones de autocompletado también cambian;
3. Ahora siga modificándolo varias veces; al final, no aparecerá ninguna sugerencia en el autocompletado.

## Workaround

No hay ninguna solución alternativa