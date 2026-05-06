---
title: 'Informações sobre a categoria do produto provenientes do dataLayer com uma ordenação incorreta'
slug: informacoes-sobre-a-categoria-do-produto-provenientes-do-datalayer-com-uma-ordenacao-incorreta
status: PUBLISHED
createdAt: 2021-01-27T14:55:26.000Z
updatedAt: 2023-02-27T21:49:07.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: product-category-information-from-datalayer-with-a-wrong-sorting
locale: pt
kiStatus: Fixed
internalReference: 328415
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As informações sobre as categorias de produtos no dataLayer das páginas de finalização de compra são exibidas com uma ordenação incorreta. Isso é representado pela propriedade "categoryTree".

Elas seguem seus IDs, ordenadas do menor para o maior, o que pode não corresponder à hierarquia esperada para essas informações.

## Simulação

Adicione um produto ao carrinho e compare as propriedades “productCategoryIds” e “productCategories” do orderForm com a propriedade “categoryTree” do dataLayer.

## Workaround

As mesmas informações podem ser recuperadas da API do orderForm em vez do dataLayer.