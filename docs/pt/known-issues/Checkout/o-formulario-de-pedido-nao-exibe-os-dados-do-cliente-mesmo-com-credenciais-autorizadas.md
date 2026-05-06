---
title: 'O formulário de pedido não exibe os dados do cliente, mesmo com credenciais autorizadas'
slug: o-formulario-de-pedido-nao-exibe-os-dados-do-cliente-mesmo-com-credenciais-autorizadas
status: PUBLISHED
createdAt: 2022-05-19T16:25:14.000Z
updatedAt: 2023-09-27T20:39:14.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderform-not-returning-customers-data-even-for-authorized-credentials
locale: pt
kiStatus: Fixed
internalReference: 582070
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A interação com um orderForm na situação específica em que os dados do cliente foram importados automaticamente após o login removerá esses dados do orderForm, mesmo para “superusuários”, identificados por suas appKeys.

Essa ação é realizada para evitar o acesso não intencional aos dados dos clientes, mas não deve ser aplicada a usuários administrativos e integrações identificadas por credenciais autorizadas.

## Simulação

- Tenha um usuário com um perfil completo, garantindo que ele seja válido para o comportamento do SmartCheckout
- Realize o processo de login para esse usuário
- Verifique pelo navegador se as informações foram importadas para o formulário de pedido
- Faça uma solicitação "Get OrderForm" usando credenciais autorizadas
- O orderForm não retornará o "clientProfileData" e os endereços que estavam disponíveis no navegador

## Workaround

Use o parâmetro `?disableAutoCompletion=true` na URL "Get OrderForm". Esse parâmetro evita que o orderForm seja recalculado; os dados do cliente serão retornados