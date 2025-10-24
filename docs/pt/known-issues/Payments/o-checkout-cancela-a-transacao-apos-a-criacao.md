---
title: 'O checkout cancela a transação após a criação'
slug: o-checkout-cancela-a-transacao-apos-a-criacao
status: PUBLISHED
createdAt: 2025-10-16T17:29:05.164Z
updatedAt: 2025-10-16T17:29:05.164Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: checkout-cancels-transaction-after-creation
locale: pt
kiStatus: Backlog
internalReference: 1157809
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



Uma transação já aprovada (e, em alguns casos, capturada) recebe uma solicitação de cancelamento diretamente do checkout:


    Um aplicativo externo chamado para cancelar essa transação Id = com Value RequestId = . Prioridade: padrão. Autor: vtex-service::checkout::stable.
Essa solicitação de cancelamento ocorre devido a um tempo limite quando o checkout chama a rota de pagamentos do gateway e o serviço leva muito tempo para responder.

Isso acontece quando o método `newGatewayCallback` é acionado em dois pontos diferentes do fluxo do pedido:



1. **Durante o estágio de processamento do pedido** - quando o ponto final `gatewayCallback/{orderGroup}` é chamado.
2. **Após a autorização do pagamento** - quando o ponto final `gatewayCallback/{orderGroup}/{messageCode}` é chamado.

Em ambos os casos, o `newGatewayCallback` executa uma solicitação para o gateway de pagamento. Se o gateway demorar muito para responder, o mesmo tipo de erro de tempo limite pode ocorrer em qualquer cenário.

Para esclarecer melhor:


- A primeira chamada é uma solicitação **POST** para `gatewayCallback`, que ocorre logo após o usuário concluir o processo de checkout.
- A segunda chamada é uma solicitação **GET** para `gatewayCallback`, que é acionada durante a confirmação do pagamento - é quando o comprador é redirecionado para a tela "Order Placed".

## Simulação


A simulação não é possível.



## Workaround


Não há solução alternativa disponível.




