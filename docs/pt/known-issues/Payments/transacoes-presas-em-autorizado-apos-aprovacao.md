---
title: 'Transações presas em Autorizado após aprovação'
slug: transacoes-presas-em-autorizado-apos-aprovacao
status: PUBLISHED
createdAt: 2025-12-26T14:49:58.346Z
updatedAt: 2025-12-26T14:49:58.346Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-authorized-after-approval
locale: pt
kiStatus: Backlog
internalReference: 1344363
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


As transações podem permanecer presas em **Authorized** mesmo depois que todos os pagamentos forem autorizados com sucesso, impedindo o faturamento e a progressão normal do pedido. O sintoma visível é que a transação não avança para Approved (Aprovado) apesar de terem ocorrido aprovações, muitas vezes acompanhadas de interações TransactionWorkFlowChangeStatus duplicadas ou conflitantes.
A documentação oficial explica os diferentes estados da transação com mais detalhes: Fluxo de transações em pagamentos.

Entretanto, nas transações afetadas por esse problema, observamos um comportamento inesperado:
Preso em **Authorized**: Após todos os pagamentos terem sido aprovados (autorizados) e a transação já ter passado para o status Aprovado, um novo evento de status de transição, TransactionWorkFlowChangeStatus, é acionado. Esse evento atualiza incorretamente o status de volta para **Authorized**. Mesmo que outro evento TransactionWorkFlowChangeStatus - Approved ocorra posteriormente, a atualização do status final não é registrada corretamente na transação. Como resultado, a transação permanece presa no estado **Authorized**, impedindo que o pedido ou a transação avance conforme o esperado.

Para evitar esse problema, é importante saber que o VTEX Payment Gateway usa um modelo de dados na memória, confirmando as alterações no banco de dados somente após a conclusão de cada solicitação. Por esse motivo, os conectores de pagamento devem evitar fazer solicitações POST (como /additional-data, /retry ou /callback) durante o processamento da autorização, pois os dados esperados podem ainda não ter sido persistidos, causando deadlocks ou inconsistências.
Os conectores não devem chamar o Gateway de volta durante o mesmo fluxo que ele iniciou, nem presumir que os dados estejam imediatamente disponíveis no banco de dados. Em vez disso, eles devem usar solicitações GET para recuperar informações sobre transações ou pagamentos, aguardar a conclusão do processo de autorização antes de enviar retornos de chamada e tratar o processamento adicional de forma assíncrona após a conclusão da solicitação inicial.
Ao seguir esse padrão, evitando chamadas de API circulares, solicitações simultâneas e callbacks sobrepostos, os conectores garantem uma integração estável e evitam problemas de consistência ou bloqueio de dados.

## Simulação


Não é possível simular.


## Workaround


Abra um tíquete para a equipe de suporte do Produtc



%0A