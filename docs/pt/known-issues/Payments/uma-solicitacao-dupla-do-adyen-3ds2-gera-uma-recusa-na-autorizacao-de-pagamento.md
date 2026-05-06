---
title: 'Uma solicitação dupla do Adyen 3DS2 gera uma recusa na autorização de pagamento'
slug: uma-solicitacao-dupla-do-adyen-3ds2-gera-uma-recusa-na-autorizacao-de-pagamento
status: PUBLISHED
createdAt: 2023-08-18T20:12:05.000Z
updatedAt: 2023-08-18T20:12:05.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: adyen-3ds2-double-request-generates-payment-authorization-denial
locale: pt
kiStatus: Backlog
internalReference: 884154
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando a solicitação 3DS2 da Adyen é enviada duas vezes, ela retorna um erro na resposta e o pagamento é automaticamente recusado.

Resposta de autorização:

`{"status":409,"errorCode":"704","message":"solicitação já processada ou em andamento","errorType":"validação"}`

Mensagem a seguir:

`Resposta inesperada [].`

Isso ocorre quando o pagamento é, na verdade, autorizado pela Adyen, mas, como não há liquidação do nosso lado, não podemos enviar uma solicitação de reembolso.

## Simulação

Até o momento, não conseguimos reproduzir esse cenário nem identificar um padrão.

## Workaround

N/A