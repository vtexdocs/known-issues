---
title: 'A tabela de preços promocionais em carrinhos de compras de grande porte pode afetar o desempenho ou causar erros de tempo limite'
slug: a-tabela-de-precos-promocionais-em-carrinhos-de-compras-de-grande-porte-pode-afetar-o-desempenho-ou-causar-erros-de-tempo-limite
status: PUBLISHED
createdAt: 2023-12-07T15:47:10.000Z
updatedAt: 2023-12-07T15:57:36.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotional-price-table-in-large-shopping-carts-can-impact-performance-or-lead-to-timeout-errors
locale: pt
kiStatus: Backlog
internalReference: 949389
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando temos uma loja com tabelas de preços promocionais criadas e carrinhos de compras volumosos que aplicam essas promoções, isso causa lentidão no desempenho do processo de compra e leva a erros de tempo limite no carrinho.

Qualquer ação no carrinho pode desencadear erros; por exemplo, adicionar itens, fazer alterações, inserir o CEP etc. comprometerá o desempenho do processo de compra.

Não é possível saber com precisão qual número de tabelas de preços promocionais sendo calculadas no carrinho ou a quantidade de itens adicionados ao carrinho começará a acionar os erros de tempo limite ou a diminuir o desempenho; pelo que foi analisado, isso pode ocorrer com qualquer quantidade significativa.

## Simulação

Crie várias tabelas de preços promocionais e um carrinho de compras com muitos itens (aqui não podemos indicar um número exato, como 50 ou 100, pois depende das promoções)

## Workaround

Infelizmente, não temos nenhuma solução alternativa para isso;
desativar as promoções e usar o módulo de preços para inserir os preços ajudaria.