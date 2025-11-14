---
title: 'As transações com o conector TNSPay estão sendo negadas por erro: Card not ENROLLED in 3DS'
slug: as-transacoes-com-o-conector-tnspay-estao-sendo-negadas-por-erro-card-not-enrolled-in-3ds
status: PUBLISHED
createdAt: 2025-11-14T19:34:34.400Z
updatedAt: 2025-11-14T19:34:34.400Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-with-the-tnspay-connector-being-denied-by-error-card-not-enrolled-in-3ds
locale: pt
kiStatus: Backlog
internalReference: 541687
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O padrão é que eles sejam cancelados e nós enviemos duas solicitações de autorização 3Ds, e você ainda não recebeu a resposta da solicitação de autorização.
A segunda resposta só aparece depois de já ter entrado no fluxo de cancelamento.

O problema ocorre devido a uma condição de corrida, o que faz com que os campos de pagamento sejam inconsistentes.
No início do processo, o primeiro registro é

`Autorizar usando 3DS dadas as configurações 3DS: sempre MinimumValue`

O método de autorização foi chamado 2 vezes em 2 segundos.
## Simulação


Não é possível simular


## Workaround


Não há solução alternativa