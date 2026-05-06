---
title: 'A pré-visualização do frete exibe o preço incorretamente quando se trata de uma entrega programada'
slug: a-previsualizacao-do-frete-exibe-o-preco-incorretamente-quando-se-trata-de-uma-entrega-programada
status: PUBLISHED
createdAt: 2022-02-25T18:08:32.000Z
updatedAt: 2024-03-27T15:39:49.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-displaying-the-price-when-its-scheduled-delivery
locale: pt
kiStatus: Fixed
internalReference: 532487
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O valor da entrega exibido na pré-visualização do envio (carrinho) está incorreto quando os itens têm entrega programada e todos esses itens são enviados no mesmo SLA. Mesmo com a API retornando o valor correto, a interface do usuário não reflete essa informação e exibe o valor incorreto.

## Simulação

Adicione dois ou mais itens ao carrinho com entrega programada; a interface do usuário exibirá um valor diferente do retornado pela API

## Workaround

N/A