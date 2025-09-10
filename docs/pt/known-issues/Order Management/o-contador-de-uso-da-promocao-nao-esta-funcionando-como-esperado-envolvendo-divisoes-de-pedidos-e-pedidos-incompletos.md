---
title: O contador de uso da promoção não está funcionando como esperado, envolvendo divisões de pedidos e pedidos incompletos.
slug: o-contador-de-uso-da-promocao-nao-esta-funcionando-como-esperado-envolvendo-divisoes-de-pedidos-e-pedidos-incompletos
status: PUBLISHED
createdAt: 2025-09-10T14:16:53.723Z
updatedAt: 2025-09-10T14:16:53.723Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: the-promotion-usage-counter-is-not-working-as-expected-involving-order-splits-and-incomplete-orders
locale: pt
kiStatus: Backlog
internalReference: 1289805
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Identificamos que o contador de uso da promoção não está funcionando como esperado, o que leva à perda de controle sobre o número de vezes que uma promoção é aplicada.
O problema ocorre porque o sistema de checkout é atualmente responsável por notificar o uso da promoção, enquanto o sistema de gerenciamento de pedidos (OMS) é responsável por relatar os cancelamentos.
Isso deve reduzir a contagem de uso. No entanto, esses sistemas enviam notificações diferentes para pedidos incompletos, pois o cancelamento do pedido não é relatado, ou quando um pedido é dividido. Nesse cenário, o sistema de Checkout notifica cada pedido dividido, causando um mau funcionamento do contador e criando mais pedidos com a promoção aplicada do que o pretendido. Se um desses pedidos divididos for cancelado, o OMS enviará apenas uma notificação de cancelamento, causando uma discrepância no contador.
## Simulação


Crie uma promoção com um limite de uso específico.
Aplique a promoção a vários pedidos por meio do sistema Checkout.

Cancele alguns desses pedidos por meio do OMS.
Observe que o contador de uso da promoção pode permitir a criação de mais pedidos, conforme esperado.

Atualmente, nem sempre é possível reproduzir esse problema de forma consistente, pois a causa raiz exata ainda não foi determinada.


## Workaround


No momento, não temos uma solução alternativa para esse cenário!



