---
title: 'Pedidos com asteriscos no endereço e no perfil'
slug: pedidos-com-asteriscos-no-endereco-e-no-perfil
status: PUBLISHED
createdAt: 2021-04-26T23:27:09.000Z
updatedAt: 2024-06-06T20:16:02.000Z
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

Existem pedidos em que os campos `invoiceAddress`, `shippingAddress` ou `clientProfileData` são enviados como "mascarados", em vez do endereço real. Esse comportamento ocorre quando um usuário finaliza a compra com um formulário de pedido contendo dados mascarados que foram "convertidos em string". Como se trata de campos de string, os dados do pedido são preenchidos com a máscara "***".

Portanto, o bug reside no fato de que nossa API para fazer pedidos permite objetos com caracteres especiais nesses campos.

## Simulação

1. Adicione alguns produtos ao seu carrinho;
2. Durante o processo de checkout, insira um endereço de cobrança válido e faça login na sua conta;
3. Abandone o carrinho ou saia do site sem concluir a compra;
4. Use nossa API para inserir um anexo e coloque um endereço com "***" em alguns campos, como o de bairro;
5. Faça um pedido usando esse mesmo carrinho;
6. Observe que o pedido terá os dados de envio com esses caracteres especiais.

## Workaround

N/A