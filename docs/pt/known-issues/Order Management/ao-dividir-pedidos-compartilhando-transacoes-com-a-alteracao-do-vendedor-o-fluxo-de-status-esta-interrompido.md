---
title: 'Ao dividir pedidos compartilhando transações com a alteração do vendedor, o fluxo de status está interrompido.'
slug: ao-dividir-pedidos-compartilhando-transacoes-com-a-alteracao-do-vendedor-o-fluxo-de-status-esta-interrompido
status: PUBLISHED
createdAt: 2024-08-16T00:15:19.000Z
updatedAt: 2026-09-14T23:02:38.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: split-orders-sharing-transaction-with-change-seller-the-status-flow-is-broken
locale: pt
kiStatus: Fixed
internalReference: 1082298
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Pedidos divididos que compartilham a transação com vendedores intermediários não podem avançar para a fase de fatura. Embora todos os pedidos de vendedores intermediários sejam cancelados corretamente e o último vendedor seja faturado, o pedido no marketplace não consegue concluir todo o fluxo e progredir para a fase de fatura. Possivelmente, após o tempo limite, acaba sendo cancelado.

Isso ocorre porque o gateway com o conector utilizado não consegue simplesmente "liquidar" a parte do pagamento correspondente ao vendedor que liquidou o pagamento total do pedido.

Quando o outro pedido faz uma alteração de vendedor, ele tenta executar uma etapa que se comunica com o gateway para informar essa alteração de vendedor (associada ao minicarrinho), mas para o gateway o pagamento já foi totalmente capturado devido ao erro nessa chamada, e o pedido não pode ser processado e progredir no fluxo de trabalho.

## Simulação

Pedidos divididos que compartilham a transação e um desses pedidos precisa de mais de um vendedor intermediário.

Assim que a transação for liquidada, o valor total será liquidado.

Assim, ao final de todo o processo, o pedido original do marketplace, dividido com a alteração do vendedor, não é movido para a fase de fatura e será cancelado após o tempo limite do fluxo de trabalho.

## Workaround

Infelizmente, não há solução alternativa para este cenário no momento.