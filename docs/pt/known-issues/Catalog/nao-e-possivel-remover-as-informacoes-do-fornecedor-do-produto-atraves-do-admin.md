---
title: 'Não é possível remover as informações do fornecedor do produto através do Admin'
slug: nao-e-possivel-remover-as-informacoes-do-fornecedor-do-produto-atraves-do-admin
status: PUBLISHED
createdAt: 2023-04-25T17:14:30.000Z
updatedAt: 2023-04-25T17:14:30.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: remove-supplier-info-from-product-not-working-via-admin
locale: pt
kiStatus: Backlog
internalReference: 796608
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar remover as informações do fornecedor de um produto e salvar o produto pelo Admin, apesar de receber uma resposta de sucesso, as informações continuam lá.

Ao abrir novamente a página do produto, é possível ver que as informações do fornecedor ainda estão lá.

## Simulação

1. Adicione um fornecedor a um produto e salve-o;
2. Acesse novamente o produto e verifique se as informações do fornecedor estão corretas;
3. Remova as informações do fornecedor do produto e salve-o;
4. Acesse novamente o produto e verifique se as informações do fornecedor ainda estão lá.

## Workaround

Exclua essas informações usando a API de atualização de produto:
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/product/-productId-

Defina o campo `SupplierId` como `null`

    curl --location --globoff --request PUT 'https://.vtexcommercestable.com.br/api/catalog/pvt/product/' \--header 'Accept: application/json' \ --header 'Content-Type: application/json' \ --header 'X-VTEX-API-AppKey: ' \ --header 'X-VTEX-API-AppToken: ' \--data '{ "Name": "inserir produto de teste", "DepartmentId": 1, "CategoryId": 2, "BrandId": 2000000, "LinkId": "inserir-produto-teste", "RefId": "310117869", "IsVisible": true, "Description": "texto de descrição", "DescriptionShort": "Utilize o CEP 04548-005 para frete grátis", "ReleaseDate": "2019-01-01T00:00:00", "KeyWords": "teste,teste2", "Title": "produto de teste", "IsActive": true, "TaxCode": "", "MetaTagDescription": "tag de teste", "SupplierId": null, "ShowWithoutStock": true, "AdWordsRemarketingCode": null, "LomadeeCampaignCode": null, "Score": 1}'