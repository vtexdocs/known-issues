---
title: 'Os Antifrauds legados não podem concluir uma solicitação quando o accountId está ausente.'
slug: os-antifrauds-legados-nao-podem-concluir-uma-solicitacao-quando-o-accountid-esta-ausente
status: PUBLISHED
createdAt: 2026-01-08T16:18:35.476Z
updatedAt: 2026-01-08T16:18:35.476Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: legacy-antifrauds-cannot-complete-a-request-when-the-accountid-is-missing
locale: pt
kiStatus: Backlog
internalReference: 496298
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Há um problema com a aprovação de algumas transações relacionadas aos nossos conectores antifraude legados. Esse problema ocorre quando o sistema não consegue fazer a solicitação necessária devido à ausência do accountId, que é necessário para recuperar as informações de pagamento do banco de dados da conta. Você pode verificar isso examinando a rota “/payment”, onde encontrará o nó “usedAccountId” com o valor “False” nesses casos.

**{**"name": "usedAccountId","value": "False"**}** Normalmente, a mensagem encontrada na resposta antifraude é “Referência de objeto não definida para uma instância de um objeto”, o que impede que a transação seja aprovada. Além disso, esse problema é comumente observado quando um usuário remove seu próprio cartão da página Minha conta imediatamente após fazer um pedido.
## Simulação


## Workaround

