---
title: 'A API de sugestão de preenchimento automático remove caracteres especiais do nome do produto'
slug: a-api-de-sugestao-de-preenchimento-automatico-remove-caracteres-especiais-do-nome-do-produto
status: PUBLISHED
createdAt: 2025-10-31T17:39:25.142Z
updatedAt: 2025-10-31T17:39:25.142Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: autocomplete-suggestion-api-removes-special-characters-from-the-product-name
locale: pt
kiStatus: Backlog
internalReference: 1014701
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Esse problema ocorre quando se pesquisa um termo e a sugestão de preenchimento automático retorna termos sem caracteres especiais, mesmo que o termo de pesquisa contenha algum caractere especial, resultando em resultados de pesquisa incorretos.
## Simulação



1. Solicite a rota da API GET `https://..com.br/api/io/_v/api/intelligent-search/autocomplete_suggestions?query=` ou use o componente da barra de pesquisa para retornar sugestões de preenchimento automático para um ou mais termos de pesquisa.
2. Observe as sugestões de preenchimento automático fornecidas pelo sistema.
3. Observe se algum caractere especial está faltando nas sugestões de autocompletar retornadas.

Por exemplo, se o termo "headphone" (fone de ouvido) for pesquisado na API de sugestão de autocompletar ou no componente de pesquisa, os resultados da sugestão, se contiverem um caractere especial no nome, serão exibidos como "Headphone Bluetooth 5 0" em vez de ter o ponto no número "5.0". O formato correto deve ser "Headphone Bluetooth 5.0". O mesmo acontece se uma pesquisa já contiver um caractere especial, por exemplo, "headphone 5.0", ela também retornará "Headphone Bluetooth 5 0".

Ao selecionar essa sugestão na API product_search, os resultados não serão retornados
## Workaround


N/A

