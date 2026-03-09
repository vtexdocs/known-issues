---
title: 'Transações retidas em Autorização pendente após aprovação'
slug: transacoes-retidas-em-autorizacao-pendente-apos-aprovacao
status: PUBLISHED
createdAt: 2026-03-09T12:53:14.023Z
updatedAt: 2026-03-09T12:53:14.023Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-pending-authorization-after-approval
locale: pt
kiStatus: Fixed
internalReference: 1344365
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As transações podem permanecer presas em **Autorização pendente** mesmo após todos os pagamentos terem sido autorizados com sucesso, impedindo o faturamento e o andamento normal do pedido. O sintoma visível é a transação não avançar para Aprovada, apesar das aprovações terem ocorrido, muitas vezes acompanhada por registros duplicados ou conflitantes do TransactionWorkFlowChangeStatus. A documentação oficial explica os diferentes estados da transação com mais detalhes: Fluxo da transação em pagamentos.

A transação fica presa no status **Autorização pendente**, mesmo quando todos os pagamentos já foram autorizados. Esses problemas podem ser frequentemente identificados por logs TransactionWorkFlowChangeStatus duplicados ou conflitantes, como Aprovado seguido de **Autorização pendente**, ou pela ausência total do evento Aprovado final — levando a um estado de transação inconsistente ou congelado.

Para evitar esse problema, é importante saber que o VTEX Payment Gateway usa um modelo de dados em memória, confirmando as alterações no banco de dados somente após a conclusão de cada solicitação. Por isso, os conectores de pagamento devem evitar fazer solicitações POST (como /additional-data, /retry ou /callback) durante o processamento da autorização, pois os dados esperados podem ainda não ter sido persistidos, causando deadlocks ou inconsistências.
Os conectores não devem chamar o Gateway de volta durante o mesmo fluxo que iniciaram, nem presumir que os dados estão imediatamente disponíveis no banco de dados. Em vez disso, eles devem usar solicitações GET para recuperar informações de transação ou pagamento, aguardar a conclusão do processo de autorização antes de enviar callbacks e lidar com o processamento adicional de forma assíncrona após a conclusão da solicitação inicial.
Seguindo esse padrão, evitando chamadas circulares de API, solicitações simultâneas e callbacks sobrepostos, os conectores garantem uma integração estável e evitam problemas de consistência ou bloqueio de dados.

## Simulação

Não é possível simular.

## Workaround

Abra um ticket para a equipe de suporte ao produto %0A