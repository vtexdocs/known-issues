---
title: 'Inconsistência na exibição da origem dos cancelamentos de pedidos na API Get Orders'
slug: inconsistencia-na-exibicao-da-origem-dos-cancelamentos-de-pedidos-na-api-get-orders
status: PUBLISHED
createdAt: 2025-10-22T12:34:09.094Z
updatedAt: 2025-10-22T12:34:09.094Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: inconsistency-in-displaying-the-origin-of-order-cancellations-in-the-get-orders-api
locale: pt
kiStatus: Backlog
internalReference: 1249934
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em alguns casos de pedidos originados do fluxo nativo entre o marketplace e o vendedor, quando o cancelamento é iniciado pelo sistema ou via vendedor, por exemplo, em caso de falha de pagamento ou regras internas, as informações sobre a origem do cancelamento podem não ser exibidas corretamente nas respostas das APIs Get Order e Orders do OMS.

O campo cancellationData, que identifica historicamente a origem do cancelamento (como `requestedByPaymentNotification`), pode conter informações genéricas - como atendimento - ou pode não exibir nenhum detalhe. Isso se deve ao processo de mesclar informações de cancelamento entre o marketplace e o vendedor, que pode substituir dados relevantes dependendo da ordem dos eventos.
## Simulação



- Gere um pedido em uma conta com integração entre o vendedor e o marketplace.
- Simule um cancelamento automático, por exemplo, devido a uma falha na autorização de pagamento.
- Acesse a API Get Order do OMS ou Orders.
- Observe que o campo `cancellationData` pode não indicar claramente que o cancelamento foi feito pelo módulo de pagamento.
- Se possível, compare-o com a resposta da API SOS Orders, em que a origem geralmente aparece corretamente.


## Workaround


Atualmente, não há nenhuma solução alternativa para evitar que esse tipo de cenário ocorra. No entanto, para identificar corretamente a origem do cancelamento nos casos afetados, é necessário o suporte da equipe interna. Portanto, recomendamos a abertura de um tíquete para analisar manualmente os registros e validar a origem real do cancelamento.



