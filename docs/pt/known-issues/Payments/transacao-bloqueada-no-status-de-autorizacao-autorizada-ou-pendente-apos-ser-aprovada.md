---
title: 'Transação bloqueada no status de autorização autorizada ou pendente após ser aprovada'
slug: transacao-bloqueada-no-status-de-autorizacao-autorizada-ou-pendente-apos-ser-aprovada
status: PUBLISHED
createdAt: 2025-11-17T17:57:26.519Z
updatedAt: 2025-11-17T17:57:26.519Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-authorized-or-pending-authorization-status-after-being-approved
locale: pt
kiStatus: Fixed
internalReference: 1037765
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em um fluxo de transação padrão, uma vez que todos os pagamentos tenham sido autorizados com sucesso, espera-se que a transação mude seu status para _Approved_.
A documentação oficial explica os diferentes estados da transação com mais detalhes: Fluxo de transações em pagamentos.

Entretanto, nas transações afetadas por esse problema, observamos dois tipos de comportamentos inesperados:

1. **Após todos os pagamentos terem sido aprovados (autorizados) e a transação já ter passado para o status _Approved_, um novo evento de status de transição, `TransactionWorkFlowChangeStatus`, é acionado. Esse evento atualiza incorretamente o status de volta para _Authorized_. Embora outro evento `TransactionWorkFlowChangeStatus - Approved` ocorra em seguida, a atualização do status final não é registrada corretamente na transação. Como resultado, a transação permanece presa no estado _Authorized_, impedindo que o pedido ou a transação avance conforme o esperado.
2.

**Parada na autorização pendente:** Às vezes, a transação fica presa no status _Pending Authorization_, mesmo quando todos os pagamentos já foram autorizados.



Esses problemas podem ser identificados com frequência por registros `TransactionWorkFlowChangeStatus` duplicados ou conflitantes, como _Approved_ seguido de _Authorized_, ou pela ausência total do evento _Approved_ final, o que leva a um estado de transação inconsistente ou congelado.

Em setembro de 2025, realizamos uma operação no gateway da VTEX para garantir a consistência do status, o que reduziu o número de casos em 97%. No entanto, esse problema ainda pode ocorrer devido ao uso inadequado de conectores de pagamento.
Um novo problema conhecido foi aberto para rastrear esses casos recentes, onde você também pode encontrar mais detalhes sobre as práticas recomendadas que devem ser implementadas pelos conectores:

https://newhelp.vtex.com/en/known-issues/transactions-stuck-in-authorized-or-pending-authorization-after-approval?utm_source=old_portal&utm_medium=redirect&utm_campaign=portal_transition
## Simulação


## Workaround

