---
title: 'Mercado Livre Multi-Origem - pedidos alocados a estoque inativo'
slug: mercado-livre-multiorigem-pedidos-alocados-a-estoque-inativo
status: PUBLISHED
createdAt: 2026-05-07T22:32:34.000Z
updatedAt: 2026-11-12T21:49:16.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: mercado-livre-multiorigin-orders-allocated-to-inactive-stock
locale: pt
kiStatus: Fixed
internalReference: 1403557
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Pedidos do Mercado Livre foram criados no VTEX e alocados a um local de estoque que estava desativado no mapeamento Multi-Origem da conta.

## Simulação

Conta VTEX integrada ao Mercado Livre usando Multi-Origem.

1. A atribuição de estoque não estava configurada no Multi-Origem.

O pedido foi criado no OMS usando estoque de um armazém que não está devidamente atribuído no Multi-Origem.

## Workaround

Uma alternativa seria remover a política comercial do Mercado Livre dos armazéns que não estão ativos no Multi-Origem.

Dessa forma, o checkout não os selecionará, evitando a criação de pedidos com o armazém incorreto.