---
title: 'Alterar o número de caracteres no boleto Braspag'
slug: alterar-o-numero-de-caracteres-no-boleto-braspag
status: PUBLISHED
createdAt: 2023-03-14T19:01:30.000Z
updatedAt: 2023-03-20T19:12:46.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: change-the-number-of-characters-in-the-braspag-slip
locale: pt
kiStatus: Backlog
internalReference: 771045
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um pedido é gerado via boleto com o Braspag e os dados do endereço têm mais de 40 caracteres, esses dados são cortados. É necessário implementar uma melhoria, alterando o limite de caracteres dos campos de endereço de 40 para 60.

## Simulação

Faça um pedido com o Braspag via boleto bancário e, nos dados de endereço, insira um endereço com mais de 40 caracteres.

## Workaround

N/a