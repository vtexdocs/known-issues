---
title: 'Em alguns casos, o Checkout-UI não exibe o valor correto a ser pago com o Crédito do Cliente para a parcela 1'
slug: em-alguns-casos-o-checkoutui-nao-exibe-o-valor-correto-a-ser-pago-com-o-credito-do-cliente-para-a-parcela-1
status: PUBLISHED
createdAt: 2023-02-06T20:00:18.000Z
updatedAt: 2023-02-06T20:00:18.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: in-some-cases-checkoutui-does-not-show-the-correct-amount-to-be-paid-with-customer-credit-for-1x-installment
locale: pt
kiStatus: Backlog
internalReference: 748320
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em um cenário em que o Crédito do Cliente é usado para pagar um valor inferior ao valor total do carrinho, o menu suspenso exibe, para a opção de 1 parcela, o valor total, ignorando os descontos previstos, como o pagamento com outro método de pagamento, por exemplo, um cartão-presente.

Trata-se de um problema apenas do lado do cliente; portanto, se o usuário fizer um pedido usando essa opção do menu suspenso, a API de checkout enviará o valor correto para o gateway.

## Simulação

- Certifique-se de que a conta tenha condições de pagamento com 1x parcela para crédito do cliente;
- Vá para a parte de pagamento no fluxo de checkout e escolha crédito do cliente como forma de pagamento junto com um cartão-presente. Observe que o valor no menu suspenso aparece incorretamente.

## Workaround

N/A