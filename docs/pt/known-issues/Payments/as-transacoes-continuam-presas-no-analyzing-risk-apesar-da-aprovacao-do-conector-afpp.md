---
title: 'As transações continuam presas no Analyzing Risk apesar da aprovação do conector AFPP'
slug: as-transacoes-continuam-presas-no-analyzing-risk-apesar-da-aprovacao-do-conector-afpp
status: PUBLISHED
createdAt: 2025-12-26T14:44:38.337Z
updatedAt: 2025-12-26T14:44:38.337Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-analyzing-risk-despite-afpp-connector-approval
locale: pt
kiStatus: Backlog
internalReference: 1344361
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em alguns casos, o Transaction Worker não consegue avançar a transação para o status esperado, mesmo depois de receber uma resposta bem-sucedida (200 OK) do conector antifraude AFPP. Como resultado, as transações podem permanecer presas em **Analyzing Risk** e os pedidos correspondentes permanecem em "**Payment Pending**" (Pagamento pendente). Esse comportamento pode ocorrer quando o conector AFPP retorna corretamente uma resposta aprovada, mas o processo interno que atualiza o status da transação não é executado corretamente.

## Simulação


Não é possível simular
## Workaround


Abra um tíquete para a equipe de suporte ao produto.



