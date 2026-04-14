---
title: 'As transações continuam bloqueadas, apesar da aprovação do conector'
slug: as-transacoes-continuam-bloqueadas-apesar-da-aprovacao-do-conector
status: PUBLISHED
createdAt: 2026-04-14T12:27:06.928Z
updatedAt: 2026-04-14T12:27:06.928Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-despite-connector-approval
locale: pt
kiStatus: Scheduled
internalReference: 1302349
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em alguns casos, o **Transaction Worker** não consegue avançar a transação para o status esperado, mesmo após receber uma resposta bem-sucedida (**200 OK** com o status `"approved"`) do conector. Como resultado, as transações podem permanecer presas em **Autorização pendente**, **Autorizada** ou **Analisando risco**, e os pedidos correspondentes permanecem em **Pagamento pendente**. Esse comportamento pode ocorrer quando o conector retorna corretamente uma resposta de aprovação, mas o processo interno que atualiza o status da transação não é executado corretamente.

> **Importante:** Após a análise de impacto e o alinhamento interno em (dez/2025), este KI foi **dividido em quatro KIs mais específicos**, cada um focado em um status específico no qual a transação permanece travada após a aprovação do conector:
>
> 1. **[KI] Transações permanecem travadas em Autorização pendente apesar da aprovação do conector**
> 2. **[KI] Transações permanecem travadas em Autorizado apesar da aprovação do conector**
> 3. **[KI] As transações permanecem paralisadas em Analisando Risco, apesar da aprovação do conector antifraude legado**
> 4. **[KI] As transações permanecem paralisadas em Analisando Risco, apesar da aprovação do conector AFPP**

O texto acima reflete a descrição consolidada original usada antes dessa divisão e deve ser lido como o **KI principal/raiz** para esses quatro KIs derivados.

## Simulação

Não é possível simular.

## Workaround

A solução alternativa depende do status atual da transação:


- Cenário 1 – Transação presa em "Pending Authorization" (Autorização pendente) Execute a seguinte API para avançar manualmente a autorização: POST /api/pvt/transactions/{transactionId}/authorization-request 🔗 Referência da API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request
- Cenário 2 – Transação travada em Autorizada
- Cenário 3 – Transação travada em Analisando Risco
Para os cenários 2 e 3, é necessário abrir um ticket para o Produto.



%0A