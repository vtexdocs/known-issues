---
title: 'Pesquisar API não retornando mostrarIfNotAvailable=true SKUs for &fq=specificationFilter queries.'
id: 7p26JmS8pyPA8H0b1QJHyU
status: PUBLISHED
createdAt: 2022-06-28T16:55:27.329Z
updatedAt: 2024-02-16T20:29:43.164Z
publishedAt: 2024-02-16T20:29:43.164Z
firstPublishedAt: 2022-06-28T16:55:28.384Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: search-api-not-returning-showifnotavailabletrue-skus-for-fqspecificationfilter-queries
locale: pt
kiStatus: No Fix
internalReference: 336896
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Nossas rotas de busca devem exibir informações sobre os produtos marcados como showIfNotAvailable=true.

Entretanto, ao utilizar consultas de especificação sku, como `&fq=specificationFilter_:` para uma determinada SKU que tem essa especificação, que não está disponível, mas ainda mostrando na loja, a resposta na API será vazia, o que diverge do comportamento padrão das demais consultas da API para a /search/



## Simulação


1) Criar um sku que tenha uma especificação sku.
2) Torná-lo indisponível, mas que ainda esteja presente na loja.
3) Tente pesquisar utilizando a `&fq=specificationFilter_:` query on a /search/ API.
4) Nada será refinado (a SKU que você acabou de configurar deve ser!)



## Workaround


Usando as especificações como especificações do produto e/ou usando outros parâmetros de busca para encontrar os skus.

