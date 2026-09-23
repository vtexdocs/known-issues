---
title: 'O valor 0 da especificação do catálogo foi omitido da carga útil da especificação do produto.'
slug: o-valor-0-da-especificacao-do-catalogo-foi-omitido-da-carga-util-da-especificacao-do-produto
status: PUBLISHED
createdAt: 2026-05-12T17:13:15.000Z
updatedAt: 2026-09-23T16:47:33.000Z
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

1 - Crie uma especificação numérica no catálogo VTEX

2 - Insira o valor 0 como único valor nela

3 - Recupere esses dados para o produto no qual o valor da especificação foi inserido via GET /api/catalog_system/pvt/products//specification

4 - O valor 0 NÃO será retornado

## Workaround

Altere o tipo da especificação

ou

Recupere os dados por outros meios (ex: planilhas)