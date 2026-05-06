---
title: 'As chamadas de retorno após a aprovação podem fazer com que o PaymentAuthorizationWorker tente novamente o pagamento, o que também pode resultar na recusa do mesmo.'
slug: as-chamadas-de-retorno-apos-a-aprovacao-podem-fazer-com-que-o-paymentauthorizationworker-tente-novamente-o-pagamento-o-que-tambem-pode-resultar-na-recusa-do-mesmo
status: PUBLISHED
createdAt: 2023-01-25T19:58:26.000Z
updatedAt: 2023-09-15T18:22:40.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: callbacks-after-approval-may-trigger-paymentauthorizationworker-to-retry-payment-which-may-also-deny-it
locale: pt
kiStatus: Backlog
internalReference: 740499
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o provedor envia uma resposta de callback logo após a autorização, isso pode desencadear uma nova tentativa de autorização. Portanto, em alguns casos em que a transação envolve mais de um pagamento e um deles é um cartão-presente, uma nova tentativa de autorização pode cancelar a transação se não houver saldo disponível.

## Simulação

Não é possível simular essa situação, pois depende da resposta de callback do provedor.

## Workaround

N/A