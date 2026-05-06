---
title: 'O fluxo de login no checkout permite alterar o e-mail, mas o fluxo não é compatível'
slug: o-fluxo-de-login-no-checkout-permite-alterar-o-email-mas-o-fluxo-nao-e-compativel
status: PUBLISHED
createdAt: 2020-06-23T22:06:20.000Z
updatedAt: 2023-05-03T18:09:37.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-login-flow-allows-changing-email-but-flow-is-not-supported
locale: pt
kiStatus: Backlog
internalReference: 258447
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao finalizar a compra com um e-mail informado e dados ocultos, será necessário fazer o login caso o comprador queira alterar alguma informação. Na janela de login que se abrirá, o e-mail já estará preenchido com o contexto do carrinho, mas a interface permite que o e-mail “sugerido” seja modificado.

O e-mail sugerido não deve ser alterado. Se o cliente inserir outro e-mail, o fluxo de login não funcionará — na solicitação da API, ocorrerá um erro silencioso, e a interface ficará travada no estado “carregando”.

## Simulação

- No checkout, insira um e-mail com um perfil completo para que os dados sejam preenchidos automaticamente e mascarados;
- Tente alterar algumas informações, como o endereço (será necessário fazer login);
- Na caixa de login, o e-mail do carrinho já estará preenchido;
- Altere o e-mail na caixa de login;
- Tente prosseguir; não será possível.

## Workaround

A loja pode tornar esse campo somente leitura para o fluxo de login no checkout.