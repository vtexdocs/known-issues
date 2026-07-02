---
title: 'Decisão: Reembolsos Parciais - O valor reembolsado aos clientes está incorreto.'
slug: decisao-reembolsos-parciais-o-valor-reembolsado-aos-clientes-esta-incorreto
status: PUBLISHED
createdAt: 2020-09-26T01:31:10.000Z
updatedAt: 2026-07-02T16:54:57.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: decidir-partial-refunds-wrong-amount-is-being-refunded-to-the-customers
locale: pt
kiStatus: No Fix
internalReference: 290981
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um reembolso parcial é emitido através do conector Decidir, o valor efetivamente reembolsado para o cartão de crédito do cliente não corresponde ao valor exibido na transação VTEX. O registro da transação aparece correto no painel de administração, mas o cliente recebe um valor de reembolso diferente.

## Simulação

Não foi possível reproduzir o problema de forma consistente. A discrepância ocorre devido a uma incompatibilidade de formatação na forma como o valor do reembolso é enviado para o Decidir.

## Workaround

Não disponível.