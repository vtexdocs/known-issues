---
title: 'A organização "Minhas Cotações" e o filtro de centro de custos não funcionam para usuários com permissão de acesso a todas as cotações e carrinhos.'
slug: a-organizacao-minhas-cotacoes-e-o-filtro-de-centro-de-custos-nao-funcionam-para-usuarios-com-permissao-de-acesso-a-todas-as-cotacoes-e-carrinhos
status: PUBLISHED
createdAt: 2026-07-22T18:43:48.000Z
updatedAt: 2026-07-22T18:43:48.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: my-quotes-organization-and-cost-center-filter-doesnt-work-for-users-with-access-all-quotes-and-carts-permission
locale: pt
kiStatus: Backlog
internalReference: 1438245
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao acessar a página "Meus Orçamentos" com um usuário que possui a permissão "Acessar todos os orçamentos e carrinhos" e abrir o filtro "Organização e Centro de Custo", o usuário não conseguirá pesquisar uma organização. Digitar na barra de pesquisa não terá efeito e o recurso de autocompletar não retornará resultados.

## Simulação

- Em uma loja que utiliza o B2B Suite e o aplicativo `b2b-quotes`, defina a permissão "Acessar todos os orçamentos e carrinhos" para um usuário.
- Faça login com este usuário.
- Acesse "Minha Conta" -> "Meus Orçamentos".
- Selecione o filtro "Organização e Centro de Custo".
- Digite na barra de pesquisa; você verá que nada será digitado e o recurso de autocompletar não retornará opções para seleção.

## Workaround

N/A