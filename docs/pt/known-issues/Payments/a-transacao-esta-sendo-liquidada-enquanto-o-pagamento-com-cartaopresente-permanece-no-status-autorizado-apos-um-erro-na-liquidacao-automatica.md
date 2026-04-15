---
title: 'A transação está sendo liquidada, enquanto o pagamento com cartão-presente permanece no status "autorizado" após um erro na liquidação automática'
slug: a-transacao-esta-sendo-liquidada-enquanto-o-pagamento-com-cartaopresente-permanece-no-status-autorizado-apos-um-erro-na-liquidacao-automatica
status: PUBLISHED
createdAt: 2026-04-15T21:00:33.273Z
updatedAt: 2026-04-15T21:00:33.273Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-settling-while-giftcard-payment-stuck-in-authorized-status-after-autosettle-error
locale: pt
kiStatus: Backlog
internalReference: 1201336
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os pagamentos com cartão-presente ficam presos no status `authorized` após qualquer erro de liquidação automática na solicitação do GiftcardHub.
Mesmo após uma nova tentativa e uma liquidação bem-sucedida, o status do pagamento não muda.

A mensagem nas interações da transação é:


 Mensagem: Erro desconhecido na liquidação automática. A chamada para 'https://janus-payments-link.vtex.com.br//giftcardproviders//giftcards//transactions//settlements' retornou o status HTTP '()'.
Isso não depende do status HTTP retornado.

## Simulação

N/A

## Workaround

Abra um ticket solicitando a atualização do status.