---
title: 'Paypal Plus - Transações não são canceladas com sucesso'
slug: paypal-plus-transacoes-nao-sao-canceladas-com-sucesso
status: PUBLISHED
createdAt: 2020-12-16T01:03:52.000Z
updatedAt: 2026-06-05T20:57:54.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: paypal-plus-transacoes-nao-sao-canceladas-com-sucesso
locale: pt
kiStatus: No Fix
internalReference: 316713
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar cancelar uma transação processada pelo conector **PayPal Plus**, o cancelamento falha com o seguinte erro:

> `Erro ao executar a operação de cancelamento. Consulte a exceção interna. Conector = PayPalPlus. Mensagem = A chave fornecida não estava presente no dicionário.`

A transação permanece em um estado não cancelado, e a operação de cancelamento não é concluída com sucesso.

## Simulação

Não foi possível reproduzir o problema em um ambiente controlado. O problema ocorre em produção para transações processadas pelo conector PayPal Plus quando um cancelamento é acionado.

## Workaround

Não há solução alternativa disponível.