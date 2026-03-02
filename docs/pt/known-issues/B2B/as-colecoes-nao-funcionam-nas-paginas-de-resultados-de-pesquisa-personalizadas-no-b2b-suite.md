---
title: 'As coleções não funcionam nas páginas de resultados de pesquisa personalizadas no B2B Suite.'
slug: as-colecoes-nao-funcionam-nas-paginas-de-resultados-de-pesquisa-personalizadas-no-b2b-suite
status: PUBLISHED
createdAt: 2026-03-02T14:58:15.016Z
updatedAt: 2026-03-02T14:58:15.016Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: collections-doesnt-work-in-custom-search-results-pages-in-b2b-suite
locale: pt
kiStatus: Backlog
internalReference: 1043470
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As páginas de resultados de pesquisa personalizadas configuradas com o ID da coleção não funcionam quando diferentes coleções de produtos são atribuídas a uma organização.

O comportamento esperado ao usar coleções é definir a variedade de produtos que os usuários da organização verão na loja, mas como as organizações B2B também usam `productClusterId` na pesquisa, ao acessar páginas de resultados de pesquisa personalizadas configuradas com um `productClusterId` diferente, os resultados da pesquisa mostram produtos de ambas as coleções.

Além disso, se a organização tiver mais de um `productClusterId` atribuído a ela, ao usar `productClusterId` como filtro na pesquisa, os produtos de todas as coleções atribuídas à organização serão exibidos.

## Simulação

**Cenário 1:** - Configure uma coleção de produtos para uma organização; - Crie uma página de resultados de pesquisa personalizada com um ID de coleção diferente no filtro `productClusterId`; - Faça login e acesse a página de resultados de pesquisa personalizada; os produtos de ambas as coleções são exibidos. **Cenário 2:**

- Configure mais de uma coleção de produtos para uma organização; - Crie uma página de resultados de pesquisa personalizada usando apenas um dos `productClusterId` como filtro; - Faça login e acesse a página de resultados de pesquisa personalizada; os produtos de todas as coleções registradas na organização serão exibidos.

## Workaround

Use `productClusterNames` como filtro para essas páginas de pesquisa em vez de `productClusterIds`.