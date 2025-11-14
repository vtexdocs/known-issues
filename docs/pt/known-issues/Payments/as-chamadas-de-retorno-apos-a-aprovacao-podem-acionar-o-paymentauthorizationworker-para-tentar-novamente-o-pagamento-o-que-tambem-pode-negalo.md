---
title: 'As chamadas de retorno após a aprovação podem acionar o PaymentAuthorizationWorker para tentar novamente o pagamento, o que também pode negá-lo.'
slug: as-chamadas-de-retorno-apos-a-aprovacao-podem-acionar-o-paymentauthorizationworker-para-tentar-novamente-o-pagamento-o-que-tambem-pode-negalo
status: PUBLISHED
createdAt: 2025-11-14T19:26:42.515Z
updatedAt: 2025-11-14T19:26:42.515Z
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


Quando o provedor envia um retorno de chamada logo após a autorização, ele pode acionar uma nova tentativa de autorização. Portanto, em alguns casos, quando a transação tiver mais de um pagamento e um deles for um cartão-presente, uma nova tentativa de autorização poderá cancelar a transação quando ela não tiver fundos.
## Simulação


Não pode ser simulado, pois depende do retorno de chamada do provedor.


## Workaround


N/A


