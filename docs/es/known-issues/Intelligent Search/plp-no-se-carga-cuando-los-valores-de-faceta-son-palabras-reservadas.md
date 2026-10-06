---
title: 'PLP no se carga cuando los valores de faceta son palabras reservadas.'
slug: plp-no-se-carga-cuando-los-valores-de-faceta-son-palabras-reservadas
status: PUBLISHED
createdAt: 2025-03-13T16:00:07.000Z
updatedAt: 2026-10-06T17:22:03.000Z
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

Las palabras reservadas son palabras predefinidas en lenguajes de programación con significados y funciones específicas.

Algunos valores de faceta pueden generar un error cuando sus valores (como el nombre de una categoría o el valor de una especificación) son palabras reservadas, lo que impide que la página se cargue correctamente.

Por ejemplo, en el caso de una especificación con el valor `constructor`, debería generar un elemento de faceta en la PLP, pero genera un error.

## Simulación

- Abra una PLP donde la especificación aparezca como una faceta y su valor sea una palabra reservada.

- La PLP se cargará con errores.

## Workaround

Siga las instrucciones de la página «Agregar especificaciones o campos de SKU» para cambiar el valor de la especificación por otro.