---
title: 'Falta la traducción del filtro de precio en la búsqueda inteligente'
slug: falta-la-traduccion-del-filtro-de-precio-en-la-busqueda-inteligente
status: PUBLISHED
createdAt: 2024-01-31T21:32:48.000Z
updatedAt: 2024-01-31T21:32:48.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: missing-translation-for-the-price-facetfilter-at-intelligent-search
locale: es
kiStatus: Backlog
internalReference: 974840
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La Búsqueda Inteligente no aplica la traducción al nombre del filtro o faceta «precio» para los idiomas adicionales cuando se consulta a través de la API REST.

El idioma principal sigue devolviendo la cadena esperada según su configuración interna, pero cualquier otro idioma devolverá «Precio» como valor fijo.

## Simulación

En una tienda con varios idiomas, configura las traducciones para el contexto de la Búsqueda inteligente a través del servicio de mensajes en los idiomas secundarios y realiza una consulta utilizando la API de facetas. Los valores de «Precio» no se tendrán en cuenta, mientras que sí funciona para cualquier otra etiqueta, como las categorías y la marca.

## Workaround

N/A