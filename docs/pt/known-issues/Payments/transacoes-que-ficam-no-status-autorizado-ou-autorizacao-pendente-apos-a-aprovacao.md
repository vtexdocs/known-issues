---
title: 'Transações que ficam no status “Autorizado” ou “Autorização pendente” após a aprovação'
slug: transacoes-que-ficam-no-status-autorizado-ou-autorizacao-pendente-apos-a-aprovacao
status: PUBLISHED
createdAt: 2025-10-08T19:24:00.000Z
updatedAt: 2026-05-28T19:54:27.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-authorized-or-pending-authorization-after-approval
locale: pt
kiStatus: Fixed
internalReference: 1304667
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As transações podem permanecer presas nos estados “Autorizada” ou “Aguardando autorização” mesmo após todos os pagamentos terem sido autorizados com sucesso, impedindo a emissão de faturas e o andamento normal do pedido. O sintoma visível é que a transação não avança para o estado “Aprovada”, apesar de as aprovações terem ocorrido, muitas vezes acompanhado por registros duplicados ou conflitantes de `TransactionWorkFlowChangeStatus`.
A documentação oficial explica os diferentes estados da transação com mais detalhes: Fluxo da transação em pagamentos.

No entanto, nas transações afetadas por esse problema, observamos dois tipos de comportamentos inesperados:

1. **Preso em Autorizado:** Depois que todos os pagamentos foram aprovados (autorizados) e a transação já passou para o status _Aprovado_, um novo evento de transição de status, `TransactionWorkFlowChangeStatus`, é acionado. Esse evento atualiza incorretamente o status de volta para _Autorizado_. Mesmo que outro evento `TransactionWorkFlowChangeStatus - Aprovado` ocorra posteriormente, a atualização final do status não é registrada corretamente na transação. Como resultado, a transação permanece presa no estado _Autorizado_, impedindo que o pedido ou a transação prossiga conforme o esperado.
2. **Preso em Autorização Pendente:** Às vezes, a transação fica presa no status _Autorização Pendente_, mesmo quando todos os pagamentos já foram autorizados.

Esses problemas geralmente podem ser identificados por logs `TransactionWorkFlowChangeStatus` duplicados ou conflitantes, como _Aprovado_ seguido por _Autorizado_, ou pela ausência total do evento final _Aprovado_ — levando a um estado de transação inconsistente ou congelado.

Para evitar esse problema, é importante saber que o VTEX Payment Gateway usa um modelo de dados em memória, confirmando as alterações no banco de dados somente após a conclusão de cada solicitação. Por isso, os conectores de pagamento devem evitar fazer solicitações POST (como `/additional-data`, `/retry` ou `/callback`) durante o processamento da autorização, pois os dados esperados podem ainda não ter sido gravados, causando impasses ou inconsistências.
Os conectores não devem chamar o Gateway de volta durante o mesmo fluxo que iniciaram, nem presumir que os dados estejam imediatamente disponíveis no banco de dados. Em vez disso, devem usar solicitações GET para recuperar informações de transação ou pagamento, aguardar a conclusão do processo de autorização antes de enviar callbacks e lidar com o processamento adicional de forma assíncrona após a conclusão da solicitação inicial.
Seguindo esse padrão, evitando chamadas circulares de API, solicitações simultâneas e callbacks sobrepostos, os conectores garantem uma integração estável e evitam problemas de consistência de dados ou bloqueios.

Além do comportamento descrito acima, este problema conhecido principal foi posteriormente dividido em dois KIs mais específicos para delimitar melhor os fluxos comerciais e técnicos e melhorar a priorização, conforme alinhado em nossa discussão interna:

- **[KI] Transações presas em “Autorizado” após a aprovação** – Ticket do Zendesk **1344363**
https://vtexhelp.zendesk.com/agent/tickets/1344363
- **[KI] Transações presas em “Autorização pendente” após aprovação** – Ticket do Zendesk **1344365**
https://vtexhelp.zendesk.com/agent/tickets/1344365


Para obter descrições, sintomas, impacto, métricas e etapas de solução de problemas atualizados, **sempre use os KIs filhos acima**.
Este KI pai é mantido apenas para rastreamento histórico e vinculação de escalações mais antigas e **não** deve ser usado como referência principal daqui para frente.

## Simulação

Não é possível simular.

## Workaround

A equipe de suporte pode chamar APIs internas para dar andamento à transação.


%0A