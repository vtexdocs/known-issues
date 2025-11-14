---
title: 'A transação com antifraude não é atualizada para "liquidação" quando o registro "riskApproved" está ausente'
slug: a-transacao-com-antifraude-nao-e-atualizada-para-liquidacao-quando-o-registro-riskapproved-esta-ausente
status: PUBLISHED
createdAt: 2025-11-14T19:32:56.354Z
updatedAt: 2025-11-14T19:32:56.354Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-with-antifraud-doesnt-update-to-settling-when-riskapproved-log-is-missing
locale: pt
kiStatus: Backlog
internalReference: 1184723
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Às vezes, quando o provedor antifraude aprova a transação, podemos ver que o gateway recebe a mensagem de aprovado pelo antifraude, mas não atualiza a transação para o status "riskApproved". Quando isso acontece, a transação fica presa em Autorizado ou Aprovado mesmo depois que a liquidação é feita pelo provedor de pagamento.
## Simulação


Não há uma maneira assertiva de reproduzir esse erro, pois ele é intermitente.


## Workaround


Abra um tíquete para o Suporte ao produto - Pagamentos, para prosseguir manualmente com o fluxo da transação.


