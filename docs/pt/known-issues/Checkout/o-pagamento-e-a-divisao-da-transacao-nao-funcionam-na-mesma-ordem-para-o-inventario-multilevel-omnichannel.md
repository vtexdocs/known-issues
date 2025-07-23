---
title: 'O pagamento e a divisão da transação não funcionam na mesma ordem para o Inventário Multilevel Omnichannel'
id: 3rFyqzEnSwx2czwdlgDovU
status: PUBLISHED
createdAt: 2023-03-23T19:03:22.498Z
updatedAt: 2024-02-16T20:25:26.525Z
publishedAt: 2024-02-16T20:25:26.525Z
firstPublishedAt: 2023-03-23T19:03:23.526Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: payout-and-transaction-split-dont-work-in-the-same-order-for-multilevel-omnichannel-inventory
locale: pt
kiStatus: No Fix
internalReference: 777201
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Em um mercado com relacionamento multinível (MOI) de vendedores, quando um carrinho é montado com pelo menos um vendedor usando divisão de transação e outros usando divisão de pagamento, as transações com divisão de pagamento serão duplicadas repetindo os itens de diferentes vendedores. Este cenário não permitirá colocar o pedido, e a mensagem "Desculpe. Não foi possível processar os pagamentos solicitados" será mostrada.


##

## Simulação



- Configurar um vendedor com endpoint de checkout / para usar a relação multinível (MOI);
- Configurar um vendedor com endpoint de atendimento e permitir a divisão da transação;
- Montar um carrinho com esses vendedores;
- Fazer o pedido.


##

## Workaround


Usar divisão de pagamento para todos os vendedores



