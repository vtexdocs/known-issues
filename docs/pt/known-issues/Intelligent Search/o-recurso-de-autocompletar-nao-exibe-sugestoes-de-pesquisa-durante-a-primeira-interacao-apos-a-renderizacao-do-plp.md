---
title: 'O recurso de autocompletar não exibe sugestões de pesquisa durante a primeira interação após a renderização do PLP.'
slug: o-recurso-de-autocompletar-nao-exibe-sugestoes-de-pesquisa-durante-a-primeira-interacao-apos-a-renderizacao-do-plp
status: PUBLISHED
createdAt: 2025-04-09T15:44:09.000Z
updatedAt: 2026-09-22T16:54:37.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: autocomplete-does-not-display-search-suggestions-during-the-first-interaction-after-plp-renders
locale: pt
kiStatus: Backlog
internalReference: 1208038
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O recurso de autocompletar exibe "Nenhuma sugestão" durante a primeira interação após a renderização da página de pesquisa, mesmo quando o termo pesquisado pode resultar em sugestões de pesquisa.

## Simulação

Siga os passos abaixo para simular o cenário:

1. Pesquise um termo.

2. Após a renderização da página de pesquisa, clique na barra de pesquisa.

Ao clicar na barra de pesquisa, o recurso de autocompletar exibe "Nenhuma sugestão".

Para garantir que o comportamento não seja o esperado, clique fora da barra de pesquisa e interaja com ela clicando novamente. O recurso de autocompletar exibirá sugestões de pesquisa.

## Workaround

N/A