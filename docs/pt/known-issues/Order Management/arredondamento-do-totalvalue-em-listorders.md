---
title: 'Arredondamento do TotalValue em ListOrders'
slug: arredondamento-do-totalvalue-em-listorders
status: PUBLISHED
createdAt: 2023-02-17T14:06:34.000Z
updatedAt: 2025-01-28T13:47:39.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: rounding-of-totalvalue-in-listorders
locale: pt
kiStatus: Backlog
internalReference: 756314
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando consultamos o `totalValue` de alguns pedidos usando a rota GET ListOrders, podemos encontrar valores diferentes daqueles retornados na rota GET Order. Isso ocorre porque a rota ListOrders consulta o banco de dados Solr, no qual o campo `totalValue` está definido como float, o que pode gerar números imprecisos devido à sua natureza de aproximação/arredondamento.

Por outro lado, na rota GET Order, o banco de dados consultado é definido como inteiro, de modo que o retorno não se comporta da mesma forma que na rota List Order.

A consequência disso é que a API list pode retornar valores com casas decimais diferentes quando o valor é muito alto.
Outro efeito colateral desse cenário é a exibição de `totalValue` com “.0” nas list orders.

## Simulação

Não há como simular o cenário, mas ele pode ocorrer em pedidos com um valor muito alto ou em cenários com moedas com muitos zeros;

## Workaround

Ainda não temos uma solução alternativa.