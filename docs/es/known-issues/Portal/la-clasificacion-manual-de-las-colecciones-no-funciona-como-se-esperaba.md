---
title: 'La clasificación manual de las colecciones no funciona como se esperaba.'
slug: la-clasificacion-manual-de-las-colecciones-no-funciona-como-se-esperaba
status: PUBLISHED
createdAt: 2020-10-09T18:09:41.000Z
updatedAt: 2026-10-06T18:40:38.000Z
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

1. Usando el control ContentPlaceHolder de tipo colección;

2. Usando una búsqueda o el contexto de búsqueda de una página de destino con el control SearchResult (en este caso, se debe usar la cadena de consulta _O=productClusterOrder_{ProductClusterId}%20asc_).

En ambos casos, el sistema admite la ordenación de hasta **30** SKU de la colección. Cuando la colección tiene más de 30 SKU, todos los SKU sobrantes se mostrarán ANTES que los que se encuentren entre el 1 y el 30.

## Simulación

1. Crear una colección;

2. Insertar manualmente más de 30 SKU;

3. Guardar la colección;

4. Crear una plantilla con ContentPlaceHolder o SearchResult; 5. Establezca la asociación del ContentPlaceHolder con la colección o configure la búsqueda en el contexto de búsqueda de carpetas;

6. Espere unos minutos a que caduque la caché;

7. Acceda a la página y observe que los primeros elementos ordenados serán los que se coloquen después del 30.

## Workaround

- Utilice colecciones con solo 30 elementos si es esencial aplicar la ordenación manual;

- Utilice el campo Fecha de publicación, registre las fechas en la secuencia deseada y use este campo para ordenar la colección.