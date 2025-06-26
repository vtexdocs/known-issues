---
title: Inconsistency in displaying the origin of order cancellations in the Get Orders API
slug: inconsistency-in-displaying-the-origin-of-order-cancellations-in-the-get-orders-api
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: inconsistency-in-displaying-the-origin-of-order-cancellations-in-the-get-orders-api
locale: en
kiStatus: Backlog
internalReference: 1249934
---

## Summary


Em alguns casos de pedidos originados pelo fluxo nativo entre **marketplace e seller**, quando o cancelamento é iniciado automaticamente pelo sistema (ex.: falha no pagamento ou regras internas), a **informação de origem do cancelamento pode não ser exibida corretamente** nas respostas das APIs `Get Order` do OMS e do Orders.

O campo `cancellationData`, que historicamente identifica a origem do cancelamento (como `requestedByPaymentNotification`), pode trazer informações genéricas — como `fulfillment` — ou não exibir detalhes. Isso ocorre devido ao processo de **merge das informações de cancelamento** entre marketplace e seller, que pode sobrescrever dados relevantes dependendo da ordem dos eventos.


#### Simulation



- Gere um pedido em uma conta com integração entre **seller e marketplace**.
- Simule um cancelamento automático, por exemplo, por **falha na autorização de pagamento**.
- Acesse a API `Get Order` do OMS ou Orders.
- Observe que o campo `cancellationData` pode não indicar claramente que o cancelamento foi feito pelo módulo de pagamentos.
- Se possível, compare com a resposta da API de pedidos do **SOS**, onde a origem geralmente aparece de forma correta.


#### Workaround


Atualmente, para identificar corretamente a origem do cancelamento em casos afetados, é necessário o apoio da equipe interna.

Recomenda-se **abrir um ticket** para análise manual dos logs e validação da origem real do cancelamento.



