---
title: 'Transação presa em "Cancelando", embora o provedor de pagamento tenha confirmado o cancelamento.'
slug: transacao-presa-em-cancelando-embora-o-provedor-de-pagamento-tenha-confirmado-o-cancelamento
status: PUBLISHED
createdAt: 2026-11-05T18:17:04.000Z
updatedAt: 2026-11-05T18:19:09.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-cancelling-although-the-payment-provider-confirmed-the-cancellation
locale: pt
kiStatus: Backlog
internalReference: 1481557
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A transação permanece em "Cancelando" indefinidamente, mesmo após a confirmação do cancelamento pelo provedor de pagamento, e a loja recebe e-mails repetidos com o assunto "gateway-cancelamento-manual-requerido" solicitando o cancelamento manual. As interações da transação mostram "Não foi possível cancelar o pagamento" após a resposta de cancelamento bem-sucedida. Isso afeta principalmente transações nativas divididas canceladas após uma rejeição antifraude.

## Simulação

Não é possível simular.

## Workaround

Abra um chamado para a PS Payments com os IDs das transações afetadas. Os e-mails "gateway-cancelamento-manual-requerido" podem ser ignorados para transações em que o provedor de pagamento confirmou o cancelamento. Se o provedor não confirmou, cancele a autorização diretamente com ele antes de abrir o chamado.