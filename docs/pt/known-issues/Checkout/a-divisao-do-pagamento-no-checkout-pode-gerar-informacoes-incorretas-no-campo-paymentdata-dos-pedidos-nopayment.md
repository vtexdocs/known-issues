---
title: 'A divisão do pagamento no checkout pode gerar informações incorretas no campo "paymentData" dos pedidos (NO-PAYMENT)'
slug: a-divisao-do-pagamento-no-checkout-pode-gerar-informacoes-incorretas-no-campo-paymentdata-dos-pedidos-nopayment
status: PUBLISHED
createdAt: 2021-02-02T22:45:40.000Z
updatedAt: 2023-01-02T14:35:23.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-payment-split-may-generate-incorrect-information-in-the-paymentdata-of-orders-nopayment
locale: pt
kiStatus: Backlog
internalReference: 330802
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As informações de pagamento entre diferentes pedidos do mesmo "orderGroup" podem estar incorretas quando mais de um pedido é pago por meio do mesmo "merchant" (a conta que processa o pagamento). Os valores pagos estão corretos, correspondendo à soma de cada pedido do grupo, mas os valores referentes a cada um deles não constam no objeto "paymentData" do pedido.

Quando isso ocorre, um dos pedidos do grupo é tomado como base e apresenta a soma desses valores, enquanto os outros pedidos ficam com uma transação vazia, cujo ID é “NO-PAYMENT”.

O pedido de atendimento não é afetado, pois nunca possui dados específicos sobre o pagamento realizado no marketplace e apresenta a repartição correta, juntamente com a descrição do “valor assumido pelo afiliado”. O cenário é ruim quando o marketplace deseja consumir os pedidos da loja, incluindo aqueles enviados por outros vendedores, e então contabilizar os valores de pagamento de cada parte (geralmente útil para reconciliação).

Observação: este cenário está diretamente relacionado à divisão de pagamento realizada pelo próprio checkout.

## Simulação

Em teoria, qualquer carrinho com vários vendedores, mas em que o pagamento é feito diretamente ao marketplace.

## Workaround

Para fins de integração de pedidos, é possível verificar se há mais pedidos no mesmo “orderGroup” para conferir seus valores e poder redistribuí-los entre os pedidos do mesmo grupo.