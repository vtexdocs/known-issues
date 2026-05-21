---
title: 'A transação está sendo liquidada, mas o pagamento com cartão-presente permanece no status "autorizado" após um erro na liquidação automática'
slug: a-transacao-esta-sendo-liquidada-mas-o-pagamento-com-cartaopresente-permanece-no-status-autorizado-apos-um-erro-na-liquidacao-automatica
status: PUBLISHED
createdAt: 2025-03-28T18:39:37.000Z
updatedAt: 2026-05-21T23:30:49.000Z
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

Os pagamentos com cartão-presente ficam presos no status `authorized` após uma falha na liquidação no GiftcardHub (código HTTP 400 ou outros erros). Mesmo após novas tentativas acionadas pelo SOS, o status do pagamento não é atualizado e a liquidação nunca é concluída.

A mensagem nas interações da transação é:

 Mensagem: Erro desconhecido no AutoSettleA chamada para 'https://janus-payments-link.vtex.com.br//giftcardproviders//giftcards//transactions//settlements' retornou o status HTTP '()'.


O problema ocorre apenas no **modo de liquidação total (padrão da plataforma):** quando uma transação possui vários métodos de pagamento, se a liquidação do cartão-presente falhar na primeira tentativa, o outro método de pagamento já pode ter sido capturado (liquidado automaticamente). Nas tentativas de repetição, o SOS envia o valor total da fatura, mas o gateway agora cobre apenas o saldo restante do cartão-presente. O gateway registra `Liquidação da transação iniciada`.

Isso ocorre porque o valor solicitado excede o saldo restante capturável. O fluxo é abortado antes de chamar o Hub, nenhum `PaymentWorkFlowChangeStatus`, nenhuma chamada ao Hub e nenhum `Liquidação da transação concluída` é registrado.

## Simulação

Pré-requisitos:

1. Estar no modo de captura total
2. Nenhuma captura automática ou antecipada configurada


Etapas:

1. Crie um pedido/transação com um cartão-presente + outro método de pagamento
2. Aprove ambos os pagamentos
3. Force a captura do pagamento com cartão-presente a falhar
4. Capture com sucesso o outro método de pagamento
5. Chame a captura do gateway com o valor total e receba o erro:
6.

    { "error": { "code": "1402", "message": "O valor solicitado para liquidação (xx.xx) deve ser menor ou igual ao valor restante a pagar (xx.xx), que deve ser diferente de 0.", "exception": null }}

## Workaround

Para evitar esse erro completamente, o comerciante pode optar por alterar o tipo de captura para o modo Retenção ou Parcial.
Analise cada um desses modos antes de ativá-los: https://help.vtex.com/docs/tutorials/payment-settlement-types

Outra maneira de evitar o problema é ativar a captura automática ou antecipada no conector.
Recomendamos um `delayToAutoSettle` ou `delayToAutoSettleAfterAntifraud` de 3600 segundos (1h), mas o importante é que seja menor do que o tempo típico de faturamento do pedido:
https://help.vtex.com/docs/tutorials/configuring-maximum-automatic-payment-settlement-time-frame

Observação: é necessário que o comerciante verifique com o provedor se é possível definir esses campos.

Caso o comerciante não deseje implementar nenhuma das alterações acima, abra um ticket solicitando uma atualização de status.


%0A