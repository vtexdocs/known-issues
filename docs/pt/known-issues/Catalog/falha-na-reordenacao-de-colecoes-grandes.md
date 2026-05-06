---
title: 'Falha na reordenação de coleções grandes'
slug: falha-na-reordenacao-de-colecoes-grandes
status: PUBLISHED
createdAt: 2021-08-05T17:56:52.000Z
updatedAt: 2026-01-29T22:35:28.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: reorder-collection-failing-for-large-collections
locale: pt
kiStatus: Backlog
internalReference: 408140
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Na nova interface de administração de Coleções, quando um usuário tenta reordenar a exibição dos produtos, a mutação GraphQL do catálogo que executa essa ação frequentemente falha devido a um tempo limite excedido na operação.

## Simulação

1) Abra uma coleção no painel de administração que contenha um grande volume de produtos
2) Execute a reordenação arrastando e soltando ou selecionando manualmente a nova posição do produto
3) Uma mensagem de erro será exibida na tela

## Workaround

N/A