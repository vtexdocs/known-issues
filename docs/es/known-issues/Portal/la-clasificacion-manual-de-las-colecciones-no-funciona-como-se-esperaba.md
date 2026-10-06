---
title: 'La clasificación manual de las colecciones no funciona como se esperaba.'
slug: la-clasificacion-manual-de-las-colecciones-no-funciona-como-se-esperaba
status: PUBLISHED
createdAt: 2020-10-09T18:09:41.000Z
updatedAt: 2026-10-06T18:33:43.000Z
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

La ordenación manual de colecciones no funciona como se espera. Existen dos maneras de ordenar SKU mediante una colección:

1. Usando el control de tipo colección ContentPlaceHolder;

2. Usando una búsqueda o el contexto de búsqueda de una página de destino con el control SearchResult (en este caso, se debe usar la cadena de consulta _O=productClusterOrder_{ProductClusterId}%20asc_).

En ambos casos, el sistema admite la ordenación de hasta **30** SKU de la colección. Cuando la colección tiene más de 30 SKU, todos los SKU sobrantes se listarán ANTES que los que se encuentren entre el 1 y el 30.

> Este comportamiento se observa en todas las tiendas VTEX, incluidas las desarrolladas con VTEX IO.

## Simulación

1. Crear una colección;

2. Insertar manualmente más de 30 SKU;

3. Guardar la colección;
4. Crea una plantilla con ContentPlaceHolder o SearchResult;

5. Asocia ContentPlaceHolder con la colección o configura la búsqueda en el contexto de búsqueda de carpetas;

6. Espera unos minutos a que caduque la caché;

7. Accede a la página y observa que los primeros elementos ordenados serán los que aparezcan después del puesto 30.

## Workaround

Como solución alternativa, disponemos de las siguientes opciones:

- Utiliza colecciones con solo 30 elementos, si es imprescindible aplicar la ordenación manual;

- Utiliza el campo Fecha de publicación, registra las fechas en el orden deseado y usa este campo para ordenar la colección.