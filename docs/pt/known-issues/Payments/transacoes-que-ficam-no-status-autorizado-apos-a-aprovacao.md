---
title: 'Transações que ficam no status “Autorizado” após a aprovação'
slug: transacoes-que-ficam-no-status-autorizado-apos-a-aprovacao
status: PUBLISHED
createdAt: 2025-12-26T17:49:30.000Z
updatedAt: 2026-05-28T19:55:32.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-authorized-after-approval
locale: pt
kiStatus: Fixed
internalReference: 1344363
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As transações podem permanecer presas no estado **Autorizado** mesmo após todos os pagamentos terem sido autorizados com sucesso, impedindo a emissão de faturas e o andamento normal do pedido. O sintoma visível é que a transação não avança para o estado **Aprovado**, apesar de as aprovações terem ocorrido, muitas vezes acompanhado por interações duplicadas ou conflitantes do TransactionWorkFlowChangeStatus.
A documentação oficial explica os diferentes estados da transação com mais detalhes: Fluxo da transação em pagamentos.

No entanto, nas transações afetadas por esse problema, observamos um comportamento inesperado:
Preso em **Autorizado**: Depois que todos os pagamentos foram aprovados (autorizados) e a transação já passou para o status **Aprovado**, um novo evento de transição de status, TransactionWorkFlowChangeStatus, é acionado. Esse evento atualiza incorretamente o status de volta para **Autorizado**. Mesmo que outro evento TransactionWorkFlowChangeStatus - Aprovado ocorra posteriormente, a atualização final do status não é registrada corretamente na transação. Como resultado, a transação permanece presa no estado **Autorizado**, impedindo que o pedido ou a transação prossiga conforme o esperado.

Para evitar esse problema, é importante saber que o VTEX Payment Gateway usa um modelo de dados em memória, confirmando as alterações no banco de dados somente após a conclusão de cada solicitação. Por isso, os conectores de pagamento devem evitar fazer solicitações POST (como /additional-data, /retry ou /callback) durante o processamento da autorização, pois os dados esperados podem ainda não ter sido persistidos, causando deadlocks ou inconsistências.
Os conectores não devem chamar o Gateway de volta durante o mesmo fluxo que iniciaram, nem presumir que os dados estejam imediatamente disponíveis no banco de dados. Em vez disso, devem usar solicitações GET para recuperar informações da transação ou do pagamento, aguardar a conclusão do processo de autorização antes de enviar callbacks e lidar com o processamento adicional de forma assíncrona após a conclusão da solicitação inicial.
Seguindo esse padrão, evitando chamadas circulares de API, solicitações simultâneas e callbacks sobrepostos, os conectores garantem uma integração estável e evitam problemas de consistência de dados ou bloqueio.

## Simulação

Não é possível simular.

## Workaround

Abra um ticket para a equipe de Suporte ao Produto



%0A