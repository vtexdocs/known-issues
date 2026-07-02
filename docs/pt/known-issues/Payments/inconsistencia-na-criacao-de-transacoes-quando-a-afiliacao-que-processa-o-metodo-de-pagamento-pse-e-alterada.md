---
title: 'Inconsistência na criação de transações quando a afiliação que processa o método de pagamento PSE é alterada.'
slug: inconsistencia-na-criacao-de-transacoes-quando-a-afiliacao-que-processa-o-metodo-de-pagamento-pse-e-alterada
status: PUBLISHED
createdAt: 2022-09-14T22:29:45.000Z
updatedAt: 2026-07-02T15:52:00.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistency-in-creating-transactions-when-the-affiliation-processing-the-pse-payment-method-is-switched
locale: pt
kiStatus: No Fix
internalReference: 658378
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma loja tem duas condições de pagamento configuradas para o método de pagamento PSE, cada uma processada por um conector diferente (PSE e MercadoPago), a alternância entre essas condições durante o checkout pode causar, intermitentemente, uma falha na criação da transação. O cliente vê um erro na página de checkout e o registro da transação resultante fica inacessível no painel de administração.

## Simulação

Não foi possível reproduzir o problema de forma consistente. A falha ocorre intermitentemente quando o cliente alterna entre condições de pagamento PSE processadas por conectores diferentes durante a mesma sessão de checkout.

## Workaround

Não disponível.