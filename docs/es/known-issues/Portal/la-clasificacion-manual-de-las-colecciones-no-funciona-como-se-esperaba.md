---
title: 'La clasificación manual de las colecciones no funciona como se esperaba'
slug: la-clasificacion-manual-de-las-colecciones-no-funciona-como-se-esperaba
status: PUBLISHED
createdAt: 2020-10-09T18:09:41.000Z
updatedAt: 2025-07-30T22:40:37.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: manual-sorting-of-collections-doesnt-work-as-expected
locale: es
kiStatus: Fixed
internalReference: 295245
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La clasificación manual de colecciones no funciona como se esperaba. Hay dos formas de clasificar SKU utilizando una colección:


1. Utilizando la colección del tipo de control ContentPlaceHolder;
2. Utilizando una búsqueda o un contexto de búsqueda de una página de destino con el control SearchResult (en este caso, se debe utilizar la cadena de consulta _O=productClusterOrder_{ProductClusterId}%20asc_).

En ambos casos, el sistema admite la clasificación de hasta **30** SKU de la colección. Cuando la colección tiene más de 30 SKU, todos los SKU restantes aparecerán en la lista ANTES que los situados entre el 1 y el 30.


> Este comportamiento se observa en todas las tiendas VTEX, incluidas las desarrolladas con VTEX IO.

## Simulación

1. Crea una colección;
2. Inserta manualmente más de 30 SKU;
3. Guarda la colección;
4. Crea una plantilla con ContentPlaceHolder o SearchResult;
5. Configura la asociación del ContentPlaceHolder con la colección o establece la búsqueda en el contexto de búsqueda de la carpeta;
6. Espera unos minutos a que caduque la caché;
7. Accede a la página y observa que los primeros artículos ordenados serán los situados después del 30.

## Workaround

Como solución alternativa, disponemos de las siguientes opciones:


- Utilizar colecciones con solo 30 artículos, si es imprescindible aplicar una ordenación manual;
- Utilizar el campo «Fecha de lanzamiento», registrar las fechas en la secuencia deseada y utilizar el campo para ordenar la colección.