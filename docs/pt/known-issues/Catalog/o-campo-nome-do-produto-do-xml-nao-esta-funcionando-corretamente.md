---
title: 'O campo "Nome do produto" do XML não está funcionando corretamente'
slug: o-campo-nome-do-produto-do-xml-nao-esta-funcionando-corretamente
status: PUBLISHED
createdAt: 2023-10-26T11:34:56.000Z
updatedAt: 2023-10-26T11:34:56.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: xmls-product-name-flag-not-working-properly
locale: pt
kiStatus: Backlog
internalReference: 925965
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao criar um XML, temos duas opções diferentes para definir o nome do produto: nas opções “Nome do produto” e “Nome do produto + Nome do SKU”. No entanto, a opção “Nome do produto” está sendo ignorada, e o nome do produto no arquivo segue a seguinte regra:
- Se o produto tiver mais de um SKU ou se o nome do SKU for igual ao nome do produto = será exibido apenas o nome do produto
- Se o produto tiver apenas um SKU e o nome do SKU não for igual ao nome do produto = ele concatenará o Nome do produto e o Nome do SKU

## Simulação

1. Verifique se há no catálogo produtos que correspondam à descrição acima
2. Crie um XML selecionando o sinalizador "Nome do produto"
3. Observe que, para os produtos com apenas um SKU, o nome do produto será concatenado com o nome do SKU

## Workaround

N/A