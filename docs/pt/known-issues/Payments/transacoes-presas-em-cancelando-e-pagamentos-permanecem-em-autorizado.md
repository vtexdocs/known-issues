---
title: 'Transações presas em "Cancelando" e pagamentos permanecem em "Autorizado".'
slug: transacoes-presas-em-cancelando-e-pagamentos-permanecem-em-autorizado
status: PUBLISHED
createdAt: 2025-10-17T15:42:19.000Z
updatedAt: 2026-09-14T22:02:49.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-canceling-and-payments-remain-in-authorized
locale: pt
kiStatus: Backlog
internalReference: 1309418
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Algumas transações permanecem com o status "Cancelando" enquanto seus respectivos pagamentos permanecem com o status "Autorizado", sem progredir para o status final "Concluído" ou "Cancelado". O problema ocorre quando o Processador de Pagamentos não atualiza o status do pagamento após receber a solicitação de cancelamento, o que pode ser causado por fatores internos ou externos.

## Simulação

Não é possível simular.

## Workaround

Não há solução alternativa.