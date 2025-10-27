---
title: 'A mutação impersonate do Store-graphql não carrega dados de perfil para usuários criados manualmente'
slug: a-mutacao-impersonate-do-storegraphql-nao-carrega-dados-de-perfil-para-usuarios-criados-manualmente
status: PUBLISHED
createdAt: 2025-10-16T20:48:56.756Z
updatedAt: 2025-10-16T20:48:56.756Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: storegraphql-impersonate-mutation-does-not-load-profile-data-for-users-created-manually
locale: pt
kiStatus: Backlog
internalReference: 1214877
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A mutação impersonate do aplicativo vtex.store-graphql não se comporta como esperado quando o cliente não foi criado por meio da plataforma VTEX, mas importado diretamente para o Masterdata (independentemente de ter sido via API, planilha ou entrada manual). Quando isso acontece, os dados do perfil do cliente não ficam imediatamente disponíveis para o aplicativo vtex.telemarketing após a personificação.

## Simulação


Para reproduzir o problema:

Importe um usuário para o Masterdata sem (pode ser via API, entrada manual ou planilha).

Vá para uma loja que use vtex.telemarketing com uma função de administrador válida de telemarketing.

Tente se passar pelo novo usuário.

Observe que as informações do perfil são nulas na resposta de mutação.

Atualize a página manualmente. Depois disso, os dados do perfil serão exibidos corretamente.



## Workaround


**Atualize a página** depois de usar a mutação `impersonate`, seja manual ou programaticamente. Isso força os dados do perfil a serem obtidos corretamente.



