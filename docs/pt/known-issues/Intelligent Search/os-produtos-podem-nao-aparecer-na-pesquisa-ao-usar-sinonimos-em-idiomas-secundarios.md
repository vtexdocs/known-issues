---
title: 'Os produtos podem não aparecer na pesquisa ao usar sinônimos em idiomas secundários.'
slug: os-produtos-podem-nao-aparecer-na-pesquisa-ao-usar-sinonimos-em-idiomas-secundarios
status: PUBLISHED
createdAt: 2025-07-30T19:40:12.000Z
updatedAt: 2026-09-22T16:56:17.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: products-may-not-appear-in-search-when-using-synonyms-in-secondary-languages
locale: pt
kiStatus: Backlog
internalReference: 1268282
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Durante a indexação, a Busca Inteligente aplica a normalização a termos sinônimos, mas não normaliza os nomes dos produtos em idiomas secundários ao buscar esses sinônimos.

Devido a essa incompatibilidade, sinônimos com acentos podem não corresponder a nomes de produtos em idiomas não primários, e os produtos afetados podem não aparecer nos resultados da busca.

Idiomas afetados:

- `ca-ES` - catalão

## Simulação

Siga os passos abaixo para simular o cenário:
1 - Crie um sinônimo com acentos no idioma afetado.

2 - Após o produto ser reindexado (**Administração** > **Histórico de Indexação**), busque por produtos que contenham os sinônimos pesquisados.

O resultado não recupera os produtos esperados onde os termos originais do nome do produto possuem acentos.

## Workaround

N/A