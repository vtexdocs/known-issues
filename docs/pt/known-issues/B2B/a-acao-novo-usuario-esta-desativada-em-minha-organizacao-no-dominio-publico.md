---
title: 'A ação “Novo usuário” está desativada em “Minha organização” no domínio público'
slug: a-acao-novo-usuario-esta-desativada-em-minha-organizacao-no-dominio-publico
status: PUBLISHED
createdAt: 2026-03-25T19:04:57.926Z
updatedAt: 2026-03-25T19:04:57.926Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: new-user-action-disabled-in-my-organization-on-public-domain
locale: pt
kiStatus: Backlog
internalReference: 1383616
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os usuários administradores não conseguem adicionar novos membros a partir do domínio público da loja virtual em Minha conta > Minha organização, pois o botão “NOVO” permanece desativado, enquanto a mesma ação funciona no domínio myvtex. O sintoma visível é um botão “NOVO” desativado no subdomínio público para todos os usuários, mesmo aqueles que possuem as seguintes permissões na organização:

`"add-users-organization",`
`"remove-users-organization"`

## Simulação

- Acesse a loja pelo domínio público e faça login como um usuário com as permissões `"add-users-organization"` e `"remove-users-organization"` para uma determinada organização
- Navegue até Minha conta > Minha organização > Usuários.
- Observe que o botão “NOVO” para adicionar usuários está desativado no domínio público, embora o mesmo usuário possa adicionar outros usuários à organização ao acessar pelo domínio myvtex ou via GraphQL.

## Workaround

Realize o gerenciamento de usuários (adição de usuários) a partir do domínio myvtex, onde o botão “NOVO” está habilitado, ou por meio da mutação `AddUser` do GraphQL do aplicativo `vtex.b2b-organizations-graphql`.