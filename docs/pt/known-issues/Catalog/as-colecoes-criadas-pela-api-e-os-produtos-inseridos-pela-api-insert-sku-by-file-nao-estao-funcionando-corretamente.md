---
title: As coleções criadas pela API e os produtos inseridos pela API Insert SKU by File não estão funcionando corretamente
slug: as-colecoes-criadas-pela-api-e-os-produtos-inseridos-pela-api-insert-sku-by-file-nao-estao-funcionando-corretamente
status: PUBLISHED
createdAt: 2025-10-16T19:52:57.896Z
updatedAt: 2025-10-16T19:52:57.896Z
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


Hoje temos algumas maneiras de criar e adicionar produtos a uma coleção. Podemos usar nosso novo Collection Adimn, nosso administrador de coleções legado e podemos usar a API para criar coleções e adicionar produtos a uma coleção. Mas temos um problema ao criar coleções por meio da API e adicionar produtos a essa coleção usando a rota `api/catalog/pvt/collection//stockkeepingunit/importinsert`. Com essa API, podemos adicionar produtos à coleção usando uma planilha.

O problema acontece toda vez que criamos uma coleção por API e tentamos usar essa API `importinsert` para adicionar produtos. Os produtos não ficam disponíveis para a coleção criada.
## Simulação


- Crie uma coleção usando a API:

    curl --location -g --request POST 'https://.vtexcommercestable.com.br/api/catalog/pvt/collection?an=' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'x-vtex-api-appKey: vtexappkey-appvtex' \--header 'x-vtex-api-appToken: ' \--data-raw '{ "Name": "testando", "Pesquisável": false, "Destaque": false, "DateFrom": "2017-09-27T10:47:00", "DateTo": "2027-09-27T10:47:00"}'


- Adicione produtos a essa coleção com a API Import Insert:

    curl --location -g --request POST 'https://.vtexcommercestable.com.br/api/catalog/pvt/collection//stockkeepingunit/importinsert' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'VtexIdclientAutCookie: ' \--form 'file=@"/path/to/file"'

- Após cerca de 30 minutos, verifique os produtos sem as informações de coleta e a página de coleta que não está renderizando os produtos:

    curl --location -g --request GET 'https://.vtexcommercestable.com.br/api/catalog_system/pub/products/search/?fq=H:' \--header 'Accept: application/json' \--header 'Content-Type: application/json'

##
## Workaround



Há duas soluções viáveis para esse problema:

1️⃣ Adicione produtos a coleções criadas pela API usando Admin Spreadsheet Upload ou use a API Insert SKU to subcollection para inserir SKUs em coleções:

Para adicionar SKUs a coleções usando a API, é necessário seguir estas etapas:

Criar coleção:

    curl --location -g --request POST 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/collection?an=(https://catalog.vtexcommercestable.com.br/api/catalog/pvt/collection?an=)' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'x-vtex-api-appKey: vtexappkey-appvtex' \--header 'x-vtex-api-appToken: ' \--header 'Cookie: janus_sid=7026383e-2070-4b68-a2c2-59cf729ec0da' \--data-raw '{ "Name": "testando", "Pesquisável": false, "Destaque": false, "DateFrom": "2017-09-27T10:47:00", "DateTo": "2027-09-27T10:47:00"}'

Criar subcoleção:

    curl --location -g --request POST 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection?an=(https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection?an=)' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'VtexIdclientAutCookie: ' \--header 'Cookie: janus_sid=7026383e-2070-4b68-a2c2-59cf729ec0da' \--data-raw '{ "CollectionId": 173, "Name": "Inclusive 1", "Type": "Inclusive", "PreSale": false, "Release": false}'

Inserir SKU na subcoleção:

    curl --location -g --request POST 'https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection//stockkeepingunit?an=(https://catalog.vtexcommercestable.com.br/api/catalog/pvt/subcollection//stockkeepingunit?an=)' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--header 'VtexIdclientAutCookie: ' \--header 'Cookie: janus_sid=7026383e-2070-4b68-a2c2-59cf729ec0da' \--data-raw '{ "SkuId": 2000037}'


2️⃣ Há também a possibilidade de usar o `api/catalog/pvt/collection//stockkeepingunit/importinsert` e, depois que a importação estiver concluída e todos os produtos tiverem sido adicionados, ir manualmente, por meio da interface do usuário, e atualizar todos os dados da coleção, alterando seu nome ou sua data de início/fim.

Dessa forma, os produtos da coleção que acabaram de ser inseridos serão forçados a uma reindexação e os dados relacionados à coleção serão adicionados a eles, permitindo a exibição correta das informações necessárias.%0A