---
title: 'Os usuários criados em contas com o recurso emailRectification não são criados no VTEX ID'
slug: os-usuarios-criados-em-contas-com-o-recurso-emailrectification-nao-sao-criados-no-vtex-id
status: PUBLISHED
createdAt: 2025-10-16T20:31:30.498Z
updatedAt: 2025-10-16T20:31:30.498Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: users-created-in-accounts-with-emailrectification-feature-are-not-created-in-vtex-id
locale: pt
kiStatus: Backlog
internalReference: 1165203
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Para contas que têm o recurso de retificação de e-mail ativo, os usuários criados por meio de um dos métodos abaixo não são criados no VTEX ID.

Métodos de criação de usuários problemáticos conhecidos:

- UI da organização B2B no administrador da loja;
- Menu Minha organização na vitrine da loja;
- Mutação GraphQL createUserWithEmail.
## Simulação


Em uma loja com o recurso emailRectification ativo, crie um usuário com um dos métodos acima, o usuário não será criado no VTEX ID.


## Workaround


O usuário pode ser criado no VTEX ID por:

- Fazendo login na vitrine pela primeira vez;
- Solicitar a criação de usuário com a API Create User.



