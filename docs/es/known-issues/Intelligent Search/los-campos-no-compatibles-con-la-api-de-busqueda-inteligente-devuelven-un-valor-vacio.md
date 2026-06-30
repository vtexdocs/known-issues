---
title: 'Los campos no compatibles con la API de búsqueda inteligente devuelven un valor vacío.'
slug: los-campos-no-compatibles-con-la-api-de-busqueda-inteligente-devuelven-un-valor-vacio
status: PUBLISHED
createdAt: 2024-05-14T00:02:59.000Z
updatedAt: 2026-06-29T18:14:06.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: unsupported-fields-by-the-intelligent-search-api-returning-empty
locale: es
kiStatus: Backlog
internalReference: 1032531
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La API de Búsqueda Inteligente se basa principalmente en la API de Búsqueda de Catálogo anterior por motivos de compatibilidad, pero no todas las propiedades devuelven la misma información. En algunos casos, es diferente o está vacía.

Algunas propiedades afectadas:

- ".items.attachments" (devuelve vacío)
- ".items.isKit" (siempre devuelve falso)
- ".items.kitItems" (devuelve vacío)
- ".items.estimatedDateArrival" (devuelve vacío)
- ".items.modalType" (devuelve vacío)
- ".items.images.imageText" (devuelve lo mismo que "imageLabel")

## Simulación

- Registrar el valor de un campo afectado en el módulo Catálogo.
- Comparar la respuesta del campo específico entre las API de Búsqueda de Catálogo y Búsqueda Inteligente.

## Workaround

N/A