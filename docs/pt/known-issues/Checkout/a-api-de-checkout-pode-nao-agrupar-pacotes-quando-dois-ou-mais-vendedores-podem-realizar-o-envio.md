---
title: 'A API de checkout pode não agrupar pacotes quando dois ou mais vendedores podem realizar o envio'
slug: a-api-de-checkout-pode-nao-agrupar-pacotes-quando-dois-ou-mais-vendedores-podem-realizar-o-envio
status: PUBLISHED
createdAt: 2023-05-03T22:24:28.000Z
updatedAt: 2023-05-03T22:24:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-api-may-not-group-packages-when-two-or-more-sellers-can-fulfill
locale: pt
kiStatus: Backlog
internalReference: 802156
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando dois ou mais vendedores podem atender a um carrinho com mais de um item, a API de checkout pode não agrupar as encomendas, selecionando vendedores diferentes para cada produto. Isso aumenta o valor do frete para o comprador.

Esse comportamento foi observado quando dois itens foram adicionados ao carrinho; um dos itens poderia ser atendido por apenas um vendedor, e ocorreu uma divisão da encomenda, mesmo que o outro item pudesse ser atendido pelo mesmo vendedor. Mas isso não se limita a esse cenário.

## Simulação

Não há uma maneira fácil de replicar o cenário, mas consulte os pedidos/carrinho onde o problema ocorreu.

## Workaround

N/A