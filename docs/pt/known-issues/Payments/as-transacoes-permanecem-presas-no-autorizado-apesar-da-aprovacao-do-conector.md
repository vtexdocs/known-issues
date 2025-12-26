---
title: 'As transações permanecem presas no Autorizado, apesar da aprovação do conector'
slug: as-transacoes-permanecem-presas-no-autorizado-apesar-da-aprovacao-do-conector
status: PUBLISHED
createdAt: 2025-12-26T14:37:23.534Z
updatedAt: 2025-12-26T14:37:23.534Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-authorized-despite-connector-approval
locale: pt
kiStatus: Backlog
internalReference: 1344357
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em alguns casos, o Transaction Worker não consegue avançar a transação para o status esperado, mesmo depois de receber uma resposta bem-sucedida (200 OK) do conector. Como resultado, as transações podem permanecer presas em **Authorized** e os pedidos correspondentes permanecem em **"Payment Pending "**. Esse comportamento pode ocorrer quando o conector retorna corretamente uma resposta aprovada, mas o processo interno que atualiza o status da transação não é executado corretamente.
## Simulação


Não é possível simular
## Workaround


Abra um tíquete para a equipe de suporte ao produto.



