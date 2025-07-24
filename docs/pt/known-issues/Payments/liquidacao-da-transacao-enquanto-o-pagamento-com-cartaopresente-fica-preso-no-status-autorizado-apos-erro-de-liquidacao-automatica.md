---
title: Liquidação da transação enquanto o pagamento com cartão-presente fica preso no status autorizado após erro de liquidação automática
slug: liquidacao-da-transacao-enquanto-o-pagamento-com-cartaopresente-fica-preso-no-status-autorizado-apos-erro-de-liquidacao-automatica
status: PUBLISHED
createdAt: 2025-07-24T17:49:59.193Z
updatedAt: 2025-07-24T17:49:59.193Z
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


Os pagamentos com Giftcard ficam presos no status `authorized` após qualquer erro de liquidação automática na solicitação do GiftcardHub.
Mesmo após uma nova tentativa e uma liquidação bem-sucedida, o status do pagamento não é alterado.

A mensagem nas interações da transação é:


    Message: Unknown Error on AutoSettleA chamada a 'https://janus-payments-link.vtex.com.br//giftcardproviders//giftcards//transactions//settlements' retornou o status HTTP '()'.


Isso não depende do status HTTP retornado.
## Simulação


N/A


## Workaround


Abra um tíquete solicitando a atualização do status.



