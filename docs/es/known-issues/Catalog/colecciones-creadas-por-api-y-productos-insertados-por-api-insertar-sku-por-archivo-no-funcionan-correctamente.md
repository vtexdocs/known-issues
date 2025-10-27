---
title: 'Colecciones creadas por API y Productos insertados por API Insertar SKU por Archivo no funcionan correctamente'
slug: colecciones-creadas-por-api-y-productos-insertados-por-api-insertar-sku-por-archivo-no-funcionan-correctamente
status: PUBLISHED
createdAt: 2025-10-16T19:53:04.360Z
updatedAt: 2025-10-16T19:53:04.360Z
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


Hoy tenemos algunas formas de crear y añadir productos a una colección. Podemos usar nuestro nuevo Collection Adimn, nuestro legacy collection admin y podemos usar API para crear colecciones y añadir productos a una colección. Pero tenemos un problema cuando creamos colecciones a través de la API y añadimos productos a esta colección utilizando la ruta `api/catalog/pvt/collection//stockkeepingunit/importinsert`. Con esta API podemos añadir productos a la colección utilizando una hoja de cálculo.

El problema se produce cada vez que creamos una colección mediante la API e intentamos utilizar esta API `importinsert` para añadir productos. Los productos no están disponibles en la colección creada.


#### Simulación


- Crear una colección mediante API:

    curl --location -g --request POST 'https://.vtexcommercestable.com.br/api/catalog/pvt/collection?an=' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'x-vtex-api-appKey: vtexappkey-appvtex' \--header 'x-vtex-api-appToken: ' \--data-raw '{ "Nombre": "testando", "Searchable": false, "Highlight": false, "DateFrom": "2017-09-27T10:47:00", "DateTo": "2027-09-27T10:47:00"}'


- Añade productos a esta colección con la API de importación e inserción:

    curl --location -g --request POST 'https://.vtexcommercestable.com.br/api/catalog/pvt/collection//stockkeepingunit/importinsert' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'VtexIdclientAutCookie: ' \--form 'file=@"/ruta/a/archivo"'

- Después de unos 30 minutos, compruebe los productos sin la información de recogida y la página de recogida que no muestra los productos:

    curl --location -g --request GET 'https://.vtexcommercestable.com.br/api/catalog_system/pub/products/search/?fq=H:' \--header 'Accept: application/json' \--header 'Content-Type: application/json'
## Workaround



Hay dos soluciones viables para este problema:

1️⃣ Añadir productos a las colecciones creadas por la API mediante la carga de hojas de cálculo del administrador o utilizar la API Insertar SKU en subcolección para insertar SKU en las colecciones:

Para añadir SKUs a colecciones usando API, tenemos que seguir estos pasos:

Crear colección:

    curl --location -g --request POST 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/collection?an=(https://catalog.vtexcommercestable.com.br/api/catalog/pvt/collection?an=)' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'x-vtex-api-appKey: vtexappkey-appvtex' \--header 'x-vtex-api-appToken: ' \--header 'Cookie: janus_sid=7026383e-2070-4b68-a2c2-59cf729ec0da' \--data-raw '{ "Nombre": "testando", "Searchable": false, "Highlight": false, "DateFrom": "2017-09-27T10:47:00", "DateTo": "2027-09-27T10:47:00"}'

Crear subcolección:

    curl --location -g --request POST 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection?an=(https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection?an=)' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'VtexIdclientAutCookie: ' \--header 'Cookie: janus_sid=7026383e-2070-4b68-a2c2-59cf729ec0da' \--data-raw '{ "CollectionId": 173, "Name": "Inclusive 1", "Type": "Inclusive", "PreSale": false, "Release": false}'

Insertar SKU en subcolección:

    curl --location -g --request POST 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection//stockkeepingunit?an=(https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection//stockkeepingunit?an=)' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'VtexIdclientAutCookie: ' \--header 'Cookie: janus_sid=7026383e-2070-4b68-a2c2-59cf729ec0da' \--data-raw '{ "SkuId": 2000037}'


2️⃣ También existe la posibilidad de utilizar el `api/catalog/pvt/collection//stockkeepingunit/importinsert` y luego, una vez completada la importación y añadidos todos los productos, ir manualmente, vía UI y actualizar todos los datos de la colección, ya sea cambiando su nombre o su fecha de inicio/fin.

De esta forma, los productos de la colección que se acaban de insertar se verán forzados a reindexarse y se les añadirán los datos relacionados con la colección, permitiendo la correcta visualización de la información necesaria.%0A