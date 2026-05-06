---
title: 'A transação fica travada na etapa de cancelamento quando um dos cartões é recusado'
slug: a-transacao-fica-travada-na-etapa-de-cancelamento-quando-um-dos-cartoes-e-recusado
status: PUBLISHED
createdAt: 2021-09-13T04:30:47.000Z
updatedAt: 2025-04-22T20:02:43.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-canceling-when-one-of-the-card-is-denied
locale: pt
kiStatus: No Fix
internalReference: 429082
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando é feito um pedido com dois cartões, sendo que um é aprovado e o outro é recusado, ocorre que o pedido fica retido com o valor capturado e não é cancelado automaticamente. A transação bloqueada está em processo de cancelamento

##

## Simulação

1. Faça uma compra com dois cartões de crédito.
2. Um dos cartões é recusado.

## Workaround

Não há solução para concluir o cancelamento, mas é possível reembolsar o valor capturado.


## **Notas internas**
Ao tentar cancelar a transação, ocorre o erro:

 {"error": {"code": "1","message": "Referência de objeto não definida para uma instância de um objeto.","exception": null }}

Mesmo que o valor correto e os dados do carrinho sejam passados.