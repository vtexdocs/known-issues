---
title: 'A falha de rastreamento da Amazon não é exibida no Bridge quando os itens da fatura não correspondem aos itens do pedido.'
slug: a-falha-de-rastreamento-da-amazon-nao-e-exibida-no-bridge-quando-os-itens-da-fatura-nao-correspondem-aos-itens-do-pedido
status: PUBLISHED
createdAt: 2026-11-07T00:20:16.000Z
updatedAt: 2026-11-07T00:20:16.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-tracking-failure-is-not-displayed-in-bridge-when-the-invoice-items-dont-match-the-order-items
locale: pt
kiStatus: Backlog
internalReference: 1482337
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em pedidos de autoenvio da Amazon, quando a fatura registrada no pedido VTEX contém um item que não está presente no pedido da Amazon, as informações de rastreamento não são enviadas para a Amazon e nenhuma mensagem de erro é exibida no Bridge. O pedido permanece faturado no VTEX, sem qualquer indicação de que a Amazon não recebeu a confirmação de envio.

A falha é registrada apenas nos logs de integração, com as seguintes mensagens:
Pedidos cuja fatura lista os mesmos itens que o pedido da Amazon são enviados normalmente, com seu status exibido no Bridge.

O item faturado no VTEX não existe no pedido correspondente da Amazon.

## Simulação

1. Receba um pedido de autoenvio da Amazon contendo um kit e pelo menos um outro SKU.

2. Fature o pedido no VTEX, listando os componentes do kit juntamente com o outro SKU nos itens da fatura.

3. O rastreamento não é atualizado na Amazon.

4. No Bridge, nenhuma mensagem é exibida para o pedido.

## Workaround

Ao faturar o pedido, liste os mesmos SKUs do pedido da Amazon nos itens da fatura. Para pedidos com um kit, liste o SKU do kit em vez de seus componentes.