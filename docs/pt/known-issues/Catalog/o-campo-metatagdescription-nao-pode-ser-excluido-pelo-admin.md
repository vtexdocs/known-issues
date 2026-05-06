---
title: "O campo 'MetaTagDescription' não pode ser excluído pelo Admin"
slug: o-campo-metatagdescription-nao-pode-ser-excluido-pelo-admin
status: PUBLISHED
createdAt: 2024-02-08T20:20:42.000Z
updatedAt: 2024-02-08T20:20:42.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: metatagdescription-field-cannot-be-deleted-through-admin
locale: pt
kiStatus: Backlog
internalReference: 979691
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Há um comportamento inconsistente no campo `MetaTagDescription` no cadastro do produto, que não pode ser excluído pelo Painel de Administração, mas pode ser excluído por meio da API. No Painel de Administração, ao clicar em “salvar” com esse campo vazio, o valor do campo `Description` é copiado. Esse cenário não ocorre ao usar a API; o valor é excluído corretamente.

## Simulação

- Clique no produto para editar
- Exclua o valor do campo `MetaTagDescription`
- Clique em “salvar” e retorne ao produto
- Verifique se o valor original não está mais lá, mas o valor do campo `description` foi duplicado

## Workaround

Use a API para excluir o valor indesejado após atualizar o produto no Admin
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/product/-productId-?endpoint=put-/api/catalog/pvt/product/-productId-