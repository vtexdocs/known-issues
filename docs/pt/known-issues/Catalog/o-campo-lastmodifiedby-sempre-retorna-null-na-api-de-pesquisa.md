---
title: 'O campo lastModifiedBy sempre retorna "null" na API de pesquisa.'
slug: o-campo-lastmodifiedby-sempre-retorna-null-na-api-de-pesquisa
status: PUBLISHED
createdAt: 2025-10-16T20:47:50.299Z
updatedAt: 2025-10-16T20:47:50.299Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: lastmodifiedby-field-always-returns-null-in-search-api
locale: pt
kiStatus: Backlog
internalReference: 1211438
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A propriedade lastModifiedBy nas APIs de pesquisa atualmente não retorna nada, apenas um campo "nulo" ao usar as APIs de pesquisa, como https://my_account_name.vtexcommercestable.com.br/api/catalog_system/pvt/collection/search
## Simulação


1 - Ao editar uma coleção por qualquer meio, tente realizar qualquer alteração

2 - Usando o URL da API de pesquisa mencionado anteriormente, verifique o campo lastModifiedBy na resposta

3 - Esse campo sempre retornará nulo
## Workaround


-



