---
title: 'O pedido com juros apresenta problemas ao tentar devolver todos os itens e reembolsar o valor total pago'
slug: o-pedido-com-juros-apresenta-problemas-ao-tentar-devolver-todos-os-itens-e-reembolsar-o-valor-total-pago
status: PUBLISHED
createdAt: 2021-06-01T17:52:51.000Z
updatedAt: 2023-09-18T20:52:55.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-with-interest-has-problems-when-trying-to-return-all-the-items-and-refund-the-total-payment
locale: pt
kiStatus: Backlog
internalReference: 376077
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A plataforma impede o estorno de valores superiores ao valor total do pedido. Isso se torna um problema no caso de estornos de pedidos em que a forma de pagamento envolve juros.
Além do **valor total**, os pedidos possuem um **valor faturado**, que, por motivos legais, não pode incluir os juros aplicados com base na forma de pagamento.
Consequentemente, a plataforma retorna um erro com status 400 quando é feita uma tentativa de emitir uma fatura de estorno com um valor superior ao faturado anteriormente.

###

## Simulação

1. Na sua loja, crie um pedido com juros aplicados ao pagamento;
2. Tente realizar um estorno sobre o valor total pago via API com a solicitação de envio de fatura;
3. Observe que a API retorna um erro com status 400, indicando que não é possível emitir uma fatura do tipo INPUT com um valor superior ao valor total do pedido.

###

## Workaround

N/A