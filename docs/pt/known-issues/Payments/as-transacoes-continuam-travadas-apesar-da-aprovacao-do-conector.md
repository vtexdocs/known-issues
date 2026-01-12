---
title: 'As transações continuam travadas, apesar da aprovação do conector'
slug: as-transacoes-continuam-travadas-apesar-da-aprovacao-do-conector
status: PUBLISHED
createdAt: 2026-01-12T20:35:40.647Z
updatedAt: 2026-01-12T20:35:40.647Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-despite-connector-approval
locale: pt
kiStatus: Backlog
internalReference: 1302349
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

 Em alguns casos, o **Transaction Worker** não consegue avançar a transação para o status esperado, mesmo após receber uma resposta bem-sucedida (**200 OK** com status “aprovado”) do conector. Como resultado, as transações podem permanecer presas em **Autorização pendente**, **Autorizado** ou **Analisando risco**, e os pedidos correspondentes permanecem em **Pagamento pendente**. Esse comportamento pode ocorrer quando o conector retorna corretamente uma resposta aprovada, mas o processo interno que atualiza o status da transação não é executado corretamente. > **Importante:** Após a análise de impacto e o alinhamento interno em (dezembro de 2025), este KI foi **dividido em quatro KIs mais específicos**, cada um focado em um status específico no qual a transação permanece presa após a aprovação do conector: > > 1. **[KI] As transações permanecem presas em Autorização pendente, apesar da aprovação do conector** > 2. **[KI] As transações permanecem presas em Autorizado, apesar da aprovação do conector**
> 3. **[KI] As transações permanecem presas em Analisando risco, apesar da aprovação do conector antifraude legado** > 4. **[KI] As transações permanecem presas em Analisando risco, apesar da aprovação do conector AFPP** O texto acima reflete a descrição consolidada original usada antes dessa divisão e deve ser lido como o **KI abrangente/raiz** para esses quatro KIs derivados.
## Simulação


## Workaround

