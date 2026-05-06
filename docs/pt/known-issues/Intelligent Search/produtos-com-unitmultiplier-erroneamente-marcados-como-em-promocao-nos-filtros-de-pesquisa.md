---
title: 'Produtos com "unitMultiplier" erroneamente marcados como "em promoção" nos filtros de pesquisa'
slug: produtos-com-unitmultiplier-erroneamente-marcados-como-em-promocao-nos-filtros-de-pesquisa
status: PUBLISHED
createdAt: 2024-02-15T22:51:59.000Z
updatedAt: 2024-02-15T22:51:59.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: products-with-unitmultiplier-wrongly-flagged-as-with-promotion-for-search-filters
locale: pt
kiStatus: Backlog
internalReference: 982830
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Um produto cujo preço de venda seja inferior ao preço de tabela será marcado como parte de uma promoção para fins de filtragem na pesquisa. Produtos com algum multiplicador de unidade podem resultar em um cálculo incorreto que pode afetar essa comparação, fazendo com que recebam essa marcação indevidamente.

## Simulação

A simulação depende da ocorrência de problemas específicos de arredondamento, mas um exemplo disso é um produto com preço de tabela e preço normal de $264,20 e um multiplicador de unidade de 3,07.

Embora o preço de tabela e o preço normal sejam os mesmos, este item será retornado no filtro de pesquisa "promoção=sim".

## Workaround

N/A