---
title: 'O valor do preço do SKU está sendo exibido incorretamente nos detalhes do meu pedido.'
slug: o-valor-do-preco-do-sku-esta-sendo-exibido-incorretamente-nos-detalhes-do-meu-pedido
status: PUBLISHED
createdAt: 2025-01-30T23:23:26.000Z
updatedAt: 2026-09-14T22:49:19.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: sku-price-value-being-displayed-incorrectly-in-my-order-detail
locale: pt
kiStatus: Fixed
internalReference: 1171863
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A lista de itens na área de detalhes "Meus Pedidos" é gerada pela fusão das informações retornadas por duas rotas internas. Embora essas rotas forneçam dados semelhantes, eles não são idênticos. Quando há dois SKUs do mesmo item no pedido, o processo de fusão pode atribuir o mesmo preço a ambos, resultando em uma exibição incorreta do valor total na interface, divergindo do valor real registrado no pedido.

## Simulação

Crie um pedido com dois SKUs diferentes do mesmo item, mas com preços diferentes.

Acesse a área de detalhes do pedido em "Meus Pedidos".

Compare os preços exibidos com os valores reais do pedido.

Se o problema ocorrer, ambos os SKUs aparecerão com o mesmo preço, fazendo com que o total exibido seja diferente.

## Workaround

Não há solução alternativa disponível.