---
title: 'O evento `productClick` considera o ID de SKU incorreto'
slug: o-evento-productclick-considera-o-id-de-sku-incorreto
status: PUBLISHED
createdAt: 2023-04-11T17:38:04.000Z
updatedAt: 2023-04-11T17:38:04.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: productclick-event-considers-the-incorrect-sku-id
locale: pt
kiStatus: Backlog
internalReference: 788145
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O evento `productClick` considera o ID de SKU incorreto ao usar o bloco “Seletor de SKU do Resumo do Produto”. Ele sempre utilizará o primeiro SKU da lista de produtos.

## Simulação

- Configure o bloco Seletor de SKU do Resumo do Produto;
- Selecione uma especificação de SKU e acesse a PDP;
- No console, digite “dataLayer”;
- O valor “variant” no evento productClick será diferente do selecionado anteriormente.

## Workaround

N/A