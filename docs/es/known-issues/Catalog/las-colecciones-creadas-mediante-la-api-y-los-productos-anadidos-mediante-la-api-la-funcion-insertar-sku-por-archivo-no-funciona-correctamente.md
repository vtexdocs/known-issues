---
title: 'Las colecciones creadas mediante la API y los productos añadidos mediante la API; la función «Insertar SKU por archivo» no funciona correctamente'
slug: las-colecciones-creadas-mediante-la-api-y-los-productos-anadidos-mediante-la-api-la-funcion-insertar-sku-por-archivo-no-funciona-correctamente
status: PUBLISHED
createdAt: 2021-11-18T13:11:38.000Z
updatedAt: 2023-10-04T19:50:34.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: collections-created-by-api-and-products-inserted-by-api-insert-sku-by-file-not-working-properly
locale: es
kiStatus: Backlog
internalReference: 470966
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Hoy en día disponemos de varias formas de crear y añadir productos a una colección. Podemos utilizar nuestro nuevo administrador de colecciones, el administrador de colecciones heredado, o bien la API para crear colecciones y añadir productos a ellas. Sin embargo, surge un problema al crear colecciones a través de la API y añadir productos a dicha colección utilizando la ruta `api/catalog/pvt/collection//stockkeepingunit/importinsert`. Con esta API podemos añadir productos a la colección utilizando una hoja de cálculo.

El problema se produce cada vez que creamos una colección mediante la API e intentamos utilizar esta API `importinsert` para añadir productos. Los productos no quedan disponibles en la colección creada.

## Simulación

- Crear una colección mediante la API:

 curl --location -g --request POST 'https://.vtexcommercestable.com.br/api/catalog/pvt/collection?an=' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'x-vtex-api-appKey: vtexappkey-appvtex' \--header 'x-vtex-api-appToken:  ' \--data-raw '{    "Name": "testando",    "Searchable": false,    "Highlight": false,    "DateFrom": "2017-09-27T10:47:00",    "DateTo": "2027-09-27T10:47:00"}'


- Añade productos a esta colección con la API Import Insert:

 curl --location -g --request POST 'https://.vtexcommercestable.com.br/api/catalog/pvt/collection//stockkeepingunit/importinsert' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'VtexIdclientAutCookie: ' \--form 'file=@"/path/to/file"'

- Tras unos 30 minutos, comprueba que los productos no incluyen la información de la colección y que la página de la colección no muestra los productos:

    curl --location -g --request GET 'https://.vtexcommercestable.com.br/api/catalog_system/pub/products/search/?fq=H:' \--header 'Accept: application/json' \--header 'Content-Type: application/json'

## Workaround

Hay dos soluciones alternativas viables para este problema:

1️⃣ Añade productos a las colecciones creadas mediante la API utilizando la función de carga de hojas de cálculo de Admin o utiliza la API Insertar SKU en subcolección para insertar SKU en las colecciones:

Para añadir SKU a las colecciones mediante la API, debemos seguir estos pasos:

Crear colección:

 curl --location -g --request POST 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/collection?an=(https://catalog.vtexcommercestable.com.br/api/catalog/pvt/collection?an=)' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'x-vtex-api-appKey: vtexappkey-appvtex' \--header 'x-vtex-api-appToken: ' \--header 'Cookie: janus_sid=7026383e-2070-4b68-a2c2-59cf729ec0da' \--data-raw '{ "Name": "testando", "Searchable": false, "Highlight": false, "DateFrom": "2017-09-27T10:47:00", "DateTo": "2027-09-27T10:47:00"}'

Crear subcolección:

    curl --location -g --request POST 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection?an=(https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection?an=)' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'VtexIdclientAutCookie: ' \--header 'Cookie: janus_sid=7026383e-2070-4b68-a2c2-59cf729ec0da' \--data-raw '{ "CollectionId": 173, "Name": "Inclusive 1", "Type": "Inclusive", "PreSale": false, "Release": false}'

Insertar SKU en la subcolección:

 curl --location -g --request POST 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection//stockkeepingunit?an=(https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection//stockkeepingunit?an=)' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'VtexIdclientAutCookie: ' \--header 'Cookie: janus_sid=7026383e-2070-4b68-a2c2-59cf729ec0da' \--data-raw '{ "SkuId": 2000037}'


2️⃣ También existe la posibilidad de utilizar `api/catalog/pvt/collection//stockkeepingunit/importinsert` y, una vez completada la importación y añadidos todos los productos, actualizar manualmente, a través de la interfaz de usuario, todos los datos de la colección, ya sea cambiando su nombre o su fecha de inicio/fin.

De esta forma, los productos de la colección que se acaban de insertar se reindexarán de forma forzada y se les añadirán los datos relacionados con la colección, lo que permitirá mostrar correctamente la información necesaria.%0A