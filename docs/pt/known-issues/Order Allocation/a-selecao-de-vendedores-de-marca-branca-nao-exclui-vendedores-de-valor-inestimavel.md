---
title: 'A seleção de vendedores de marca branca não exclui vendedores de valor inestimável.'
slug: a-selecao-de-vendedores-de-marca-branca-nao-exclui-vendedores-de-valor-inestimavel
status: PUBLISHED
createdAt: 2021-01-26T17:03:43.000Z
updatedAt: 2026-09-21T17:23:22.000Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: whitelabel-seller-selection-does-not-rule-out-priceless-sellers
locale: pt
kiStatus: Fixed
internalReference: 327853
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A lógica de seleção de um fornecedor white label não exclui fornecedores para produtos sem preço definido. Em um cenário com mais de um fornecedor aplicável, o checkout retorna o fornecedor com `disponibilidade: "sem preço definido"`. Isso torna a interface do usuário intermitente, simulando ora um fornecedor sem preço definido para o produto, ora outro com preço definido. Dessa forma, o usuário recebe a notificação de que não pode comprar o produto, mas ainda consegue concluir a compra (graças ao fornecedor que possui um preço definido).

O checkout deve descartar imediatamente o fornecedor sem preço definido nesse contexto, retornando apenas os fornecedores com preço definido.

Observação: Esse comportamento pode fazer com que fornecedores white label sem preço definido sejam escolhidos em detrimento de fornecedores com preço definido, o que fará com que o produto seja apresentado como indisponível, mesmo que outra opção possa fornecer o produto.

## Simulação

Imagine dois fornecedores para um determinado produto, onde um possui um preço definido e o outro não.

## Workaround

A loja deve habilitar a herança de preços OU remover o produto do estoque.

Após isso, é importante observar que isso não influencia o algoritmo de seleção do vendedor, pois ele não considera o preço. Portanto, uma coisa é independente da outra.