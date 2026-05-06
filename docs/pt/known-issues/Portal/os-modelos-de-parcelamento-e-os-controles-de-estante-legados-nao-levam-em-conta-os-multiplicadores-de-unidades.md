---
title: 'Os modelos de parcelamento e os controles de estante legados não levam em conta os multiplicadores de unidades'
slug: os-modelos-de-parcelamento-e-os-controles-de-estante-legados-nao-levam-em-conta-os-multiplicadores-de-unidades
status: PUBLISHED
createdAt: 2024-02-08T13:39:16.000Z
updatedAt: 2024-02-08T13:48:14.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: legacy-installment-template-and-shelf-controls-do-not-consider-unit-multipliers
locale: pt
kiStatus: Backlog
internalReference: 979205
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, para lojas que utilizam o CMS antigo, os modelos e controles de prateleira antigos não são ajustados se o SKU tiver um multiplicador de unidades.

Por exemplo, se você tiver um item com um multiplicador de unidades igual a 2 e um controlador de parcelamento, os dados exibidos nas prateleiras mostrarão apenas as opções de parcelamento de uma única unidade, em vez de se ajustarem a essa configuração.

## Simulação

1 - crie um SKU com um multiplicador de unidades
2 - configure opções de parcelamento para ele
3 - configure um controlador relacionado ao parcelamento, como $product.InstallmentValue
4 - os dados exibidos serão relativos a uma única unidade, apenas.

## Workaround

implemente uma personalização no front-end para sobrescrever os dados originais que estão sendo exibidos.