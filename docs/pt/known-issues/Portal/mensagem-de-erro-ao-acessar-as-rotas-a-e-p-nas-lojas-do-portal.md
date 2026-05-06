---
title: 'Mensagem de erro ao acessar as rotas /a e /p nas lojas do Portal'
slug: mensagem-de-erro-ao-acessar-as-rotas-a-e-p-nas-lojas-do-portal
status: PUBLISHED
createdAt: 2023-11-30T16:31:29.000Z
updatedAt: 2023-11-30T16:31:29.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: something-went-wrong-message-when-accessing-a-and-p-routes-in-portal-stores
locale: pt
kiStatus: Backlog
internalReference: 945226
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

É esperado que seja possível pesquisar qualquer termo nas lojas do Portal; no entanto, as letras "A" e "P" não podem ser pesquisadas diretamente por meio da URL.
Portanto, uma mensagem "Algo deu errado" será exibida ao acessar as rotas `/a` e `/p` nas lojas do Portal

## Simulação

1. Acesse uma loja do Portal
2. Acesse o link `site.com/a` ou `site.com/p`
3. Veja a mensagem “Algo deu errado” na página inicial

## Workaround

Não se aplica ao caminho `/a`
Registre um redirecionamento no CMS legado de `/p` para `/?ft=p`