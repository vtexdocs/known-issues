---
title: 'Os pedidos MELI FULL não estão gerando faturas no VTEX'
slug: os-pedidos-meli-full-nao-estao-gerando-faturas-no-vtex
status: PUBLISHED
createdAt: 2024-02-05T11:14:15.000Z
updatedAt: 2024-02-05T11:14:15.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-full-orders-not-creating-invoice-in-vtex
locale: pt
kiStatus: Backlog
internalReference: 976614
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, temos um problema com pedidos MELI FULL: se o pedido apresentar algum erro durante a criação no VTEX, como erro de SLA, falta de estoque etc., o processo de criação da nota fiscal no VTEX não é executado. Basicamente, o XML dentro do `embeddedInvoice` do OMS não está sendo criado nesses casos.

## Simulação

Se o pedido apresentar algum erro durante sua criação, o XML não será inserido no VTEX OMS.

## Workaround

Para evitar esse erro, os pedidos não devem ficar retidos no VTEX Bridge; para isso, configure sempre os SLAs necessários para evitar esse erro