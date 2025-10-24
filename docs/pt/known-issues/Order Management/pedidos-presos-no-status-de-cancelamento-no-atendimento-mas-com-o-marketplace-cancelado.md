---
title: 'Pedidos presos no status de cancelamento no atendimento, mas com o Marketplace cancelado.'
slug: pedidos-presos-no-status-de-cancelamento-no-atendimento-mas-com-o-marketplace-cancelado
status: PUBLISHED
createdAt: 2025-10-16T20:42:42.054Z
updatedAt: 2025-10-16T20:42:42.054Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-stuck-in-cancel-status-in-fulfillment-but-with-marketplace-canceled
locale: pt
kiStatus: Backlog
internalReference: 1198719
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em cenários em que os pedidos do Fulfillment não podem ser cancelados devido a alguma inconsistência, mas o pedido do Marketplace pode ir para o status de cancelado, não conseguiremos desbloquear, pois o vendedor tenta cancelar o pedido do Marketplace novamente e dá um erro, pois o pedido do Marketplace já está cancelado, quebrando a validação que o fulfillment faz.
## Simulação


No momento, não podemos simular esse cenário, pois ele ocorre devido a algum tipo de inconsistência ou atraso no endpoint ou erros em outros módulos, como o catálogo.
## Workaround


Não temos uma solução alternativa para esse problema, ou seja, o pedido do vendedor estará no status "cancelar".



