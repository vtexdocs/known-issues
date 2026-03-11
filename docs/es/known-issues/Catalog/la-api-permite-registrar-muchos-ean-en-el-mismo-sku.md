---
title: 'La API permite registrar muchos EAN en el mismo SKU.'
slug: la-api-permite-registrar-muchos-ean-en-el-mismo-sku
status: PUBLISHED
createdAt: 2026-03-11T19:05:18.169Z
updatedAt: 2026-03-11T19:05:18.169Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: api-allows-registering-many-eans-to-the-same-sku
locale: es
kiStatus: No Fix
internalReference: 286097
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Es posible registrar muchos EAN en el mismo SKU a través de la API (método InsertSkuEanAsync en Splunk) y a través de otro método aún no identificado. Cuando tenemos varios EAN para el mismo SKU, obtenemos el último valor insertado en la exportación del archivo y, en la interfaz, vemos el valor EAN que aparece en último lugar en el orden alfabético de todos los valores registrados.

## Simulación

- Crear un SKU y registrar un EAN = 3 . - Con la API GET `https://.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean`, comprobar que este valor EAN (3) es la única entrada.
- Inserte un nuevo EAN = 2 en este SKU a través del POST`https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean/?an= `
- Con la API GET `https://.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean`, comprueba que ahora el EAN es una matriz con dos valores, en orden alfabético {2, 3}. - Ve a la interfaz del catálogo y comprueba que el EAN que se muestra para este SKU es 3 (el último de la matriz).
- Exporte la información del SKU y compruebe que el EAN que se muestra es 2 (el último registrado). - Si ahora establece un nuevo EAN a través de la interfaz del catálogo, digamos «1», se excluirá el último EAN de la matriz y se incluirá este nuevo valor. Por lo tanto, la API GET devolvería {1, 2} para nuestro ejemplo. Con 2 mostrado en la interfaz y 1 mostrado en los archivos exportados.

## Workaround

Obtenga una lista de los ID de SKU problemáticos y sus EAN correctos, limpie todos los EAN de estos SKU con `DELETE ``https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean?an=`` ` y, a continuación, inserte los EAN correctos en estos SKU a través de la API `POST ``https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean/?an=`` `.