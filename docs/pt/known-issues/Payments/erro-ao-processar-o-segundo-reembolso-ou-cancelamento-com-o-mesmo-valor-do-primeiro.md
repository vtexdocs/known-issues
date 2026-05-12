---
title: 'Erro ao processar o segundo reembolso ou cancelamento com o mesmo valor do primeiro'
slug: erro-ao-processar-o-segundo-reembolso-ou-cancelamento-com-o-mesmo-valor-do-primeiro
status: PUBLISHED
createdAt: 2024-10-16T23:27:18.000Z
updatedAt: 2026-05-12T17:35:41.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-when-processing-the-second-refund-or-cancellation-with-the-same-value-as-the-first
locale: pt
kiStatus: Backlog
internalReference: 1118560
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao solicitar um segundo reembolso parcial com o mesmo valor do primeiro, o gateway retorna a seguinte mensagem:

 Mensagem: O cartão-presente já foi reembolsado.


Ou, ao solicitar um segundo cancelamento parcial com o mesmo valor do primeiro, o gateway retorna:

 Mensagem: "O cartão-presente já foi cancelado"


Embora isso seja registrado na interação, o segundo reembolso/cancelamento não é efetivamente processado.
Esse cenário é muito mais comum para o segundo reembolso/cancelamento com o mesmo valor, mas também pode ocorrer em reembolsos subsequentes, desde que o valor solicitado seja igual à soma dos reembolsos já processados.

## Simulação

1. Faça uma compra exclusivamente com um cartão-presente (CP);
2. Conclua a transação;
3. Emita um reembolso parcial por um valor inferior à metade do pagamento total;
4. Solicite outro reembolso pelo mesmo valor do primeiro.

## Workaround

Para casos de reembolso, abra um ticket com o suporte para aplicar a solução alternativa interna.
Para casos de cancelamento, cancele manualmente com seu provedor.