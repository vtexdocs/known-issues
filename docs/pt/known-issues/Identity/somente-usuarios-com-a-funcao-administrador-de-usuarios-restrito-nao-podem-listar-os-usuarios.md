---
title: 'Somente usuários com a função "Administrador de usuários - RESTRITO" não podem listar os usuários'
slug: somente-usuarios-com-a-funcao-administrador-de-usuarios-restrito-nao-podem-listar-os-usuarios
status: PUBLISHED
createdAt: 2023-11-08T18:06:57.000Z
updatedAt: 2023-11-08T18:06:57.000Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: user-only-with-the-role-user-administrator-restricted-is-not-able-to-list-the-users
locale: pt
kiStatus: Backlog
internalReference: 932666
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Se um usuário administrador tiver apenas a função "**Administrador de usuários - RESTRITO**" (recurso "**Salvar usuário**"), a lista de usuários não estará disponível e não será possível realizar as edições ou exclusões necessárias.

## Simulação

- Tenha um usuário com apenas a função "**Administrador de usuários - RESTRITO**";
- Acesse a página "**Usuários Administradores**" com esse usuário (por exemplo, https://my-account-here.myvtex.com/admin/users);
- Você poderá notar que a lista está vazia, mesmo com usuários já registrados ("_Nenhum usuário encontrado :: A pesquisa de usuários retornou uma lista vazia. Tente remover quaisquer filtros de pesquisa ou adicionar novos usuários a esta conta._"):
 ![](https://vtexhelp.zendesk.com/attachments/token/fZ2k11R3xPrhNv5yHVkv9alam/?name=image.png)

- É possível adicionar o usuário desejado e incluir as funções necessárias, mas não podemos acessar os usuários para adicionar/editar/remover funções, nem mesmo excluir o usuário por meio de seu registro, mas apenas por meio da função.

## Workaround

Você pode adicionar ou remover o usuário da função acessando a função diretamente.

Você também pode criar uma função personalizada com apenas os recursos "**Obter funções paginadas**" e "**Obter usuários paginados**":
 ![](https://vtexhelp.zendesk.com/attachments/token/yjNfjlnfFaBrXZE6gx97OaxHy/?name=image.png)
E, em seguida, adicioná-la ao usuário que pode salvar usuários.