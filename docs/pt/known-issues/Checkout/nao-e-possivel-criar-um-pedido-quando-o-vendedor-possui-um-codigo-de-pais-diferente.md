---
title: 'Não é possível criar um pedido quando o vendedor possui um código de país diferente'
slug: nao-e-possivel-criar-um-pedido-quando-o-vendedor-possui-um-codigo-de-pais-diferente
status: PUBLISHED
createdAt: 2023-03-03T13:02:05.000Z
updatedAt: 2023-03-03T14:09:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: order-cannot-be-created-when-seller-has-a-different-country-code
locale: pt
kiStatus: Backlog
internalReference: 763955
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em um marketplace, quando há um vendedor configurado com um código de país diferente, o serviço de atendimento de pedidos levará em consideração o código de país do vendedor ao efetuar o pedido. Isso pode gerar um erro se o código de país do vendedor definir campos obrigatórios diferentes dos do marketplace.

## Simulação

- Tenha um vendedor com um código de país diferente;
- Monte um carrinho com itens desse vendedor;
- Conclua a compra; você receberá uma mensagem de erro e o pedido não será feito.

## Workaround

Configure o mesmo código de país no vendedor.