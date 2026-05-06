---
title: 'A API de pesquisa não aceita caracteres especiais'
slug: a-api-de-pesquisa-nao-aceita-caracteres-especiais
status: PUBLISHED
createdAt: 2023-02-15T12:39:00.000Z
updatedAt: 2023-02-28T18:19:04.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: search-api-does-not-accept-special-characters
locale: pt
kiStatus: Backlog
internalReference: 754363
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A API de pesquisa do catálogo, documentada aqui: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search/-search-, não aceita termos com caracteres especiais, como apóstrofo ' ou aspas ".

O erro retornado em consultas como essa é: `Bad Request! Scripts are not allowed!`

## Simulação

1. Tente usar a API de pesquisa com um termo que contenha ', por exemplo: GET https://{accountName}.{environment}.com.br/api/catalog_system/pub/products/search?ft=anyterm'
2. Verifique se a mensagem de erro é exibida.

## Workaround

Não há solução alternativa.