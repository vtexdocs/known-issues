---
title: 'O tamanho do cookie de propriedade do checkout pode causar falhas nas solicitações devido ao limite de tamanho'
slug: o-tamanho-do-cookie-de-propriedade-do-checkout-pode-causar-falhas-nas-solicitacoes-devido-ao-limite-de-tamanho
status: PUBLISHED
createdAt: 2026-05-04T21:09:39.890Z
updatedAt: 2026-05-04T21:09:39.890Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ownership-cookie-size-may-lead-to-broken-requests-due-to-size-limit
locale: pt
kiStatus: Backlog
internalReference: 1401406
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em alguns casos, quando um novo endereço é adicionado a um carrinho com um valor `CheckoutOrderFormOwnership`, o valor do cookie já existente será incrementado pela resposta da API do Checkout.

Esse comportamento pode levar a cenários de solicitações com falhas devido ao limite de tamanho do cookie em implementações que dependem do cookie `CheckoutOrderFormOwnership` do Checkout.

Cenários conhecidos:


- Quando a configuração `useOwnershipCookie` do OrderForm está definida como `false`;
  - Adicionar um novo endereço a um carrinho com um valor para o cookie `CheckoutOrderFormOwnership` sempre resultará no aumento do tamanho do cookie.


- Quando a configuração `useOwnershipCookie` do OrderForm está definida como `true`;
  - Adicionar um carrinho com um novo valor `addressId` a um carrinho com um valor para o cookie `CheckoutOrderFormOwnership` sempre resultará no aumento do tamanho do cookie.
  - Adicionar um carrinho com um valor `addressId` já existente a um carrinho com um valor para o cookie `CheckoutOrderFormOwnership` não resultará no aumento do tamanho do cookie.

## Simulação

- Defina `useOwnershipCookie` como `false` na configuração do OrderForm da loja;
- Crie um novo carrinho e adicione qualquer item;
- Adicione qualquer número de endereços; o cookie de resposta `CheckoutOrderFormOwnership` deve sempre aumentar.


- Defina `useOwnershipCookie` como `true` na configuração do OrderForm da loja;
- Crie um novo carrinho e adicione qualquer item;
- Adicione qualquer endereço com um valor `addressId`;
- Adicione qualquer número de endereços com valores `addressId` diferentes entre os endereços já existentes no carrinho; o tamanho do cookie de resposta `CheckoutOrderFormOwnership` deve sempre aumentar

## Workaround

N/A