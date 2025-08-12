---
title: Falha na atualização do status das solicitações das organizações
slug: falha-na-atualizacao-do-status-das-solicitacoes-das-organizacoes
status: PUBLISHED
createdAt: 2025-08-12T20:11:49.081Z
updatedAt: 2025-08-12T20:11:49.081Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: failure-in-organizations-requests-status-update
locale: pt
kiStatus: Backlog
internalReference: 1275305
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



Ao aprovar uma solicitação de organização no B2B Suite, é possível que o status da solicitação não seja atualizado corretamente após a criação da organização, deixando-a em "Pendente".

Isso acontece por um motivo desconhecido e dois cenários possíveis são conhecidos:

- A organização é criada corretamente, mas o status da solicitação não é atualizado;
- A organização é criada de forma incompleta, faltando informações sobre o centro de custo e os usuários, e o status não é atualizado.
## Simulação



Não há como replicar o problema.


## Workaround



Quando a organização for criada corretamente (com usuário e centro de custo), você poderá solicitar uma sincronização de status para as equipes de suporte da VTEX.

Quando a organização é criada com usuários e centro de custo ausentes, uma solicitação `deleteOrganization` deve ser feita via graphQL para que a solicitação possa ser aprovada novamente.


