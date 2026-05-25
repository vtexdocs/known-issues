---
title: 'Pagamento preso no status "Recebido" — A transação não avança para o status "Aprovado"'
slug: pagamento-preso-no-status-recebido-a-transacao-nao-avanca-para-o-status-aprovado
status: PUBLISHED
createdAt: 2026-05-22T17:27:29.000Z
updatedAt: 2026-05-25T14:51:07.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-stuck-in-received-status-transaction-does-not-progress-to-approved-status
locale: pt
kiStatus: Backlog
internalReference: 1411012
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em alguns casos, um pagamento **aparece sem um status visível** no painel de administração (PCI Gateway) e permanece estagnado com `"status": "Received"` no banco de dados, como se o fluxo de autorização nunca tivesse sido iniciado para esse pagamento específico. Isso ocorre mesmo quando a transação em si já avançou (por exemplo, para `Authorized`) e outros pagamentos dentro da mesma transação podem ter progredido normalmente.
O pagamento afetado não possui `data de autorização`, `tid`/`nsu` nulos e `ConnectorResponses` vazio, indicando que a solicitação de autorização nunca foi enviada ou nunca foi registrada para essa entrada de pagamento.

## Simulação

Não é possível simular.

## Workaround

Abra um ticket para a equipe de suporte ao produto.