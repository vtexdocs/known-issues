---
title: 'Erros no carrinho ao adicionar uma opção de montagem indisponível'
slug: erros-no-carrinho-ao-adicionar-uma-opcao-de-montagem-indisponivel
status: PUBLISHED
createdAt: 2026-04-09T13:37:16.540Z
updatedAt: 2026-04-09T13:37:16.540Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: broken-carts-when-adding-unavailable-assembly-option
locale: pt
kiStatus: Fixed
internalReference: 1308431
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao adicionar um item com opções de montagem a um carrinho que:

- Tenha a localização do comprador identificada;
- Já contenha um item disponível no carrinho com a mesma opção de montagem;
- Selecione um vendedor que não possa atender ao pedido do item adicionado devido a esse cenário.

O carrinho entrará em um estado de falha, no qual não poderá ser acessado e nenhuma operação poderá ser realizada nele.

## Simulação

Isso não é fácil de replicar, e vários fatores podem afetar a seleção do vendedor.


- Crie um carrinho e adicione dados de localização;
- Adicione um item disponível com uma opção de montagem;
- Adicione um item com a mesma montagem que selecione um vendedor incapaz de atender ao carrinho;
- Um erro de comunicação será gerado e o carrinho entrará no estado de falha.

## Workaround

N/A