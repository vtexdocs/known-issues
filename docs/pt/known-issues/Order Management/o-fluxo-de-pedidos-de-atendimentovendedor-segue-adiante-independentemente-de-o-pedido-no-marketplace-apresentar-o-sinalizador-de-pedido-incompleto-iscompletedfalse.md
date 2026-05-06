---
title: 'O fluxo de pedidos de atendimento/vendedor segue adiante independentemente de o pedido no Marketplace apresentar o sinalizador de pedido incompleto (isCompleted=false)'
slug: o-fluxo-de-pedidos-de-atendimentovendedor-segue-adiante-independentemente-de-o-pedido-no-marketplace-apresentar-o-sinalizador-de-pedido-incompleto-iscompletedfalse
status: PUBLISHED
createdAt: 2021-03-17T15:32:08.000Z
updatedAt: 2024-11-21T19:56:07.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: the-fulfillmentseller-order-flow-progresses-regardless-of-whether-it-has-the-incomplete-order-flag-iscompletedfalse-in-the-marketplace-order
locale: pt
kiStatus: Backlog
internalReference: 345526
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Nos cenários de gerenciamento de pedidos da VTEX, sempre teremos dois pedidos e, de certa forma, fluxos de trabalho independentes: o pedido do Marketplace e o de Logística.

Nesse caso, o problema ocorre quando, por algum motivo, o pedido do **Marketplace** é marcado como incompleto (`"isCompleted": false`), porém, o pedido de **Fulfillment** é criado com sucesso e permanece no status "**Aguardando autorização de fulfillment**", e o Fulfillment só sai desse status em duas situações: uma é automática, que é a correta, quando o Marketplace recebe a notificação de pagamento e o próprio Marketplace notifica o fulfillment, permitindo que ele continue o fluxo; ou a própria conta pode fazer isso deliberadamente, e pode não receber o pagamento pelo pedido que será entregue. Enquanto o comportamento esperado é cancelar ambos os pedidos.

Ações dentro do **pedido de Fulfillment**, como “Iniciar processamento” ou enviar a notificação de fatura sem primeiro consultar o status do **pedido do Marketplace** (se está completo ou não), podem levar à continuação do **fluxo de trabalho de Fulfillment** independentemente de o **Marketplace** ter um pedido incompleto.

O principal problema é realizar o atendimento do pedido sem um pedido do Marketplace (principal) concluído e, certamente, sem um processo de pagamento correto.

## Simulação

Não é um cenário que possa ser replicado; no entanto, é possível validar a propriedade no JSON do **pedido do Marketplace** `"isCompleted:"` se ela estiver atualmente com o valor `false`, e o **pedido de atendimento (Vendedor)** `"isCompleted:"` com o valor `true` e seu fluxo de trabalho permitindo o avanço do pedido.

Exemplo da propriedade `"isCompleted": false` do **pedido do Marketplace**:
 ![](https://vtexhelp.zendesk.com/attachments/token/61ctwev8pXI4WHheLVtfnD0Sq/?name=inline1159444440.png)

## Workaround

A ideia é impedir que o fluxo do pedido avance se o pedido do Marketplace estiver incompleto. A ideia é bloquear qualquer ação para continuar com o pedido de Fulfillment e garantir que ele seja cancelado, juntamente com o pagamento, caso ambos estejam ativos ou ainda não tenham sido cancelados.

Por outro lado, a ideia é que o cliente evite realizar qualquer ação no pedido se o pedido do Marketplace tiver sido marcado como incompleto.%0A