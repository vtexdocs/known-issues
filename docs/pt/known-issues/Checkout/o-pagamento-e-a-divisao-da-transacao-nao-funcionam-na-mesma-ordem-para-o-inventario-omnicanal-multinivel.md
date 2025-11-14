---
title: 'O pagamento e a divisão da transação não funcionam na mesma ordem para o inventário omnicanal multinível'
slug: o-pagamento-e-a-divisao-da-transacao-nao-funcionam-na-mesma-ordem-para-o-inventario-omnicanal-multinivel
status: PUBLISHED
createdAt: 2025-11-14T19:17:11.225Z
updatedAt: 2025-11-14T19:17:11.225Z
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


Em um marketplace com vendedores de relacionamento multinível (MOI), quando um carrinho é montado com pelo menos um vendedor usando divisão de transação e outros usando divisão de pagamento, as transações com divisão de pagamento serão duplicadas, repetindo os itens de diferentes vendedores. Esse cenário não permitirá a realização do pedido, e a mensagem "Sorry. Não foi possível processar os pagamentos solicitados." será exibida.
## Simulação



- Configure um vendedor com ponto de extremidade de checkout / para usar o relacionamento multinível (MOI);
- Configure um vendedor com endpoint de atendimento e habilite a divisão de transações;
- Montar um carrinho com esses vendedores;
- Fazer o pedido.


## Workaround


Use a divisão de pagamento para todos os vendedores

