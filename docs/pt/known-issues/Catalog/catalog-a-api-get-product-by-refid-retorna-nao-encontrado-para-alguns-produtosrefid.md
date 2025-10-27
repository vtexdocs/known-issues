---
title: 'Catalog A API Get Product by RefId retorna "não encontrado" para alguns produtos/RefId'
slug: catalog-a-api-get-product-by-refid-retorna-nao-encontrado-para-alguns-produtosrefid
status: PUBLISHED
createdAt: 2025-10-16T20:27:20.712Z
updatedAt: 2025-10-16T20:27:20.712Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-api-get-product-by-refid-returns-not-found-for-some-productsrefid
locale: pt
kiStatus: Backlog
internalReference: 1157371
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A API Get Product by RefId retorna "não encontrado" para alguns produtos/RefId, mesmo com a referência registrada no catálogo da VTEX

✅️ se você pesquisar o refid na interface do usuário, ele retornará o produto
❌️ pesquisa usando a rota "/productgetbyrefid", retorna não encontrado

*Observação: esse problema também ocorre ao pesquisar skubyrefid
## Simulação



https://VTEX.vtexcommercestable.com.br/api/catalog_system/pvt/products/productgetbyrefid/

 ![](https://vtexhelp.zendesk.com/attachments/token/BksgxlJ6S9SSqeullsdgcvnUm/?name=image.png)

 ![](https://vtexhelp.zendesk.com/attachments/token/vpk2h8A9N3j95Cw6XF7CL3cbt/?name=image.png)

## Workaround


n/a