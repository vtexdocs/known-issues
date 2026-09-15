---
title: 'O pagamento não é transferido para o número cancelado após uma chamada de cancelamento bem-sucedida.'
slug: o-pagamento-nao-e-transferido-para-o-numero-cancelado-apos-uma-chamada-de-cancelamento-bemsucedida
status: PUBLISHED
createdAt: 2020-12-14T22:45:27.000Z
updatedAt: 2026-09-15T17:37:40.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-does-not-advance-to-canceled-after-a-successful-cancellation-call
locale: pt
kiStatus: No Fix
internalReference: 316125
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Uma solicitação de cancelamento/reembolso é feita em uma transação; o conector REST da eRede a aceita e retorna sucesso, mas o pagamento nunca transita para o estado Cancelado — permanece em seu status de pré-cancelamento indefinidamente. O gateway registra a resposta bem-sucedida do conector nas interações da transação e, em seguida, para, sem concluir a transição de estado.

## Simulação

Não reproduzível sob demanda — a falha depende da resposta de cancelamento assíncrona do conector em uma transação real, sem nenhum gatilho determinístico identificado.

Para confirmar se um caso é este KI, verifique a transação:

1. A afiliação é eRede REST (`erederest`).

2. Existe uma interação `Cancel Request Url` para `api.userede.com.br/erede/v1`.

3. A resposta correspondente é `HttpStatusCode:Accepted` com `"returnCode":"360"`.

4. Nenhuma interação de alteração de status ocorre em seguida, e o pagamento permanece em seu status pré-cancelamento.

## Workaround

N/A