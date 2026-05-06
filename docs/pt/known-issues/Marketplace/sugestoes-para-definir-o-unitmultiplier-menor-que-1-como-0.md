---
title: 'Sugestões para definir o UnitMultiplier menor que 1 como 0'
slug: sugestoes-para-definir-o-unitmultiplier-menor-que-1-como-0
status: PUBLISHED
createdAt: 2022-11-21T19:45:05.000Z
updatedAt: 2022-12-13T16:13:46.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: suggestions-transforming-unitmultiplier-less-than-1-to-0
locale: pt
kiStatus: Fixed
internalReference: 702056
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O vendedor pode enviar valores de unitMultiplier para seus SKUs que sejam inferiores a 1.

Exemplo:
 ![](https://vtexhelp.zendesk.com/attachments/token/HqXCaizs03DZbMVT2tcufZM6K/?name=image.png)

A mesma informação é enviada corretamente para o marketplace:
 ![](https://vtexhelp.zendesk.com/attachments/token/zImMl1BVZHLG6zc45x4XwrZpB/?name=image.png)

No entanto, assim que o produto é processado pelo Matcher, o valor é arredondado para 0:
 ![](https://vtexhelp.zendesk.com/attachments/token/j5FMl4AJJ0R5IP3FcStUo7DDi/?name=image.png)

E, uma vez aprovado no catálogo do marketplace, o valor permanece como 0. Dessa forma, um valor incorreto é definido no catálogo do marketplace.

## Simulação

1. Crie um SKU com um valor de unitMultiplier menor que 1;
2. Envie-o para o marketplace;
3. Aprove o SKU na área de SKUs recebidos do marketplace;
4. Verifique no catálogo do marketplace se o valor está definido como 0.

## Workaround

Ajuste o valor diretamente no catálogo do marketplace por meio do Admin, planilha ou API.