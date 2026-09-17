---
title: 'Caracteres especiais no campo do destinatário da entrega bloqueiam a compra com uma mensagem de erro incorreta.'
slug: caracteres-especiais-no-campo-do-destinatario-da-entrega-bloqueiam-a-compra-com-uma-mensagem-de-erro-incorreta
status: PUBLISHED
createdAt: 2021-03-10T17:33:01.000Z
updatedAt: 2026-09-17T15:43:36.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: special-characters-in-the-delivery-receiver-field-block-the-purchase-with-a-wrong-error-message
locale: pt
kiStatus: No Fix
internalReference: 342759
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A tela de finalização da compra não valida caracteres especiais no campo de destinatário. O comprador pode preenchê-lo com caracteres especiais; a compra não é concluída e o erro exibido aponta para o campo incorreto: "O campo Número nos dados de entrega é inválido".

## Simulação

1. Acesse a etapa de envio na finalização da compra.
2. Preencha "Destinatário" com !!!!!!?!?!?!?!?!?!**
3. Tente concluir a compra — o erro "O campo Número nos dados de entrega é inválido" é exibido e a compra não é concluída.

## Workaround

N/A