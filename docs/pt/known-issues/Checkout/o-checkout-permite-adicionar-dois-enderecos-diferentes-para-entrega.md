---
title: 'O checkout permite adicionar dois endereços diferentes para entrega'
slug: o-checkout-permite-adicionar-dois-enderecos-diferentes-para-entrega
status: PUBLISHED
createdAt: 2023-11-06T22:03:09.000Z
updatedAt: 2023-11-07T21:28:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-allows-to-add-2-different-addresses-for-delivery
locale: pt
kiStatus: Backlog
internalReference: 931225
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O checkout permite adicionar dois endereços diferentes para entrega no formulário de pedido, por exemplo, um "comercial" e um "residencial" (definidos pelo campo 'addressType'), quando um deles é descartável.

Quando ambos os endereços são selecionados, aparece a mensagem de erro “Não é possível se comunicar com o vendedor”, e o comprador não pode prosseguir para as próximas etapas.

## Simulação

- Envie um novo endereço via API “Adicionar endereço de entrega” e selecione a opção de entrega;
- Adicione um cliente que já tenha um perfil completo via API “Adicionar perfil do cliente”.

## Workaround

N/A