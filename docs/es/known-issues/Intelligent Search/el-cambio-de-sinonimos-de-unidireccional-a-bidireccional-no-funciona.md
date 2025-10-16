---
title: El cambio de sinónimos de unidireccional a bidireccional no funciona
slug: el-cambio-de-sinonimos-de-unidireccional-a-bidireccional-no-funciona
status: PUBLISHED
createdAt: 2025-10-16T19:58:47.035Z
updatedAt: 2025-10-16T19:58:47.035Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: changing-synonyms-from-unidirectional-to-bidirectional-does-not-work
locale: es
kiStatus: Backlog
internalReference: 1149205
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cambiar el tipo de sinónimo de unidireccional a bidireccional no funciona. Después de guardar el cambio, volverá al tipo anterior.


#### Simulación



- Crea un sinónimo unidireccional con términos en ambos campos y guarda.
- Edita el tipo de sinónimo a bidireccional y guarda.
- Vuelve a editar el sinónimo y observa que sigue siendo unidireccional pero con los términos del segundo campo copiados en el primero.

## Workaround


Borra manualmente el segundo campo ("_Lo que la búsqueda devuelve además_") antes de cambiar el tipo a unidireccional.



