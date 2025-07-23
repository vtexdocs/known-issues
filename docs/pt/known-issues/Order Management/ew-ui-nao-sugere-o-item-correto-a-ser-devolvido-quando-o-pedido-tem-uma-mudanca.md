---
title: 'New UI não sugere o item correto a ser devolvido quando o pedido tem uma mudança'
id: 7hjZaUZ1GNiGjMnSKe0pZu
status: PUBLISHED
createdAt: 2023-01-18T17:05:53.889Z
updatedAt: 2024-05-28T18:33:17.977Z
publishedAt: 2024-05-28T18:33:17.977Z
firstPublishedAt: 2023-01-18T17:05:54.590Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: ew-ui-does-not-suggest-the-correct-item-to-be-returned-once-the-order-has-a-change
locale: pt
kiStatus: Backlog
internalReference: 735854
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A nova IU não sugere o item correto a ser devolvido.
A nova IU sugere o item que ainda não foi faturado como saída ou pode sugerir o item removido dos itens originais. Acontece quando o pedido tem um valor de mudança até mesmo de mudança. O "itemRetornável" não é correto em "api/ordens/...faturas/resumo".


##

## Simulação


Criar um pedido com dois ou mais itens execute uma alteração removendo o itemindex0 e tente o retorno na nova IU. O itemindex0 será uma opção a ser devolvida.


##

## Workaround


Por enquanto, não há solução.

