---
title: 'A função de preenchimento automático da pesquisa exibe uma URL desatualizada após a navegação pelas sugestões'
slug: a-funcao-de-preenchimento-automatico-da-pesquisa-exibe-uma-url-desatualizada-apos-a-navegacao-pelas-sugestoes
status: PUBLISHED
createdAt: 2024-01-19T01:27:19.000Z
updatedAt: 2024-01-19T01:27:19.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-autocomplete-providing-outdated-url-after-navigating-through-suggestions
locale: pt
kiStatus: Backlog
internalReference: 968604
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

No componente "search-bar" com "autocomplete-result-list.v2", ao passar o mouse sobre as sugestões de pesquisa, os produtos sugeridos também mudam, assim como o texto de "ver todos os {n} produtos" passa a mencionar a pesquisa selecionada; no entanto, o link de "ver todos" continua associado ao termo de pesquisa original, em vez do selecionado.

## Simulação

- pesquise um termo parcial
- passe o mouse sobre os termos sugeridos
- clique em “ver todos os produtos”

## Workaround

N/A