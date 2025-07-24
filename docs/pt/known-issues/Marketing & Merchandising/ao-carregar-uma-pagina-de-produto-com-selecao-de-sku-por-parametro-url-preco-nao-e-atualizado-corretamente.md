---
title: 'Ao carregar uma página de produto com seleção de SKU por parâmetro (URL), preço não é atualizado corretamente'
id: 4PAYx8WD2MIce8YMAaK2yk
status: PUBLISHED
createdAt: 2017-08-17T00:24:35.581Z
updatedAt: 2022-12-22T20:45:30.700Z
publishedAt: 2022-12-22T20:45:30.700Z
firstPublishedAt: 2017-08-17T00:43:47.906Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: when-loading-a-product-page-with-a-selection-of-skus-by-parameter-url-the-price-is-not-correctly-updated
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao acessar uma página de produto com variação (mais de um SKU) com o parâmetro de querystring "idsku={{idSku}}", o sistema marca o SKU como escolhido (no controle skuRichSelection e skuSelection). 

No entanto, se o SKU escolhido (Do parâmetro) estiver indisponível (sem estoque / não entregável), quando o usuário seleciona outro SKU disponível no seletor de SKU, as informações de preço não são exibidas.

![Preço não atualizado com seleção de SKU](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Marketing%20&%20Merchandising/ao-carregar-uma-pagina-de-produto-com-selecao-de-sku-por-parametro-url-preco-nao-e-atualizado-corretamente_1.gif)

## Simulação

1. Acessar a página de um produto que possua variação de SKU fornecendo o parâmetro "idsku" na URL (QueryString). Escolha um SKU indisponível.
2. No controle de seleção de SKU (`skuSelection` ou `skuRichSelection`), selecionar outro SKU disponível.
3. O preço desse segundo SKU não será renderizado corretamente.

## Workaround

1. Desenvolver um controle de seleção de SKU por JavaScript (sem usar nosso controle nativo).
2. Nunca utilizar seleção por parâmetro (querystring) de um SKU indisponível.

