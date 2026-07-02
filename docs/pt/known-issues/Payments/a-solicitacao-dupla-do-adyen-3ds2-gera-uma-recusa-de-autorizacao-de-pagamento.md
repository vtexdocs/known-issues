---
title: 'A solicitação dupla do Adyen 3DS2 gera uma recusa de autorização de pagamento.'
slug: a-solicitacao-dupla-do-adyen-3ds2-gera-uma-recusa-de-autorizacao-de-pagamento
status: PUBLISHED
createdAt: 2023-08-18T23:12:05.000Z
updatedAt: 2026-07-02T15:40:28.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: adyen-3ds2-double-request-generates-payment-authorization-denial
locale: pt
kiStatus: No Fix
internalReference: 884154
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um pagamento 3DS2 é processado pelo conector Adyen, ocasionalmente é enviada uma solicitação de autorização duplicada. Isso faz com que o pagamento seja automaticamente negado pela Adyen e o pedido fique preso em um estado de falha, mesmo nos casos em que a cobrança já foi processada pela Adyen.

Resposta de autorização:

`{"status":409,"errorCode":"704","message":"request already processed or in progress","errorType":"validation"}`

Mensagem subsequente:

`Resposta não esperada [].`

Como a VTEX não recebe uma resposta de autorização bem-sucedida, nenhum acerto é acionado e um reembolso automático não pode ser emitido.

## Simulação

Não foi possível reproduzir. Nenhum padrão consistente foi identificado para acionar a solicitação duplicada.

## Workaround

Não disponível.