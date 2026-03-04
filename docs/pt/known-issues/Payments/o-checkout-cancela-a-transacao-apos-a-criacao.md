---
title: 'O checkout cancela a transação após a criação'
slug: o-checkout-cancela-a-transacao-apos-a-criacao
status: PUBLISHED
createdAt: 2026-03-04T16:33:10.742Z
updatedAt: 2026-03-04T16:33:10.742Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: checkout-cancels-transaction-after-creation
locale: pt
kiStatus: Fixed
internalReference: 1157809
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Uma transação já aprovada (e, em alguns casos, capturada) recebe uma solicitação de cancelamento diretamente do checkout: Um aplicativo externo chamado para cancelar esta transação Id = com Valor RequestId = . Prioridade: padrão. Autor: vtex-service::checkout::stable. Esta solicitação de cancelamento ocorre devido a um tempo limite quando o checkout chama a rota de pagamentos do gateway e o serviço demora muito para responder.

Isso acontece quando o método `GatewayCallback` é acionado em dois pontos diferentes no fluxo do pedido: 1. **Durante a etapa de processamento do pedido** – quando o endpoint `gatewayCallback/{orderGroup}` é chamado. 2. **Após a autorização do pagamento** – quando o endpoint `gatewayCallback/{orderGroup}/{messageCode}` é chamado.

Em ambos os casos, o `GatewayCallback` realiza uma solicitação ao gateway de pagamento. Se o gateway demorar muito para responder, o mesmo tipo de erro de tempo limite pode ocorrer em qualquer um dos cenários. Para esclarecer melhor: - A primeira chamada é uma **solicitação POST** para `gatewayCallback`, que ocorre logo após o usuário concluir o processo de checkout.
- A segunda chamada é uma **solicitação GET** para `gatewayCallback`, que é acionada durante a confirmação do pagamento – é quando o comprador é redirecionado para a tela “Pedido feito”.

## Simulação

A simulação não é possível.

## Workaround

Não há solução alternativa disponível.