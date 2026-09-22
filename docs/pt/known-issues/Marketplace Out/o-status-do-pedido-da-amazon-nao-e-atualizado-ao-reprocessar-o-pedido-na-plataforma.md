---
title: 'O status do pedido da Amazon não é atualizado ao reprocessar o pedido na plataforma.'
slug: o-status-do-pedido-da-amazon-nao-e-atualizado-ao-reprocessar-o-pedido-na-plataforma
status: PUBLISHED
createdAt: 2024-10-18T15:17:42.000Z
updatedAt: 2026-09-22T19:03:24.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-order-status-is-not-revised-when-reprocessing-order-on-bridge
locale: pt
kiStatus: Fixed
internalReference: 1119618
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Pedidos da Amazon que apresentaram algum tipo de erro são encaminhados para a área de integração com a mensagem de erro e o status do pedido no momento em que foi processado inicialmente.

No entanto, mesmo que o status seja atualizado na Amazon (como, por exemplo, para cancelado), o status na área de integração permanece o mesmo.

Com isso, se um pedido for reprocessado na área de integração, seu status não será revisado no marketplace, o que pode causar erros na integração de pedidos com status incorreto.

## Simulação

1. Obtenha um pedido com erro na área de integração;

2. Verifique se o status do pedido na Amazon foi cancelado;

3. Reprocesse o pedido na área de integração e verifique se a integração foi bem-sucedida.

## Workaround

N/A