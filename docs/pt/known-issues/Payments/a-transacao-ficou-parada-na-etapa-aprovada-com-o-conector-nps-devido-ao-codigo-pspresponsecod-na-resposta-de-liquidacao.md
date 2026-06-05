---
title: 'A transação ficou parada na etapa "aprovada" com o conector NPS devido ao código psp_ResponseCod na resposta de liquidação'
slug: a-transacao-ficou-parada-na-etapa-aprovada-com-o-conector-nps-devido-ao-codigo-pspresponsecod-na-resposta-de-liquidacao
status: PUBLISHED
createdAt: 2022-04-06T17:06:46.000Z
updatedAt: 2026-06-05T21:01:31.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-on-approved-with-nps-connector-due-to-pspresponsecod-in-settlement-response
locale: pt
kiStatus: No Fix
internalReference: 557051
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Após enviar a solicitação de captura ao conector NPS, recebemos a resposta deles. No entanto, atualmente, não temos nenhuma ação definida para o caso de o campo `psp_ResponseCod` retornar um valor diferente de 2. Isso faz com que a operação de captura falhe, impedindo que o pagamento seja capturado com sucesso.

## Simulação

Não é possível simular o comportamento, pois dependemos da resposta do provedor.

## Workaround

N/A