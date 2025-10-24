---
title: 'Es posible que los productos no aparezcan en la búsqueda cuando se utilizan sinónimos en lenguas secundarias.'
slug: es-posible-que-los-productos-no-aparezcan-en-la-busqueda-cuando-se-utilizan-sinonimos-en-lenguas-secundarias
status: PUBLISHED
createdAt: 2025-08-12T17:19:25.705Z
updatedAt: 2025-08-12T17:19:25.705Z
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


Durante la indexación, la Búsqueda Inteligente aplica la normalización a los términos sinónimos, pero no normaliza los nombres de productos en idiomas secundarios al buscar esos sinónimos.

Debido a este desajuste, es posible que los sinónimos con acentos no coincidan con nombres de productos en idiomas no primarios, y que los productos afectados no aparezcan en los resultados de la búsqueda.

Idiomas afectados:

- `ca-ES` - catalán


#### Simulación


Siga los pasos que se indican a continuación para simular el escenario:
1 - Crear un sinónimo con acentos en la configuración regional afectada.
2 - Una vez reindexado el producto (**Admin** > **Historial de indexación**), busque los productos que contengan los sinónimos buscados.

El resultado no recupera los productos esperados cuando los términos originales del nombre del producto tienen acentos.

## Workaround


N/A


