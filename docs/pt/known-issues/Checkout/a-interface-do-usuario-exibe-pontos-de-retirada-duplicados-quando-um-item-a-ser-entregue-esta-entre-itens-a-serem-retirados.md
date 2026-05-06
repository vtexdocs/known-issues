---
title: 'A interface do usuário exibe pontos de retirada duplicados quando um item a ser entregue está entre itens a serem retirados'
slug: a-interface-do-usuario-exibe-pontos-de-retirada-duplicados-quando-um-item-a-ser-entregue-esta-entre-itens-a-serem-retirados
status: PUBLISHED
createdAt: 2023-09-25T13:50:14.000Z
updatedAt: 2023-10-18T14:35:59.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-shows-duplicated-pickup-points-when-an-item-for-delivery-is-between-items-for-pickup
locale: pt
kiStatus: Backlog
internalReference: 906549
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em um carrinho com pelo menos três produtos, em que a ordem dos itens é: o primeiro para retirada, o segundo para entrega e o terceiro para retirada, a interface do usuário exibirá o ponto de retirada duplicado. Isso ocorre porque a API agrupa o primeiro e o terceiro itens, uma vez que se trata do mesmo SLA.

É possível avançar para a etapa de pagamento e concluir a compra.

## Simulação

- Adicione um item ao carrinho para retirada;
- Adicione um item ao carrinho para entrega;
- Adicione outro item ao carrinho para retirada;
- Na etapa de envio, a retirada será duplicada

## Workaround

N/A