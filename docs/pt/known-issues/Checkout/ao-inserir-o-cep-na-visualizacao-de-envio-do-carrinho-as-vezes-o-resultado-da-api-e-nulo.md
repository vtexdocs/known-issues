---
title: 'Ao inserir o CEP na visualização de envio do carrinho, às vezes o resultado da API é nulo'
slug: ao-inserir-o-cep-na-visualizacao-de-envio-do-carrinho-as-vezes-o-resultado-da-api-e-nulo
status: PUBLISHED
createdAt: 2021-12-06T14:26:24.000Z
updatedAt: 2024-05-21T13:03:13.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pasting-postal-code-in-shipping-preview-cart-sometimes-returns-null-api-result
locale: pt
kiStatus: Backlog
internalReference: 481878
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Depois de inserir o código postal uma vez na visualização do envio e optar por colá-lo novamente, às vezes ocorre uma solicitação nula à API de código postal.

A solicitação é `/api/checkout/pub/postal-code/null/postalcodenumber` e retorna um erro 500.

## Simulação

- Acesse o carrinho e adicione um código postal;
- Clique para alterá-lo e cole outro código postal (ou até mesmo o mesmo);
- Vá para a etapa de envio, e o endereço pode estar incompleto.

## Workaround

O usuário precisará clicar no botão “Calcular” ou pressionar a tecla Enter; em alguns casos, digitar o código postal sem inseri-lo.