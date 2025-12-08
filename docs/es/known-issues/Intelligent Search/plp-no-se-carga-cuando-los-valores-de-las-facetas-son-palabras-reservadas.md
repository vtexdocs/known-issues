---
title: 'PLP no se carga cuando los valores de las facetas son palabras reservadas'
slug: plp-no-se-carga-cuando-los-valores-de-las-facetas-son-palabras-reservadas
status: PUBLISHED
createdAt: 2025-12-08T14:49:57.292Z
updatedAt: 2025-12-08T14:49:57.292Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: plp-does-not-load-when-facet-values-are-reserved-words
locale: es
kiStatus: Backlog
internalReference: 1193294
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Las palabras reservadas son palabras predefinidas en los lenguajes de programación que tienen significados y funciones específicas.

Algunos valores de faceta pueden generar un error cuando sus valores (como un nombre de categoría o un valor de especificación) son palabras reservadas, lo que impide que la página se cargue correctamente.

Por ejemplo, en el caso de una especificación con el valor `constructor`, la especificación debería generar un elemento de faceta en el PLP, pero genera un error.


#### Simulación



- Abrir un PLP en el que la especificación aparezca como faceta y su valor sea una palabra reservada.
- El PLP se cargará con errores.

## Workaround


Siga las instrucciones de la página Añadir especificaciones o campos SKU para cambiar el valor de la especificación por otro.


