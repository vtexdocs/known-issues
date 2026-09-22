---
title: 'La función de autocompletar no muestra sugerencias de búsqueda durante la primera interacción después de que se renderiza la página de perfil de usuario (PLP).'
slug: la-funcion-de-autocompletar-no-muestra-sugerencias-de-busqueda-durante-la-primera-interaccion-despues-de-que-se-renderiza-la-pagina-de-perfil-de-usuario-plp
status: PUBLISHED
createdAt: 2025-04-09T15:44:09.000Z
updatedAt: 2026-09-22T16:54:37.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: autocomplete-does-not-display-search-suggestions-during-the-first-interaction-after-plp-renders
locale: es
kiStatus: Backlog
internalReference: 1208038
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La función de autocompletar muestra "Sin sugerencias" durante la primera interacción tras la carga de la página de perfil de usuario (PLP), incluso cuando el término buscado puede generar sugerencias de búsqueda.

## Simulación

Siga los siguientes pasos para simular el escenario:

1. Busque un término.

2. Tras la carga de la PLP, haga clic en la barra de búsqueda.

Al hacer clic en la barra de búsqueda, la función de autocompletar muestra "Sin sugerencias".

Para comprobar que el comportamiento no es el esperado, haga clic fuera de la barra de búsqueda e interactúe con ella haciendo clic de nuevo. La función de autocompletar mostrará sugerencias de búsqueda.

## Workaround

N/A