---
title: "O campo 'MetaTagDescription' não pode ser excluído por meio do Admin"
id: 7h0HlpuQnE8nWylgSWJ1lR
status: PUBLISHED
createdAt: 2024-02-08T20:21:00.735Z
updatedAt: 2024-02-08T20:21:01.739Z
publishedAt: 2024-02-08T20:21:01.739Z
firstPublishedAt: 2024-02-08T20:21:01.739Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: metatagdescription-field-cannot-be-deleted-through-admin
locale: pt
kiStatus: Backlog
internalReference: 979691
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Há um comportamento inconsistente no campo `MetaTagDescription` no registro do produto, que não pode ser excluído por meio do Admin, mas é possível excluir por meio da API. No Admin, ao clicar em "salvar" com esse campo vazio, o valor do campo `Description` é copiado. Esse cenário não acontece quando se usa a API, o valor é excluído corretamente.

## Simulação



- Clique no produto a ser editado
- Exclua o valor do campo `MetaTagDescription`
- Clique em "salvar" e retorne ao produto
- Verifique se o valor original não está mais lá, mas o valor da `description` foi duplicad

## Workaround


Use a API para excluir o valor indesejado após atualizar o produto no Admin
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/product/-productId-?endpoint=put-/api/catalog/pvt/product/-productId-




