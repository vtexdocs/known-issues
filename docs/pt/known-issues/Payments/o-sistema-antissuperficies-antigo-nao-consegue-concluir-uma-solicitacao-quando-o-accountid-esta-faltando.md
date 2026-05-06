---
title: 'O sistema antissuperfícies antigo não consegue concluir uma solicitação quando o accountId está faltando.'
slug: o-sistema-antissuperficies-antigo-nao-consegue-concluir-uma-solicitacao-quando-o-accountid-esta-faltando
status: PUBLISHED
createdAt: 2022-01-03T17:25:37.000Z
updatedAt: 2026-01-08T17:40:40.000Z
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

Há um problema com a aprovação de algumas transações relacionadas aos nossos conectores antifraude legados. Esse problema ocorre quando o sistema não consegue fazer a solicitação necessária devido à ausência do accountId, que é necessário para recuperar informações de pagamento do banco de dados de contas. Você pode verificar isso examinando a rota "/payment", onde encontrará o nó "usedAccountId" com o valor "False" nesses casos.

**{**"name": "usedAccountId","value": "False"**}**

Normalmente, a mensagem encontrada na resposta do sistema antifraude é "Referência de objeto não definida para uma instância de um objeto", o que impede que a transação seja aprovada.

Além disso, esse problema é comumente observado quando um usuário remove seu próprio cartão da página Minha conta imediatamente após fazer um pedido.

## Simulação

Siga a etapa mencionada acima, que envolve excluir um cartão imediatamente após fazer um pedido utilizando um sistema antissucursão legado.

## Workaround

Abra um ticket para a equipe de suporte ao produto.