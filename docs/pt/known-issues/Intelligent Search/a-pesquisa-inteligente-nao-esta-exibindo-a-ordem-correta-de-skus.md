---
title: 'A Pesquisa Inteligente não está exibindo a ordem correta de SKUs'
slug: a-pesquisa-inteligente-nao-esta-exibindo-a-ordem-correta-de-skus
status: PUBLISHED
createdAt: 2022-10-13T23:43:14.000Z
updatedAt: 2023-05-24T20:15:59.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-not-returning-correct-sku-order
locale: pt
kiStatus: Fixed
internalReference: 677937
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A API de Pesquisa Inteligente não está retornando a ordem esperada das variações do SKU para um produto na pesquisa e nas prateleiras

## Simulação

Acesse a página de um produto, verifique a ordem do SKU, acesse a página de pesquisa e verifique a ordem do SKU (às vezes ela é exibida corretamente, outras vezes não)

## Workaround

A propriedade sortVariationsByLabel do seletor de SKU pode resolver alguns casos

https://developers.vtex.com/docs/guides/vtex-store-components-skuselector

 ![](https://vtexhelp.zendesk.com/attachments/token/tcCXWNHIw8KJupddSHiMElnxl/?name=image.png)