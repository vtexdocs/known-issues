---
title: 'Problema ao validar o campo de valor ao comprar com dois cartões'
id: 6dr0p9WQPSHLkFaSbjI9J7
status: PUBLISHED
createdAt: 2022-03-28T01:05:19.734Z
updatedAt: 2024-07-01T18:48:07.379Z
publishedAt: 2024-07-01T18:48:07.379Z
firstPublishedAt: 2022-03-28T01:05:20.361Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: problem-while-validating-value-field-when-buying-with-two-cards
locale: pt
kiStatus: No Fix
internalReference: 460683
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando um comprador decide pagar com dois cartões de crédito e também quer alterar o valor pago por cada cartão, acontece que ao digitar caracteres sem números no campo de valor, nossa validação tem comportamento diferente dependendo de onde o usuário insere esse caractere.

- Se tentarmos digitar um caractere diferente do número no final do valor= Nossa validação só impede esse caractere
- Se tentarmos inserir um caractere que não seja número no meio do valor= Nossa validação apaga números, altera o valor inserido.
- Se tentarmos digitar um caractere que não seja um número no início do valor=, nós o sobregravamos com um "indefinido" e exibimos o seguinte erro



## Simulação


Vá a qualquer caixa de loja e escolha pagar com dois cartões e você poderá fazer estes testes



## Workaround


N/A

