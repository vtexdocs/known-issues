---
title: 'A API permite registrar vários EANs para o mesmo SKU'
slug: a-api-permite-registrar-varios-eans-para-o-mesmo-sku
status: PUBLISHED
createdAt: 2020-09-09T18:51:02.000Z
updatedAt: 2026-03-11T22:19:03.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: api-allows-registering-many-eans-to-the-same-sku
locale: pt
kiStatus: Fixed
internalReference: 286097
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

É possível registrar vários EANs para o mesmo SKU por meio da API (método InsertSkuEanAsync no Splunk) e por meio de outro método ainda não identificado.
Quando temos vários EANs para o mesmo SKU, obtemos o último valor inserido na exportação do arquivo e, na interface, vemos o valor do EAN que aparece por último na ordem alfabética de todos os valores registrados.

## Simulação

- crie um SKU e registre um EAN = 3.
- com a API GET `https://.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean`, verifique se esse valor de EAN (3) é a única entrada.
- insira um novo EAN = 2 neste SKU via POST `https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean/?an=`
- com a API GET `https://.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean`, verifique se agora o EAN é uma matriz com dois valores, em ordem alfabética {2, 3}
- acesse a interface do catálogo e verifique se o EAN exibido para este SKU é 3 (o último da matriz)
- exporte as informações do SKU e verifique se o EAN exibido é 2 (o último registrado)
- se você definir agora um novo EAN pela interface do catálogo, digamos "1", ele excluirá o último EAN da matriz e incluirá esse novo valor. Assim, a API GET retornaria {1, 2} para o nosso exemplo. Com 2 sendo exibido na interface e 1 nos arquivos exportados.

## Workaround

Obtenha uma lista dos IDs de SKU problemáticos e seus EANs corretos, limpe todos os EANs desses SKUs com `DELETE ``https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean?an=`` ` e, em seguida, insira os EANs corretos nessas SKUs por meio da API `POST ``https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit//ean/?an=`` `.