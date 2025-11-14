---
title: 'A API do catálogo stockkeepingunit permite valores de condição comercial inválidos'
slug: a-api-do-catalogo-stockkeepingunit-permite-valores-de-condicao-comercial-invalidos
status: PUBLISHED
createdAt: 2025-11-14T19:14:34.478Z
updatedAt: 2025-11-14T19:14:34.478Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: stockkeepingunit-catalog-api-allows-invalid-commercial-condition-values
locale: pt
kiStatus: Backlog
internalReference: 769053
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Atualmente, a API da unidade de manutenção de estoque https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/{skuid} não realiza nenhuma verificação para o campo "CommercialConditionId".

Isso permite que o usuário insira dados inválidos, como um Id que não existe em uma determinada loja e, em seguida, ao tentar acessar o formulário desse sku, é gerado um erro.
## Simulação


Na carga útil da API insert SKU https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit, use um ID de condição comercial que não esteja presente na loja.

Em seguida, acesse a interface do usuário desse sku criado e você deverá receber uma mensagem de erro
## Workaround


n/a



