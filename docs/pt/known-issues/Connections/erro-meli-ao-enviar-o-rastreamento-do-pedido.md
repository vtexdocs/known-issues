---
title: 'Erro MELI ao enviar o rastreamento do pedido'
slug: erro-meli-ao-enviar-o-rastreamento-do-pedido
status: PUBLISHED
createdAt: 2023-03-06T10:06:43.000Z
updatedAt: 2023-10-20T17:28:21.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-error-while-sending-the-order-tracking
locale: pt
kiStatus: Fixed
internalReference: 764885
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

No momento, estamos registrando uma mensagem de erro no menu Bridge - Rastreamento; esse erro é retornado pela MELI quando enviamos o fluxo de rastreamento para eles.

É importante observar que isso não está afetando o fluxo, já que o rastreamento está funcionando corretamente; o problema é que estamos registrando a mensagem como um erro, quando deveria ser um sucesso (devido ao que a MELI retorna).

## Simulação

No menu Bridge - Rastreamento, será exibida uma mensagem de erro conforme abaixo.

"Mensagem de erro não mapeada pela integração. Entre em contato com a VTEX informando o ocorrido para que o mapeamento seja realizado.
Mensagem de erro Mercado Livre:"

## Workaround

Não é necessária nenhuma ação; é importante observar que, embora a mensagem de erro seja exibida, isso não está afetando o fluxo de rastreamento, o XML está sendo enviado para o MELI e o status do pedido está sendo atualizado.