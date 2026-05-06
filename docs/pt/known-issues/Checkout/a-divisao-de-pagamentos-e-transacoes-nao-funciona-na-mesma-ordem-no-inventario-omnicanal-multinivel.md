---
title: 'A divisão de pagamentos e transações não funciona na mesma ordem no inventário omnicanal multinível'
slug: a-divisao-de-pagamentos-e-transacoes-nao-funciona-na-mesma-ordem-no-inventario-omnicanal-multinivel
status: PUBLISHED
createdAt: 2023-03-23T19:03:08.000Z
updatedAt: 2023-03-27T12:27:42.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: payout-and-transaction-split-dont-work-in-the-same-order-for-multilevel-omnichannel-inventory
locale: pt
kiStatus: Backlog
internalReference: 777201
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em um marketplace com vendedores em relações multiníveis (MOI), quando um carrinho é montado com pelo menos um vendedor utilizando divisão de transação e outros utilizando divisão de pagamento, as transações com divisão de pagamento serão duplicadas, repetindo os itens de diferentes vendedores. Esse cenário não permitirá a realização do pedido, e será exibida a mensagem “Desculpe. Não foi possível processar os pagamentos solicitados.”

## Simulação

- Configure um vendedor com o endpoint de checkout / para usar a relação multinível (MOI);
- Configure um vendedor com o endpoint de atendimento e habilite a divisão de transações;
- Monte um carrinho com esses vendedores;
- Faça o pedido.

## Workaround

Use a divisão de pagamentos para todos os vendedores