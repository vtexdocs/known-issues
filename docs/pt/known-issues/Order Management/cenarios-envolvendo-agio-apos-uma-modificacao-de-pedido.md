---
title: 'Cenários envolvendo ágio após uma modificação de pedido'
slug: cenarios-envolvendo-agio-apos-uma-modificacao-de-pedido
status: PUBLISHED
createdAt: 2026-05-19T22:54:03.000Z
updatedAt: 2026-05-19T22:54:46.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: scenarios-involving-goodwill-following-an-order-modification
locale: pt
kiStatus: Backlog
internalReference: 1409506
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Identificamos um problema no cenário do Goodwill — especificamente em casos envolvendo “modificações de pedido” — em que os valores de reembolso são agregados somando-se *todos* os recibos `refundPayment` associados ao pedido, sem distinguir entre aqueles resultantes de uma “Modificação de Pedido” e aqueles de um reembolso independente.
O problema reside no fato de que o `orderValueProportionalToTransaction` já é calculado com base no valor pós-modificação (ou seja, o valor *após* a alteração), que já incorpora o desconto aplicado durante a modificação do pedido. Consequentemente, o recibo de reembolso gerado pela modificação do pedido é subtraído uma segunda vez — resultando em contagem dupla.

Esse comportamento impede que as contas enviem uma nota fiscal de entrada/bom senso, gerando o seguinte erro:

400 BAD_REQUEST
"Não é possível usar o reembolso de restituição superior a 0,0"

## Simulação

É de fato possível simular isso criando um pedido com valor total de $100,00, contendo dois itens — A e B —, em que o Item A custa $70,00 e o Item B custa $30,00. Remova o Item A por meio da Modificação do Pedido e, em seguida, tente processar um reembolso usando Goodwill.

## Workaround

Não temos uma solução alternativa no momento.