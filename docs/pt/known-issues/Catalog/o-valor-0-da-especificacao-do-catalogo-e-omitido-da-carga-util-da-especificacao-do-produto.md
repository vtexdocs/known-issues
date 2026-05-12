---
title: 'O valor 0 da especificação do catálogo é omitido da carga útil da especificação do produto'
slug: o-valor-0-da-especificacao-do-catalogo-e-omitido-da-carga-util-da-especificacao-do-produto
status: PUBLISHED
createdAt: 2026-05-12T17:13:15.000Z
updatedAt: 2026-05-12T17:13:15.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-specification-value-0-is-omitted-from-product-specification-payload
locale: pt
kiStatus: Backlog
internalReference: 1405238
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma especificação de tipo numérico contém o número "0" como seu único valor, esses dados não são retornados corretamente pela API.

## Simulação

1 - crie uma especificação numérica no catálogo VTEX

2 - insira o valor único 0 nela

3 - recupere esses dados para o produto no qual esse valor de especificação foi inserido via GET /api/catalog_system/pvt/products//specification

4 - o valor 0 NÃO será retornado

## Workaround

recupera os dados por outros meios (ex.: planilhas)