---
title: 'La API permite registrar varios códigos EAN para la misma referencia de producto'
slug: la-api-permite-registrar-varios-codigos-ean-para-la-misma-referencia-de-producto
status: PUBLISHED
createdAt: 2020-09-09T18:51:02.000Z
updatedAt: 2026-03-11T22:19:03.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: api-allows-registering-many-eans-to-the-same-sku
locale: es
kiStatus: Fixed
internalReference: 286097
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Es posible registrar varios EAN para un mismo SKU a través de la API (método InsertSkuEanAsync en Splunk) y mediante otro método aún sin identificar.
Cuando hay varios EAN para un mismo SKU, en la exportación de archivos se obtiene el último valor introducido, mientras que en la interfaz se muestra el EAN que ocupa el último lugar en el orden alfabético de todos los valores registrados.

## Simulación

- Crea una SKU y registra un EAN = 3.
- Con la API GET `https://.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean`, comprueba que este valor EAN (3) es la única entrada.
- Inserta un nuevo EAN = 2 en este SKU mediante el POST `https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean/?an=`
- Con la API GET `https://.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean`, comprueba que ahora el EAN es una matriz con dos valores, en orden alfabético {2, 3}
- Ve a la interfaz del catálogo y comprueba que el EAN que se muestra para este SKU es 3 (el último de la matriz)
- exporta la información del SKU y comprueba que el EAN que se muestra es 2 (el último registrado)
- si ahora estableces un nuevo EAN a través de la interfaz del catálogo, digamos «1», se excluirá el último EAN de la matriz e incluirá este nuevo valor. Por lo tanto, la API GET devolvería {1, 2} en nuestro ejemplo. Mostrándose el 2 en la interfaz y el 1 en los archivos exportados.

## Workaround

Obtenga una lista de los ID de SKU problemáticos y sus EAN correctos, elimine todos los EAN de estos SKU con `DELETE ``https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean?an=`` ` y, a continuación, inserte los EAN correctos en estos SKU a través de la API `POST ``https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean/?an=`` `.