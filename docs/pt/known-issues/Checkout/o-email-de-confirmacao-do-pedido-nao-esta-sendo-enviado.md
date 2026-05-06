---
title: 'O e-mail de confirmação do pedido não está sendo enviado'
slug: o-email-de-confirmacao-do-pedido-nao-esta-sendo-enviado
status: PUBLISHED
createdAt: 2021-09-01T18:28:19.000Z
updatedAt: 2023-08-28T14:53:33.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: confirmed-order-email-not-being-sent
locale: pt
kiStatus: Fixed
internalReference: 423628
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O Checkout não mapeia todos os fluxos nos quais o "GatewayCallback" deve acionar o evento "Raised OrderPlaced"; portanto, os fluxos não mapeados podem não disparar esse evento conforme o esperado, afetando diretamente o envio do e-mail de confirmação do pedido.

## Simulação

Não há como simular o cenário.

## Workaround

N/A