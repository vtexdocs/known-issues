---
title: 'Não é possível criar pedidos de assinatura depois que o SKU for associado a um presente indisponível'
slug: nao-e-possivel-criar-pedidos-de-assinatura-depois-que-o-sku-for-associado-a-um-presente-indisponivel
status: PUBLISHED
createdAt: 2021-07-14T19:02:16.000Z
updatedAt: 2023-05-19T19:13:03.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscriptions-orders-can-not-be-created-once-the-sku-has-linked-to-a-gift-unavailable
locale: pt
kiStatus: Fixed
internalReference: 395965
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Existe uma condição em que os pedidos de assinatura não podem ser criados porque estão vinculados a um **brinde indisponível**, mesmo que os itens da assinatura estejam disponíveis.

## Simulação

- Para simular isso, você precisa de um brinde (como a promoção **Compre um, ganhe outro**) vinculado a um SKU da assinatura, e esse brinde deve estar indisponível após a compra ser realizada e antes do próximo ciclo.
- O erro no ciclo da assinatura é “**Não foi possível selecionar um SLA para o SKU {SKU ID}**”

## Workaround

A maneira de evitar esse cenário é remover a vinculação do brinde fora de estoque ou garantir que o brinde tenha estoque, caso você queira criar um novo ciclo com o brinde.