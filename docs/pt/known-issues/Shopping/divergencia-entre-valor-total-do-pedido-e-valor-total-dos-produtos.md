---
title: 'Divergência entre valor total do pedido e valor total dos produtos'
id: 20XszEUpq8MKweAyqMyIkM
status: PUBLISHED
createdAt: 2018-08-22T19:31:56.591Z
updatedAt: 2022-12-22T20:45:08.319Z
publishedAt: 2022-12-22T20:45:08.319Z
firstPublishedAt: 2018-08-22T20:33:38.843Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: divergence-between-total-order-value-and-total-products-value
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Em alguns casos, o valor total do pedido diverge da soma do valor total dos produtos (somando também o valor de frete e possíveis descontos, quando houver). A causa conhecida é relacionada à existência de produtos com unidade multiplicadora diferente de `1` no pedido. 

O pedido é fechado e transacionado normalmente na VTEX mas, dependendo dos fluxos externos de integração, podem ocorrer problemas por conta da divergência criada.

## Simulação

Exemplo de ocorrência:

![image](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/pt/known-issues/Shopping/divergencia-entre-valor-total-do-pedido-e-valor-total-dos-produtos_1.png)

Nesse caso, o valor total do pedido cobrado do cliente ficou em `R$ 7,98`. No entanto, ao somar os valores de venda registrados em cada produto, o total seria de `R$ 7,95`.

## Workaround

Caso ocorram problemas externos à VTEX, é necessário contorná-los diretamente na integração. A sugestão recomendada é ratear a sobra manualmente entre alguns dos itens do pedido diretamente no sistema de destino (ERP, emissor de NFe etc.)

