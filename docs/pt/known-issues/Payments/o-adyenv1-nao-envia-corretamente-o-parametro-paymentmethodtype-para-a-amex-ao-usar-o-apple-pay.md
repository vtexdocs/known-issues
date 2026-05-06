---
title: 'O AdyenV1 não envia corretamente o parâmetro `paymentMethod.type` para a Amex ao usar o Apple Pay.'
slug: o-adyenv1-nao-envia-corretamente-o-parametro-paymentmethodtype-para-a-amex-ao-usar-o-apple-pay
status: PUBLISHED
createdAt: 2023-10-17T14:58:13.000Z
updatedAt: 2023-10-17T14:58:13.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: adyenv1-does-not-correctly-send-the-paymentmethodtype-for-amex-when-using-apple-pay
locale: pt
kiStatus: Backlog
internalReference: 920563
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Embora o Apple Pay permita que o usuário faça um pedido usando um cartão Amex, nosso conector legado AdyenV1 não é compatível com essa marca.

Nos logs de interação, observa-se que o campo `paymentMethod.type` está preenchido com “scheme”, o que resulta em um erro da Adyen.

## Simulação

Tente fazer um pedido usando o Apple Pay com um cartão Amex. A transação será recusada

## Workaround

N/A.