---
title: 'A nova interface do usuário não sugere o item correto a ser devolvido quando há uma alteração no pedido'
slug: a-nova-interface-do-usuario-nao-sugere-o-item-correto-a-ser-devolvido-quando-ha-uma-alteracao-no-pedido
status: PUBLISHED
createdAt: 2023-01-18T15:04:39.000Z
updatedAt: 2023-01-18T17:05:33.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: ew-ui-does-not-suggest-the-correct-item-to-be-returned-once-the-order-has-a-change
locale: pt
kiStatus: Backlog
internalReference: 735854
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A nova interface do usuário não sugere o item correto a ser devolvido.
A nova interface do usuário sugere como saída um item que ainda não foi faturado ou pode sugerir um item que foi removido dos itens originais. Isso ocorre quando o pedido sofre uma alteração, mesmo que seja apenas no valor. O campo "itemsReturnable" não está correto na endereço "api/orders/..invoices/summary".

## Simulação

Crie um pedido com dois ou mais itens, execute uma alteração removendo o itemindex0 e tente a devolução na nova interface do usuário. O itemindex0 será uma opção a ser devolvida.

## Workaround

Não há solução alternativa no momento.