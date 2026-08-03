---
title: 'Mercado Livre O pedido não pode ser reprocessado quando o envio é cancelado (ERR_UNAVAILABLE_SLA)'
slug: mercado-livre-o-pedido-nao-pode-ser-reprocessado-quando-o-envio-e-cancelado-errunavailablesla
status: PUBLISHED
createdAt: 2026-08-03T20:51:28.000Z
updatedAt: 2026-08-03T20:51:28.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: mercado-livre-order-fails-to-reprocess-when-shipment-is-cancelled-errunavailablesla
locale: pt
kiStatus: Backlog
internalReference: 1442735
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Pedidos do Mercado Livre cujo envio está com status "cancelado" (por exemplo, substatus "pack_partially_cancelled", não documentado na API do Mercado Livre) não podem ser reprocessados ​​na integração. A Bridge retorna um erro genérico e enganoso ("ERR_UNAVAILABLE_SLA" — "Pedido não importado porque o SLA de entrega selecionado não está disponível"), mascarando o problema real, que é uma exceção não tratada ao processar uma lista de pedidos vazia.

## Simulação

- Encontre um pedido no Mercado Livre cujo envio tenha o status "cancelado" e retorne uma lista de pedidos vazia (por exemplo, pedido nº 47381163879, conta eletroangeloni).

- Reprocesse o pedido pela Bridge.

- O erro permanece o mesmo em todas as tentativas, sempre retornando "ERR_UNAVAILABLE_SLA".

## Workaround

N/A