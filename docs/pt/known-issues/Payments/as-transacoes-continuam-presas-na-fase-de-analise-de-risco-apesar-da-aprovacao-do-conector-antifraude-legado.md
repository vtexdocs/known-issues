---
title: 'As transações continuam presas na fase de análise de risco, apesar da aprovação do conector antifraude legado.'
slug: as-transacoes-continuam-presas-na-fase-de-analise-de-risco-apesar-da-aprovacao-do-conector-antifraude-legado
status: PUBLISHED
createdAt: 2026-03-09T12:51:52.770Z
updatedAt: 2026-03-09T12:51:52.770Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-analyzing-risk-despite-legacy-anti-fraud-connector-approval
locale: pt
kiStatus: Fixed
internalReference: 1344359
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em alguns casos, o Transaction Worker não consegue avançar a transação para o status esperado, mesmo após receber uma resposta bem-sucedida (200 OK) do conector legado. Como resultado, as transações podem permanecer presas em **Analisando risco** e os pedidos correspondentes permanecem em “**Pagamento pendente**”. Esse comportamento pode ocorrer quando o conector legado retorna corretamente uma resposta aprovada, mas o processo interno que atualiza o status da transação não é executado corretamente.

## Simulação

Não é possível simular.

## Workaround

Abra um ticket para a equipe de suporte ao produto.