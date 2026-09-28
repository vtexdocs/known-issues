---
title: 'A tabela de preços promocionais em carrinhos de compras grandes pode afetar o desempenho ou causar erros de tempo limite.'
slug: a-tabela-de-precos-promocionais-em-carrinhos-de-compras-grandes-pode-afetar-o-desempenho-ou-causar-erros-de-tempo-limite
status: PUBLISHED
createdAt: 2023-12-07T18:47:10.000Z
updatedAt: 2026-09-28T22:43:38.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotional-price-table-in-large-shopping-carts-can-impact-performance-or-lead-to-timeout-errors
locale: pt
kiStatus: Fixed
internalReference: 949389
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando temos uma loja com tabelas de preços promocionais criadas e carrinhos de compras grandes aplicando as promoções, isso causa lentidão no desempenho da compra e leva a erros de tempo limite no carrinho.

Qualquer ação no carrinho pode desencadear erros, como adicionar itens, editar, inserir o CEP, etc., comprometendo o desempenho da compra.

Não podemos saber com precisão quantas tabelas de preços promocionais estão sendo calculadas no carrinho ou a quantidade de itens adicionados ao carrinho que começará a desencadear erros de tempo limite ou lentidão no desempenho; com base no que foi analisado, isso pode acontecer com qualquer quantidade significativa.

## Simulação

Crie várias tabelas de preços promocionais e um carrinho de compras com muitos itens (aqui não podemos apontar um número exato, como 50 ou 100, pois depende das promoções).

## Workaround

Infelizmente, não temos nenhuma solução alternativa para isso. Desativar as promoções e usar o módulo de preços para inserir os preços pode ajudar.