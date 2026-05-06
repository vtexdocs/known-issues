---
title: 'O pedido com o status “Verificando fatura” não é atualizado para “Faturado”.'
slug: o-pedido-com-o-status-verificando-fatura-nao-e-atualizado-para-faturado
status: PUBLISHED
createdAt: 2022-01-07T21:53:56.000Z
updatedAt: 2025-02-24T18:19:52.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-with-status-of-verifying-invoice-does-not-update-to-invoiced
locale: pt
kiStatus: Backlog
internalReference: 500245
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Às vezes, o valor total da transação já foi capturado, mas seu status não é atualizado para "liquidado" ou "concluído". Isso pode ocorrer quando há uma inconsistência entre o que foi **efetivamente capturado** pelo provedor externo e o que foi registrado pelo gateway como **solicitado para captura**. Isso impossibilita o avanço da transação e a faturação do pedido. O pedido ficará preso na etapa “verificando fatura”.

## Simulação

Não é possível simular esse problema, mas podemos verificar se ele existe consultando, por meio da API `https://.myvtex.com/api/payments/pvt/transactions//settlements`, a diferença entre a matriz de solicitações e a matriz de ações.
Se houver uma divergência entre esses dois valores totais, podemos confirmar a inconsistência.

## Workaround

Abra um ticket no Suporte ao Produto - Pagamentos, para dar continuidade manualmente ao fluxo da transação.