---
title: 'O seletor de componentes do vendedor pode apresentar inconsistência nos preços de entrega/remessa'
id: 2agLvjXgT76ngdu3YsA6uh
status: PUBLISHED
createdAt: 2022-09-14T22:26:22.177Z
updatedAt: 2024-02-16T20:28:08.976Z
publishedAt: 2024-02-16T20:28:08.976Z
firstPublishedAt: 2022-09-14T22:26:22.762Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: component-seller-selector-may-present-inconsistency-in-deliveryshipping-prices
locale: pt
kiStatus: No Fix
internalReference: 658452
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O componente Seletor do Vendedor apresenta inconsistência nos preços de entrega/remessa com base no valor do pedido.

Exemplo:
Promoção regular:
Quando o cliente faz um pedido acima do valor X, o valor do frete será gratuito.

Com base em um cenário com a configuração acima, ao realizar uma simulação de envio usando o Seletor de Vendedores, o componente utilizará uma consulta de envio GraphQL, equivalente a uma solicitação da API de Simulação, porém, para cada vendedor que o produto estiver disponível, com base no código postal do cliente, a consulta receberá um item como parâmetro, configurando assim um "carrinho com vários itens", portanto, dependendo do valor do pedido, excedendo o valor limite da promoção e aplicando o envio gratuito.



## Simulação


Com base no exemplo acima:
Crie uma promoção onde o tipo e o valor do desconto será "Frete grátis";
Testar o componente Seller Selector em um PDP com um produto que esteja relacionado com a promoção acima e disponível em vários vendedores diferentes.



## Workaround


N/A

