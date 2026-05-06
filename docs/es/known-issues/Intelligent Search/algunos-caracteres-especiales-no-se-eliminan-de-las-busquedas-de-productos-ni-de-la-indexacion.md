---
title: 'Algunos caracteres especiales no se eliminan de las búsquedas de productos ni de la indexación'
slug: algunos-caracteres-especiales-no-se-eliminan-de-las-busquedas-de-productos-ni-de-la-indexacion
status: PUBLISHED
createdAt: 2021-06-16T12:59:54.000Z
updatedAt: 2023-10-27T00:24:02.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: some-special-characters-are-not-stripped-from-product-searches-or-indexing
locale: es
kiStatus: Backlog
internalReference: 382382
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunos caracteres especiales no se eliminan por completo de las palabras clave buscadas ni de la indexación de productos, lo que puede afectar a las búsquedas en determinados casos.

Los caracteres conocidos que provocan este problema son las comas (`,`), los puntos (`.`) y los dos puntos (`:`). El resto de caracteres suelen ignorarse y no generan problemas.

Al registrar un producto, las comas y los puntos al final de las palabras se eliminan durante la indexación del producto, pero si se encuentran en medio de una palabra, se conservan. Las palabras clave se separan por espacios.

Durante la búsqueda, los dos puntos son un valor reservado e invalidarán toda la consulta de texto.

## Simulación

En el caso de las comas y los puntos, un campo de producto que contenga un valor con palabras clave separadas por comas, como `"car,specialbrand,blue"`, se leerá como una sola palabra. Si se busca `specialbrand`, no se encontrará este producto.

En el caso de los dos puntos, un producto con el nombre `"red wine: special version"` se puede encontrar buscando por `wine`, pero buscar por `wine: special version` no funcionará. La búsqueda completa no será válida y no se aplicarán filtros de texto.

## Workaround

En el caso de las comas y los puntos, es necesario incluir un espacio después del carácter para separar las palabras clave.

En el caso de las búsquedas con dos puntos, no hay solución alternativa.