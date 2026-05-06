---
title: 'O relatório de exportação de pedidos não funciona quando há pedidos com grande volume de dados na lista'
slug: o-relatorio-de-exportacao-de-pedidos-nao-funciona-quando-ha-pedidos-com-grande-volume-de-dados-na-lista
status: PUBLISHED
createdAt: 2023-05-25T20:58:36.000Z
updatedAt: 2023-05-25T20:58:36.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-export-report-does-not-work-when-there-are-some-order-with-big-payload-on-the-list
locale: pt
kiStatus: Backlog
internalReference: 832429
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A exportação de pedidos não funciona corretamente porque a tarefa de exportação é cancelada quando há um pedido na lista com grande volume de dados, por exemplo, no caso de um pedido com mais de 500 itens no JSON.

## Simulação

Configure um pedido com grande volume de dados, com mais de 500 itens, e tente exportá-lo usando a opção “Exportar pedidos filtrados” no Admin.

## Workaround

A solução alternativa é dividir o filtro. Defina a data anterior a esse pedido e a data posterior a esse pedido.