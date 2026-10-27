---
title: 'A aceitação do convite para contato de vendedor vincula o convite a qualquer conta VTEX ativa existente, sem necessidade de validar a propriedade.'
slug: a-aceitacao-do-convite-para-contato-de-vendedor-vincula-o-convite-a-qualquer-conta-vtex-ativa-existente-sem-necessidade-de-validar-a-propriedade
status: PUBLISHED
createdAt: 2026-10-27T15:40:24.000Z
updatedAt: 2026-10-27T15:40:24.000Z
contentType: knownIssue
productTeam: Marketplace In
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace In
slugEN: seller-lead-invitation-acceptance-links-the-invite-to-any-existing-active-vtex-account-without-validating-ownership
locale: pt
kiStatus: Backlog
internalReference: 1477830
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um potencial vendedor aceita um convite para o marketplace, o fluxo de aceitação verifica apenas se o `sellerAccountName` informado existe e está ativo no Gerenciador de Licenças. Ele não verifica se a conta pertence ao vendedor convidado ou se já está sendo usada por outra empresa.

Portanto, se o nome informado durante a aceitação corresponder a uma conta ativa existente pertencente a terceiros, o convite será vinculado a essa conta. Nenhuma nova conta é provisionada e o vendedor convidado nunca recebe a chave de acesso necessária para concluir o onboarding.

## Simulação

1. Na conta do marketplace, convide um novo potencial vendedor.

2. Como vendedor convidado, aceite o convite e insira um `sellerAccountName` que já existe e está ativo no VTEX, mas pertence a outra empresa.

3. O convite é vinculado a essa conta preexistente.

4. Nenhuma nova conta é criada e o vendedor convidado não recebe a chave de acesso.

## Workaround

N/A