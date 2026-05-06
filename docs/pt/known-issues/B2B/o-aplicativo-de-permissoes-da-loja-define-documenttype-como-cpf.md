---
title: 'O aplicativo de permissões da loja define "documentType" como "cpf"'
slug: o-aplicativo-de-permissoes-da-loja-define-documenttype-como-cpf
status: PUBLISHED
createdAt: 2023-04-27T15:19:37.000Z
updatedAt: 2023-05-23T18:01:37.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: storefront-permissions-app-sets-documenttype-as-cpf
locale: pt
kiStatus: Fixed
internalReference: 798330
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O aplicativo de permissões da loja virtual sempre define o campo "clientProfileData.documentType" como "cpf" no formulário de pedido. Isso pode fazer com que a transação seja recusada pelo provedor.

## Simulação

- Instale o B2B Suite;
- Configure uma organização;
- Acesse o site e faça um pedido.

## Workaround

Use o trecho de código abaixo para substituir o "documentType" do seu país no orderForm

    vtexjs.checkout .getOrderForm() .then(function(orderForm) { var clientProfileData = orderForm.clientProfileData clientProfileData.documentType = 'adicione aqui a chave para' return vtexjs.checkout.sendAttachment( "clientProfileData", clientProfileData ) }) .done(function(orderForm){})