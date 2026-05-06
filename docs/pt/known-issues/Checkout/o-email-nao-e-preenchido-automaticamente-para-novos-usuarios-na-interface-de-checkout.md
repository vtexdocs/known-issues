---
title: 'O e-mail não é preenchido automaticamente para novos usuários na interface de checkout'
slug: o-email-nao-e-preenchido-automaticamente-para-novos-usuarios-na-interface-de-checkout
status: PUBLISHED
createdAt: 2023-08-25T00:24:50.000Z
updatedAt: 2023-08-25T15:27:32.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: email-not-autofilling-for-new-users-on-checkoutui
locale: pt
kiStatus: Backlog
internalReference: 887645
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um novo usuário insere um novo endereço de e-mail na etapa de e-mail e avança para a próxima página, no componente de dados do cliente, o campo de e-mail não é preenchido automaticamente.
Isso ocorre porque não há nenhum usuário registrado com esse endereço de e-mail. Como resultado, o `orderForm` carregado também contém um campo de e-mail vazio, fazendo com que ele permaneça em branco e exigindo que o cliente insira novamente seu endereço de e-mail.

## Simulação

1. Navegue até a página de checkout onde os clientes inserem seu e-mail.
2. Insira um e-mail nunca usado antes na loja.
3. Vá para o componente de perfil do cliente.
4. A caixa de e-mail estará vazia, e você terá que digitá-lo novamente.

## Workaround

N/A