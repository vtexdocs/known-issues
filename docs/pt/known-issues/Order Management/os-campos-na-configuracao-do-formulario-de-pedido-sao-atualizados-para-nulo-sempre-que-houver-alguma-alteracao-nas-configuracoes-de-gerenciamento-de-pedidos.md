---
title: 'Os campos na configuração do formulário de pedido são atualizados para nulo sempre que houver alguma alteração nas configurações de gerenciamento de pedidos'
slug: os-campos-na-configuracao-do-formulario-de-pedido-sao-atualizados-para-nulo-sempre-que-houver-alguma-alteracao-nas-configuracoes-de-gerenciamento-de-pedidos
status: PUBLISHED
createdAt: 2023-02-06T20:59:56.000Z
updatedAt: 2024-05-09T12:44:37.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: fields-in-the-orderform-configuration-are-updated-to-null-when-there-is-any-change-in-order-management-settings
locale: pt
kiStatus: Fixed
internalReference: 748404
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao atualizar qualquer informação nas Configurações de Gerenciamento de Pedidos (no painel de administração), os campos `paymentSystemToCheckFirstInstallment` e `defaultPaymentSystemToApplyOnUserOrderForm` são definidos como `null` na configuração do formulário de pedido

## Simulação

- Configure os campos `paymentSystemToCheckFirstInstallment` e `defaultPaymentSystemToApplyOnUserOrderForm` na configuração do formulário de pedido via API
- Altere qualquer item nas Configurações de gerenciamento de pedidos (área administrativa)
- Ao fazer a consulta Get à configuração do formulário de pedido, você verá esses campos como `null`

## Workaround

Salve a configuração do formulário de pedido com os valores corretos para os campos `paymentSystemToCheckFirstInstallment` e `defaultPaymentSystemToApplyOnUserOrderForm` após a alteração nas configurações de gerenciamento de pedidos