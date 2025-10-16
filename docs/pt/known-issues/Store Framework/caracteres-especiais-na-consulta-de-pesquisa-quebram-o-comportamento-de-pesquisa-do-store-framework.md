---
title: Caracteres especiais na consulta de pesquisa quebram o comportamento de pesquisa do Store Framework
slug: caracteres-especiais-na-consulta-de-pesquisa-quebram-o-comportamento-de-pesquisa-do-store-framework
status: PUBLISHED
createdAt: 2025-10-16T20:53:37.390Z
updatedAt: 2025-10-16T20:53:37.390Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: special-characters-in-search-query-break-store-framework-search-behavior
locale: pt
kiStatus: Backlog
internalReference: 1232881
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando uma consulta de pesquisa inclui caracteres especiais, como # ou ?, o restante do nome do produto é ignorado. Além disso, o parâmetro map é reconhecido incorretamente, resultando em uma pesquisa vazia ou em uma página "Not Found" se o sinalizador `enable404OneSegment` for definido como verdadeiro.
## Simulação



1. Vá para a página de pesquisa da loja (baseada na estrutura da loja).
2. Faça uma busca por um produto com caracteres especiais, como `Produto#123` ou `Produto?123`.
3. Observe que somente a parte do termo antes do caractere especial é considerada.
4. O parâmetro `map` é desconsiderado, levando a um resultado de pesquisa quebrado ou vazio
## Workaround


N/A


