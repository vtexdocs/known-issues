---
title: 'Erro de impasse ao usar as APIs do Catálogo'
slug: erro-de-impasse-ao-usar-as-apis-do-catalogo
status: PUBLISHED
createdAt: 2023-07-14T18:28:58.000Z
updatedAt: 2023-07-19T14:16:24.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: deadlocked-error-when-using-catalog-apis
locale: pt
kiStatus: Backlog
internalReference: 862626
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O uso constante de algumas APIs de catálogo, como a "Adicionar SKU à subcoleção", ou a tentativa de vincular produtos por meio do módulo de sugestões pode causar erros de impasse para o comerciante.

Os erros de impasse podem ocorrer quando há conflito na gravação dos dados no banco de dados. Portanto, ao fazer muitas solicitações à API em um curto período de tempo, esses erros se tornam mais evidentes.

## Simulação

1. Use, por exemplo, a API “Adicionar SKU à subcoleção” (https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/subcollection/-subCollectionId-/stockkeepingunit) para adicionar muitos SKUs a uma coleção em um curto período de tempo;
2. Verifique se podem ocorrer erros, como impasses.

## Workaround

Tente fazer menos solicitações por minuto.