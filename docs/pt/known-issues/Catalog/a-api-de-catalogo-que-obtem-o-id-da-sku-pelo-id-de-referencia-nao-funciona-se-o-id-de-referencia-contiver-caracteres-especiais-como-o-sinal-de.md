---
title: 'A API de catálogo que obtém o ID da SKU pelo ID de referência não funciona se o ID de referência contiver caracteres especiais, como o sinal de +.'
slug: a-api-de-catalogo-que-obtem-o-id-da-sku-pelo-id-de-referencia-nao-funciona-se-o-id-de-referencia-contiver-caracteres-especiais-como-o-sinal-de
status: PUBLISHED
createdAt: 2021-11-11T21:31:05.000Z
updatedAt: 2026-09-22T21:26:19.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-api-get-sku-id-by-ref-id-dont-work-if-the-refid-has-special-characters-such-as
locale: pt
kiStatus: Fixed
internalReference: 467501
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A API do Catálogo para obter o ID da SKU pelo ID de referência (`/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/`) não funciona se o ID de referência contiver caracteres especiais, como o sinal de +.

## Simulação

- Faça a seguinte requisição:

curl --location --request GET 'https://merch.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/12345677+981' \--header 'Content-Type: application/json' \--header 'VtexIdclientAutCookie: '

A resposta será um erro 404:

![](https://vtexhelp.zendesk.com/attachments/token/R6P3hOQ0Yc1hI0HTkfd7fBgme/?name=inline1992436210.png)

## Workaround

- Use outras APIs do Catálogo para obter informações de SKU, por exemplo: `api/catalog_system/pvt/sku/stockkeepingunitbyid/`OU `api/catalog_system/pvt/sku/stockkeepingunitbyalternateId/`
- Não utilize `+` no campo RefId

-