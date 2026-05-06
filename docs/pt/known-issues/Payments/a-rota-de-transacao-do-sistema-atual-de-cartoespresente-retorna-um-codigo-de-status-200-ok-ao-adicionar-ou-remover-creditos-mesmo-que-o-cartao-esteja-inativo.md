---
title: 'A rota de transação do sistema atual de cartões-presente retorna um código de status 200 OK ao adicionar ou remover créditos, mesmo que o cartão esteja inativo.'
slug: a-rota-de-transacao-do-sistema-atual-de-cartoespresente-retorna-um-codigo-de-status-200-ok-ao-adicionar-ou-remover-creditos-mesmo-que-o-cartao-esteja-inativo
status: PUBLISHED
createdAt: 2023-04-24T20:31:03.000Z
updatedAt: 2023-04-24T20:31:02.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-current-gift-card-systems-transaction-route-returns-a-200-ok-status-code-when-adding-or-removing-credits-even-if-the-card-is-inactive
locale: pt
kiStatus: Backlog
internalReference: 795997
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, nosso sistema de cartões-presente não inclui uma verificação para confirmar se um cartão-presente está ativo antes de adicionar ou remover créditos. Embora essa rota se refira apenas à realização de transações com cartões-presente, ela é a única forma de fazê-lo; portanto, espera-se que seja realizada alguma validação.

Portanto, para resolver essa questão, pode ser útil atualizar a rota /transaction para retornar um código de status mais informativo, como 400 Bad Request ou 404 Not Found, ao tentar adicionar ou remover créditos de um cartão-presente inativo. Além disso, fornecer mensagens de erro claras ao usuário pode ajudar a evitar mal-entendidos e garantir que as transações sejam processadas com precisão.

## Simulação

Faça uma solicitação à rota /transaction para adicionar ou remover créditos usando um cartão-presente desativado.

## Workaround

N/A