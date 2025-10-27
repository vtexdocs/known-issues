---
title: 'A remoção das informações do fornecedor do produto não está funcionando via Admin'
slug: a-remocao-das-informacoes-do-fornecedor-do-produto-nao-esta-funcionando-via-admin
status: PUBLISHED
createdAt: 2025-10-16T19:51:12.065Z
updatedAt: 2025-10-16T19:51:12.065Z
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


Ao tentar remover as informações do fornecedor de um produto e salvar o produto por meio do Admin, apesar de obter uma resposta bem-sucedida, as informações persistem.

Ao abrir novamente a página do produto, é possível ver que as informações do fornecedor ainda estão lá.
## Simulação



1. Adicione um fornecedor a um produto e salve-o;
2. Insira novamente o produto e verifique se as informações do fornecedor estão corretas;
3. Remova as informações do fornecedor do produto e salve-o;
4. Insira novamente o produto e verifique se as informações do fornecedor ainda estão lá
## Workaround


Exclua essas informações usando a API de atualização do produto:
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/product/-productId-

Defina o campo `SupplierId` como `null`

    curl --location --globoff --request PUT 'https://.vtexcommercestable.com.br/api/catalog/pvt/product/' \--header 'Accept: application/json' \ --header 'Content-Type: application/json' \ --header 'X-VTEX-API-AppKey: ' \ --header 'X-VTEX-API-AppToken: ' \--data '{ "Name": "insert product test", "DepartmentId": 1, "CategoryId": 2, "BrandId": 2000000, "LinkId": "insert-product-test", "RefId": "310117869", "IsVisible": true, "Description": "texto de descrição", "DescriptionShort": "Utilize o CEP 04548-005 para frete grátis", "ReleaseDate": "2019-01-01T00:00:00", "KeyWords": "teste,teste2", "Title": "product de teste", "IsActive": true, "TaxCode": "", "MetaTagDescription": "tag test", "SupplierId": nulo, "ShowWithoutStock": verdadeiro, "AdWordsRemarketingCode": nulo, "LomadeeCampaignCode": nulo, "Score": 1}'




