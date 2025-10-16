---
title: Segunda solicitação de autorização de pagamento sendo enviada em um intervalo menor do que o indicado em FirstRetryAttemptInSeconds.
slug: segunda-solicitacao-de-autorizacao-de-pagamento-sendo-enviada-em-um-intervalo-menor-do-que-o-indicado-em-firstretryattemptinseconds
status: PUBLISHED
createdAt: 2025-10-16T20:30:27.568Z
updatedAt: 2025-10-16T20:30:27.568Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: second-payment-authorization-request-being-sent-within-an-interval-shorter-than-what-is-stated-in-firstretryattemptinseconds
locale: pt
kiStatus: Backlog
internalReference: 1165831
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O pagamento é cancelado devido ao fato de a segunda solicitação de autorização ter sido enviada pelo gateway antes do que está estabelecido nas Regras de autorização. Normalmente, o parceiro de pagamento não pode processar a segunda solicitação devido ao curto intervalo entre as duas solicitações, o que leva a uma resposta "negada" e ao cancelamento da transação.
## Simulação


## Workaround

