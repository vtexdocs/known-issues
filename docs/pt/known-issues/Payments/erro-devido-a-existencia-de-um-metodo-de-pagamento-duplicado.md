---
title: 'Erro devido à existência de um método de pagamento duplicado'
slug: erro-devido-a-existencia-de-um-metodo-de-pagamento-duplicado
status: PUBLISHED
createdAt: 2023-11-02T12:01:41.000Z
updatedAt: 2023-11-02T12:22:43.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-on-duplicate-payment-method
locale: pt
kiStatus: Backlog
internalReference: 929428
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao duplicar uma forma de pagamento que não oferece parcelamento, o operador recebe a seguinte mensagem na tela: “O sistema de pagamento atual não permite opções de parcelamento”. Isso ocorre porque, ao criar o corpo da solicitação de criação na nova regra, alguns campos são inseridos por padrão, incluindo o campo `installmentOptions`, mas esse campo não existe para pagamentos em dinheiro, como cartão de débito e boleto (Brasil).

## Simulação

1. Acesse a tela de condições de pagamento
2. Selecione uma forma de pagamento que não ofereça parcelamento.
3. Clique no botão para duplicar a regra.
4. A seguinte mensagem de erro será exibida na tela: “O sistema de pagamento atual não permite opções de parcelamento”

## Workaround

Temos duas maneiras de contornar esse problema:

1. Crie outra regra com as mesmas configurações daquela que você deseja duplicar;
2. Crie a regra via API, `https://.myvtex.com/api/payments/pvt/rules/`, removendo o campo installmentOptions do corpo da solicitação.