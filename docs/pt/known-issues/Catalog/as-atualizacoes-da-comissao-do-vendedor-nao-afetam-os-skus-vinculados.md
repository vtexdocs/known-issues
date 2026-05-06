---
title: 'As atualizações da comissão do vendedor não afetam os SKUs vinculados'
slug: as-atualizacoes-da-comissao-do-vendedor-nao-afetam-os-skus-vinculados
status: PUBLISHED
createdAt: 2023-08-31T14:44:23.000Z
updatedAt: 2024-09-30T15:09:39.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: seller-commission-updates-does-not-index-binded-skus
locale: pt
kiStatus: Backlog
internalReference: 891162
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o comerciante atualiza a comissão do vendedor na interface de gerenciamento de vendedores, os SKUs vinculados a esse vendedor não são indexados automaticamente.

Nosso sistema de checkout utiliza a API `stockkeepingunitbyid` para obter as informações atualizadas do SKU.

Nessa API, temos o objeto SkuSellers, que contém as informações de comissão. Mas, se o SKU não estiver indexado, esse objeto fica desatualizado.

Isso faz com que o checkout receba o valor antigo da comissão.

## Simulação

1. Altere a comissão do vendedor na interface de gerenciamento de vendedores.
2. Aguarde o tempo de cache, cerca de 10 minutos.
3. Verifique na simulação do checkout se a comissão está desatualizada.

## Workaround

Para evitar o fechamento de pedidos com o valor de comissão desatualizado, o comerciante pode indexar manualmente os SKUs afetados.