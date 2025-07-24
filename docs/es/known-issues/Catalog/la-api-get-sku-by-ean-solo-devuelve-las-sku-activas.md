---
title: 'La API GET SKU by EAN sólo devuelve las SKU activas'
id: 5NiuB1Lgf3CM5kXSSVdfuu
status: PUBLISHED
createdAt: 2020-03-23T15:10:23.842Z
updatedAt: 2023-10-24T17:25:02.496Z
publishedAt: 2023-10-24T17:25:02.496Z
firstPublishedAt: 2020-03-27T19:32:53.914Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: get-sku-by-ean-api-returns-only-active-skus
locale: es
kiStatus: Fixed
internalReference: 699007
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Cuando se utiliza la ruta https://..com.br/api/catalog_system/pvt/sku/stockkeepingunitbyean/, la respuesta de la API devuelve el mensaje "SKU not Found" o "Dados inconsistentes no cadastro de EAN para esse sku" cuando el SKU está inactivo o no está disponible en el indexador, incluso cuando ese SKU existe con ese EAN en la tienda.



## Simulación



Llame a la ruta https://..com.br/api/catalog_system/pvt/sku/stockkeepingunitbyean/ para un SKU inactivo/no disponible con EAN.



## Workaround




Utilice las rutas **GET SKU by RefID** o **GET SKU by ID** para obtener la misma información.

