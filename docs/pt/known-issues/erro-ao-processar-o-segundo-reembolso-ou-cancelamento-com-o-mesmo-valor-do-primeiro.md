---
title: Erro ao processar o segundo reembolso ou cancelamento com o mesmo valor do primeiro
slug: erro-ao-processar-o-segundo-reembolso-ou-cancelamento-com-o-mesmo-valor-do-primeiro
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-when-processing-the-second-refund-or-cancellation-with-the-same-value-as-the-first
locale: pt
kiStatus: Scheduled
internalReference: 1118560
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao solicitar um segundo reembolso parcial com o mesmo valor do primeiro, o gateway retorna a seguinte mensagem:

    Message: O cartão-presente já foi reembolsado.


Ou, se estiver solicitando um segundo cancelamento parcial com o mesmo valor do primeiro, o gateway retorna:

    Mensagem: "O cartão-presente já foi cancelado"


Embora isso seja registrado na interação, o segundo reembolso/cancelamento não é realmente processado.
Esse cenário é muito mais comum para o segundo reembolso/cancelamento com o mesmo valor, mas também pode ocorrer em reembolsos subsequentes, desde que o valor solicitado seja igual à soma dos reembolsos já processados.
## Simulação



1. Faça uma compra exclusivamente com um cartão-presente (GC);
2. Conclua a transação;
3. Emitir um reembolso parcial de um valor menor que a metade do pagamento total;
4. Solicitar outro reembolso no mesmo valor do primeiro
## Workaround


Foi criado um sinalizador de recurso em que as contas adicionadas ignoram a parte que introduz esse bug.
https://github.com/vtex/configs/blob/main/src/configs/payment-gateway/flags/gch-refund-condition.jsonnet


