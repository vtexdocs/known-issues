---
title: 'O e-mail de reembolso do pedido não é enviado quando um valor adicional é reembolsado usando a nova interface do usuário (OMS).'
slug: o-email-de-reembolso-do-pedido-nao-e-enviado-quando-um-valor-adicional-e-reembolsado-usando-a-nova-interface-do-usuario-oms
status: PUBLISHED
createdAt: 2022-04-19T15:27:06.000Z
updatedAt: 2023-03-08T18:00:37.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-refund-email-not-getting-sent-when-additional-amount-is-refunded-using-new-ui-oms
locale: pt
kiStatus: Fixed
internalReference: 563300
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um pedido é devolvido pelo Marketplace por meio da "nova interface do usuário" e um valor "adicional" é inserido nessa interface, isso gera um vale-presente por engano e, com isso, o Checkout retorna um erro informando que "não há valor a ser estornado" e o e-mail transacional "vtexcommerce-order-refunded" não é enviado ao cliente final.

## Simulação

Para simular este caso, é necessário efetuar um reembolso, adicionando um valor extra através da “New_UI”.
O envio do e-mail transacional “vtexcommerce-order-refunded” ao cliente final não será identificado.

## Workaround

Nesses casos em que o reembolso ocorreu no "New_UI", não temos uma solução alternativa. Se for necessário fazer um reembolso, é possível fazê-lo através do Old_UI.