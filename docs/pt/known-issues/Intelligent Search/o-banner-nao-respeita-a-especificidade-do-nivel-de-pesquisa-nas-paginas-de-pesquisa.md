---
title: 'O banner não respeita a especificidade do nível de pesquisa nas páginas de pesquisa.'
slug: o-banner-nao-respeita-a-especificidade-do-nivel-de-pesquisa-nas-paginas-de-pesquisa
status: PUBLISHED
createdAt: 2022-04-26T17:24:55.000Z
updatedAt: 2026-09-22T15:45:34.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: banner-not-respecting-the-specificity-of-the-search-level-in-search-pages
locale: pt
kiStatus: Backlog
internalReference: 566809
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Se tivermos um banner para um departamento e outro para uma categoria dentro desse departamento, a consulta de banners não respeitará a especificidade da árvore de categorias, sempre retornando o primeiro banner da API.

Isso se aplica a toda a árvore de categorias ou níveis de especificação.

## Simulação

- Acesse **Administração > Loja > Banners**.

- Crie um banner para um departamento (ele deve ser criado primeiro).

- Crie um banner para uma categoria dentro desse departamento.

- Acesse a página da categoria (site do cliente).

- A API encontrará correspondências entre os banners e retornará o primeiro banner exibido.

## Workaround

Crie os banners nesta ordem: do mais específico para o mais genérico.

Exemplo de ordem:

1. Banners de subcategoria
2. Banners de categoria
3. Banners de departamento

Alternativa: se os banners já existirem na ordem incorreta, desative-os e reative-os na ordem correta (subcategoria, depois categoria e, por fim, departamento). Isso coloca os banners genéricos por último na resposta da API.

curl --location 'https://{accountName}.vtexcommercestable.com.br/api/intelligent-search/v1/banners/{facets}?query={query}' \