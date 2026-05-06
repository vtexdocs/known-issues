---
title: 'O campo “SpecificationCode” na exportação “ProductSpecification” mostra apenas o código de um valor'
slug: o-campo-specificationcode-na-exportacao-productspecification-mostra-apenas-o-codigo-de-um-valor
status: PUBLISHED
createdAt: 2022-09-02T18:17:35.000Z
updatedAt: 2026-02-10T14:14:44.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: specificationcode-in-the-productspecification-export-only-shows-code-for-one-value
locale: pt
kiStatus: Fixed
internalReference: 650961
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Na planilha ProductSpecification, a coluna SpecificationCode refere-se ao ID do registro de valor no produto. Nos campos em que mais de um valor é selecionado, a planilha mostra apenas o código do primeiro valor.

## Simulação

- Baixe a planilha de uma categoria que contenha produtos com mais de um valor selecionado no mesmo campo
- Verifique se a coluna 'SpecificationCode' terá apenas um código, apesar de haver mais de um valor na coluna SpecificationValue

## Workaround

Use a API https://developers.vtex.com/vtex-rest-api/reference/getproductspecificationbyproductid para obter o Id