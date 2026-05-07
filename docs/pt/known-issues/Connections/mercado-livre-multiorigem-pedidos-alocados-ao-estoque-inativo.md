---
title: 'Mercado Livre Multi-Origem - pedidos alocados ao estoque inativo'
slug: mercado-livre-multiorigem-pedidos-alocados-ao-estoque-inativo
status: PUBLISHED
createdAt: 2026-05-07T22:32:34.000Z
updatedAt: 2026-05-07T22:32:34.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-multiorigin-orders-allocated-to-inactive-stock
locale: pt
kiStatus: Backlog
internalReference: 1403557
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os pedidos do Mercado Livre foram criados no VTEX e alocados a um local de estoque que estava desativado no mapeamento Multi-Origin da conta.

## Simulação

Conta VTEX integrada ao Mercado Livre usando o Multi-Origin.

1. A atribuição de estoque não estava configurada no Multi-Origin.
O pedido foi criado no OMS utilizando estoque de um depósito que não está devidamente atribuído no Multi-Origin.

## Workaround

Uma alternativa seria remover a política comercial do Mercado Livre dos docks que não estão ativos no Multi-Origin.
Dessa forma, o checkout não os selecionará, impedindo que pedidos sejam criados com o depósito incorreto.