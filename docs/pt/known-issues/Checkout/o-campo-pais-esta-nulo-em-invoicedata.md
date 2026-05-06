---
title: 'O campo "País" está nulo em invoiceData'
slug: o-campo-pais-esta-nulo-em-invoicedata
status: PUBLISHED
createdAt: 2021-06-15T20:11:49.000Z
updatedAt: 2023-12-19T21:21:53.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: country-field-as-null-in-invoicedata
locale: pt
kiStatus: Fixed
internalReference: 382175
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O campo “país” em `invoiceData` pode ficar nulo se for enviado via API ou se houver um endereço de faturamento no Sistema de Perfil com o país em branco; assim, os pedidos serão criados com dados incompletos em `invoiceData`.

## Simulação

- Monte um carrinho com itens;
- Envie o `invoiceData` sem o campo “país” preenchido via API;
- Conclua a compra.

## Workaround

N/A