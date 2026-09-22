---
title: 'Es posible que los productos no aparezcan en la búsqueda cuando se utilicen sinónimos en idiomas secundarios.'
slug: es-posible-que-los-productos-no-aparezcan-en-la-busqueda-cuando-se-utilicen-sinonimos-en-idiomas-secundarios
status: PUBLISHED
createdAt: 2025-07-30T19:40:12.000Z
updatedAt: 2026-09-22T16:56:17.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: products-may-not-appear-in-search-when-using-synonyms-in-secondary-languages
locale: es
kiStatus: Backlog
internalReference: 1268282
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Durante la indexación, la Búsqueda Inteligente aplica la normalización a los sinónimos, pero no normaliza los nombres de productos en idiomas secundarios al buscar dichos sinónimos.

Debido a esta discrepancia, los sinónimos con acentos pueden no coincidir con los nombres de productos en idiomas no principales, y los productos afectados podrían no aparecer en los resultados de búsqueda.

Idiomas afectados:

- `ca-ES` - catalán

## Simulación

Siga los pasos a continuación para simular el escenario:
1 - Cree un sinónimo con acentos en el idioma afectado.

2 - Después de que el producto se haya reindexado (**Administración** > **Historial de indexación**), busque productos que contengan los sinónimos buscados.

El resultado no muestra los productos esperados cuyos nombres originales contienen acentos.

## Workaround

N/A