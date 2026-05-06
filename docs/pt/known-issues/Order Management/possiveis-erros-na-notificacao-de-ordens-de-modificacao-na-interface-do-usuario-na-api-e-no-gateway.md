---
title: 'Possíveis erros na notificação de ordens de modificação na interface do usuário, na API e no gateway.'
slug: possiveis-erros-na-notificacao-de-ordens-de-modificacao-na-interface-do-usuario-na-api-e-no-gateway
status: PUBLISHED
createdAt: 2023-12-19T22:37:32.000Z
updatedAt: 2025-04-22T21:46:35.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: possible-errors-in-change-orders-notification-in-the-ui-api-and-gateway
locale: pt
kiStatus: No Fix
internalReference: 955489
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

_**Importante**: Sugerimos usar a nova **Change V2**, uma vez que foi dedicado esforço à criação desse novo recurso._

Foram identificados alguns problemas na arquitetura do Change Orders V1, em que, em alguns casos, não havia notificação na interação com o pedido na interface do usuário (UI) nem na API Get Orders; no entanto, ocorria um desconto ou aumento no valor. Também observamos cenários em que a notificação ocorre na interface do usuário e na API, mas o desconto ou aumento não é aplicado no gateway.

Temos um segundo ponto: quando a alteração é inserida via MKP e o vendedor é de marca branca, nesses casos, a alteração pode não ser replicada no vendedor!
O correto a se fazer é realizar a alteração por meio do vendedor!

## Simulação

Não é possível realizar uma simulação, pois os cenários são esporádicos e geralmente ocorrem devido a um erro de tempo limite, para o qual já aumentamos o temporizador.

## Workaround

Inicialmente, não temos uma solução alternativa.