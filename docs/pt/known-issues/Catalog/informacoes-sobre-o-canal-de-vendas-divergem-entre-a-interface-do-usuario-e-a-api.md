---
title: 'Informações sobre o canal de vendas divergem entre a interface do usuário e a API'
slug: informacoes-sobre-o-canal-de-vendas-divergem-entre-a-interface-do-usuario-e-a-api
status: PUBLISHED
createdAt: 2023-05-04T15:30:00.000Z
updatedAt: 2023-05-04T15:30:00.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sales-channel-info-divergent-between-ui-and-api
locale: pt
kiStatus: Backlog
internalReference: 802560
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Às vezes, as informações sobre o canal de vendas podem variar dependendo de onde o cliente está consultando.

## Simulação

Esse cenário não ocorre o tempo todo. Geralmente acontece quando a indexação falha ou não é recente.

Verifique o canal de vendas ao qual o produto pertence pela interface do usuário.
Verifique o canal de vendas ao qual o produto pertence por meio da API:
https://{accountName}.{environment}.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{skuId}
 ![](https://vtexhelp.zendesk.com/attachments/token/F8f1Y1fSQVsq5JubtoILmeZjz/?name=image.png)

## Workaround

Indexe o produto.