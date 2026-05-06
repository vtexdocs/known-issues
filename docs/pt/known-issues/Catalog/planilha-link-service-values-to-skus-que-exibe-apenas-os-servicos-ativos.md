---
title: 'Planilha “LINK SERVICE VALUES TO SKUS” que exibe apenas os serviços ativos'
slug: planilha-link-service-values-to-skus-que-exibe-apenas-os-servicos-ativos
status: PUBLISHED
createdAt: 2023-08-23T17:51:44.000Z
updatedAt: 2023-08-23T17:51:44.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: link-service-values-to-skus-spreadsheet-only-returning-active-services
locale: pt
kiStatus: Backlog
internalReference: 886486
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao exportar valores de serviços de uma categoria específica no painel de administração, o resultado mostra apenas os serviços ativos. Isso não permite que o comerciante ative serviços anteriormente inativos por meio de planilha.

## Simulação

1. Crie um serviço e associe-o a um SKU;
2. Desative o serviço no SKU;
3. Exporte a planilha LINK SERVICE VALUES TO SKUS;
4. Verifique se o serviço anteriormente inativo não é retornado.

## Workaround

Use a API ou acesse diretamente a página de administração de SKUs - serviços para atualizar o serviço:
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/skuservice/-skuServiceId-