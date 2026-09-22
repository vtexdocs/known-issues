---
title: 'La API del catálogo Obtener ID de SKU POR ID de referencia no funciona si el RefId tiene caracteres especiales como +'
slug: la-api-del-catalogo-obtener-id-de-sku-por-id-de-referencia-no-funciona-si-el-refid-tiene-caracteres-especiales-como
status: PUBLISHED
createdAt: 2021-11-11T21:31:05.000Z
updatedAt: 2026-09-22T21:26:19.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-api-get-sku-id-by-ref-id-dont-work-if-the-refid-has-special-characters-such-as
locale: es
kiStatus: Fixed
internalReference: 467501
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La API de catálogo para obtener el ID de SKU por ID de referencia (`/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/`) no funciona si el ID de referencia contiene caracteres especiales como el signo +.

## Simulación

- Realice la siguiente solicitud:

curl --location --request GET 'https://merch.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/12345677+981' \--header 'Content-Type: application/json' \--header 'VtexIdclientAutCookie: '

La respuesta será un error 404:

![](https://vtexhelp.zendesk.com/attachments/token/R6P3hOQ0Yc1hI0HTkfd7fBgme/?name=inline1992436210.png)

## Workaround

- Utilice otras API de catálogo para obtener información de SKU, por ejemplo: `api/catalog_system/pvt/sku/stockkeepingunitbyid/` O `api/catalog_system/pvt/sku/stockkeepingunitbyalternateId/`
- No utilice el signo `+` en el campo RefId