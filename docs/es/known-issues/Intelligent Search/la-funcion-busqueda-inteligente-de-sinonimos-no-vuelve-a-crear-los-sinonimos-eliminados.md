---
title: 'La función «Búsqueda inteligente de sinónimos» no vuelve a crear los sinónimos eliminados'
slug: la-funcion-busqueda-inteligente-de-sinonimos-no-vuelve-a-crear-los-sinonimos-eliminados
status: PUBLISHED
createdAt: 2025-04-15T17:30:12.000Z
updatedAt: 2026-05-11T17:54:35.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-synonyms-does-not-recreate-deleted-synonyms
locale: es
kiStatus: Fixed
internalReference: 1211321
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La función «Búsqueda inteligente de sinónimos» no vuelve a crear un sinónimo tras eliminarlo.

Este comportamiento se produce al crear o importar un sinónimo que ya ha sido eliminado.

## Simulación

Siga los pasos que se indican a continuación para simular la situación:


1. Elimine un sinónimo.
2. A continuación, intente volver a importar o crear el sinónimo.


Intelligent Search Synonyms recargará la página sin crear el sinónimo.

## Workaround

N/A