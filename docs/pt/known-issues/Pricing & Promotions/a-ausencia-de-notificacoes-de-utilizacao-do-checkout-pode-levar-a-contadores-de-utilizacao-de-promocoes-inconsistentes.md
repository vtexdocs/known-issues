---
title: 'A ausência de notificações de utilização do Checkout pode levar a contadores de utilização de promoções inconsistentes.'
slug: a-ausencia-de-notificacoes-de-utilizacao-do-checkout-pode-levar-a-contadores-de-utilizacao-de-promocoes-inconsistentes
status: PUBLISHED
createdAt: 2026-07-16T05:03:17.000Z
updatedAt: 2026-07-16T05:03:17.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: missing-checkout-usage-notifications-may-lead-to-inconsistent-promotion-usage-counters
locale: pt
kiStatus: Backlog
internalReference: 1435307
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O contador de uso de promoções pode apresentar inconsistências quando as notificações de uso e cancelamento de promoções não são processadas simetricamente. O contador de promoções depende de duas notificações:

- O sistema de finalização da compra notifica quando uma promoção é utilizada.

- O sistema de gestão de pedidos (OMS) notifica quando esse uso deve ser revertido (por exemplo, quando um pedido é cancelado).

Em alguns casos, as notificações de cancelamento são processadas mesmo que nenhuma notificação de uso correspondente tenha sido registrada anteriormente. Isso faz com que o contador seja decrementado sem um incremento correspondente, permitindo que a promoção seja aplicada mais vezes do que o limite de uso configurado.

A condição exata que leva à ausência da notificação de uso ainda está sendo investigada.

## Simulação

Atualmente, pode não ser possível reproduzir esse problema de forma consistente:

1. Crie uma promoção com um número limitado de usos.

2. Crie pedidos que utilizem a promoção e gere cenários envolvendo pedidos incompletos ou cancelados.

3. Dependendo se a notificação de utilização for registada com sucesso antes do processamento da notificação de cancelamento, o contador da promoção poderá ficar inferior ao número real de utilizações válidas, permitindo que encomendas adicionais utilizem a promoção para além do limite configurado.

## Workaround

N/A