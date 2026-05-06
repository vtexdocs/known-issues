---
title: 'Menu "Pedidos" do MELI Bridge não exibe as informações do ID do pedido'
slug: menu-pedidos-do-meli-bridge-nao-exibe-as-informacoes-do-id-do-pedido
status: PUBLISHED
createdAt: 2023-08-16T10:46:38.000Z
updatedAt: 2023-10-05T18:50:59.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-bridge-orders-menu-not-showing-the-orderid-information
locale: pt
kiStatus: Fixed
internalReference: 881733
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, temos um problema que afeta apenas a visibilidade de alguns pedidos do MELI. O que ocorre é que, no momento, estamos registrando o ShipmentID no menu da ponte de pedidos, mas algumas mensagens de erro não apresentam o OrderID, o que é necessário em alguns casos, já que o OrderID é a informação que os vendedores têm no Portal MELI

## Simulação

No menu de pedidos da ponte, algumas mensagens de erro não estão registrando o OrderID, o que dá a impressão de que alguns pedidos não estão na ponte VTEX; no entanto, os vendedores podem localizar os pedidos pesquisando pelo ShipmentID.

## Workaround

Pesquise pelo ShipmentID em vez do OrderID