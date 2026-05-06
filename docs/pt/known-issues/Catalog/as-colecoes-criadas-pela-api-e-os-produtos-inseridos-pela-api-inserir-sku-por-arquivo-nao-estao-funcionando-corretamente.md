---
title: 'As coleções criadas pela API e os produtos inseridos pela API “Inserir SKU por arquivo” não estão funcionando corretamente'
slug: as-colecoes-criadas-pela-api-e-os-produtos-inseridos-pela-api-inserir-sku-por-arquivo-nao-estao-funcionando-corretamente
status: PUBLISHED
createdAt: 2021-11-18T13:11:38.000Z
updatedAt: 2023-10-04T19:50:34.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: collections-created-by-api-and-products-inserted-by-api-insert-sku-by-file-not-working-properly
locale: pt
kiStatus: Backlog
internalReference: 470966
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, temos várias maneiras de criar e adicionar produtos a uma coleção. Podemos usar nosso novo gerenciador de coleções, o gerenciador de coleções antigo e também a API para criar coleções e adicionar produtos a elas. Mas temos um problema ao criar coleções por meio da API e adicionar produtos a essa coleção usando a rota `api/catalog/pvt/collection//stockkeepingunit/importinsert`. Com essa API, podemos adicionar produtos à coleção usando uma planilha.

O problema ocorre sempre que criamos uma coleção pela API e tentamos usar essa API `importinsert` para adicionar produtos. Os produtos não ficam disponíveis na coleção criada.

## Simulação

- Criar uma coleção usando a API:

 curl --location -g --request POST 'https://.vtexcommercestable.com.br/api/catalog/pvt/collection?an=' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'x-vtex-api-appKey: vtexappkey-appvtex' \--header 'x-vtex-api-appToken:  ' \--data-raw '{    "Name": "testando",    "Searchable": false,    "Highlight": false,    "DateFrom": "2017-09-27T10:47:00",    "DateTo": "2027-09-27T10:47:00"}'


- Adicione produtos a esta coleção com a API Import Insert:

 curl --location -g --request POST 'https://.vtexcommercestable.com.br/api/catalog/pvt/collection//stockkeepingunit/importinsert' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'VtexIdclientAutCookie: ' \--form 'file=@"/path/to/file"'

- Após cerca de 30 minutos, verifique se os produtos não exibem as informações da coleção e se a página da coleção não está exibindo os produtos:

    curl --location -g --request GET 'https://.vtexcommercestable.com.br/api/catalog_system/pub/products/search/?fq=H:' \--header 'Accept: application/json' \--header 'Content-Type: application/json'

## Workaround

Existem duas soluções alternativas viáveis para este problema:

1️⃣ Adicione produtos às coleções criadas pela API usando o Upload de planilha do Admin ou use a API Insert SKU to subcollection para inserir SKUs nas coleções:

Para adicionar SKUs às coleções usando a API, devemos seguir estas etapas:

Criar coleção:

 curl --location -g --request POST 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/collection?an=(https://catalog.vtexcommercestable.com.br/api/catalog/pvt/collection?an=)' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'x-vtex-api-appKey: vtexappkey-appvtex' \--header 'x-vtex-api-appToken: ' \--header 'Cookie: janus_sid=7026383e-2070-4b68-a2c2-59cf729ec0da' \--data-raw '{ "Name": "testando", "Searchable": false, "Highlight": false, "DateFrom": "2017-09-27T10:47:00", "DateTo": "2027-09-27T10:47:00"}'

Criar subcoleção:

    curl --location -g --request POST 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection?an=(https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection?an=)' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'VtexIdclientAutCookie: ' \--header 'Cookie: janus_sid=7026383e-2070-4b68-a2c2-59cf729ec0da' \--data-raw '{ "CollectionId": 173, "Name": "Inclusive 1", "Type": "Inclusive", "PreSale": false, "Release": false}'

Inserir SKU na subcoleção:

 curl --location -g --request POST 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection//stockkeepingunit?an=(https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection//stockkeepingunit?an=)' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'VtexIdclientAutCookie: ' \--header 'Cookie: janus_sid=7026383e-2070-4b68-a2c2-59cf729ec0da' \--data-raw '{ "SkuId": 2000037}'


2️⃣ Também existe a possibilidade de usar o `api/catalog/pvt/collection//stockkeepingunit/importinsert` e, depois que a importação estiver concluída e todos os produtos tiverem sido adicionados, acessar manualmente, pela interface do usuário, e atualizar todos os dados da coleção, seja alterando seu nome ou sua data de início/término.

Dessa forma, os produtos da coleção que acabaram de ser inseridos serão forçados a uma reindexação e os dados relacionados à coleção serão adicionados a eles, permitindo a exibição correta das informações necessárias.%0A