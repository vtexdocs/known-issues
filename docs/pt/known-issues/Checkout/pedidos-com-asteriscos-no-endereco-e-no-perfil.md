---
title: 'Pedidos com asteriscos no endereço e no perfil.'
slug: pedidos-com-asteriscos-no-endereco-e-no-perfil
status: PUBLISHED
createdAt: 2021-04-27T02:27:09.000Z
updatedAt: 2026-10-15T22:11:05.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orders-with-asterisks-in-the-address-and-profile
locale: pt
kiStatus: Backlog
internalReference: 360783
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Pedidos podem ser criados com os campos `invoiceAddress`, `shippingAddress` ou `clientProfileData` contendo caracteres `*`, dando a impressão de que os dados foram mascarados. Esse comportamento ocorre quando um usuário finaliza a compra com um formulário de pedido que contém caracteres especiais `*` que são convertidos em string. Como esses são campos de texto, os dados do pedido são preenchidos com caracteres `***`, dando a impressão de que os dados estão realmente mascarados.

O bug reside no fato de que nossa API para realizar pedidos permite objetos com caracteres especiais nesses campos.

## Simulação

1. Adicione alguns produtos ao seu carrinho;

2. Durante o processo de finalização da compra, insira um endereço de cobrança válido e faça login em sua conta;

3. Abandone o carrinho ou saia do site sem concluir a compra;

4. Use nossa API para inserir um anexo e insira dados de perfil com "***" em alguns campos, como o de nome;

5. Faça um pedido usando este mesmo carrinho;
6. Observe que o pedido conterá os dados de envio com esses caracteres especiais.

## Workaround

N/A