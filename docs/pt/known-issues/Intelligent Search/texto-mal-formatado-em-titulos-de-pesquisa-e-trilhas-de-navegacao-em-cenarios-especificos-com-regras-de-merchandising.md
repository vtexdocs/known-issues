---
title: 'Texto mal formatado em títulos de pesquisa e trilhas de navegação em cenários específicos com regras de merchandising'
slug: texto-mal-formatado-em-titulos-de-pesquisa-e-trilhas-de-navegacao-em-cenarios-especificos-com-regras-de-merchandising
status: PUBLISHED
createdAt: 2024-03-13T20:52:16.000Z
updatedAt: 2024-03-13T20:52:16.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: badly-formatted-text-for-search-titles-and-breadcrumbs-in-specific-scenarios-with-merchandising-rules
locale: pt
kiStatus: Backlog
internalReference: 999476
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Algumas páginas de resultados de pesquisa ocultam os filtros aplicados — já que fazem parte da própria página, sendo definidos como "initialAttributes" — para destacar os filtros adicionais que podem ser aplicados. Nesses casos, os valores do título da página e da trilha de navegação são basicamente definidos pelo primeiro produto da página.

Regras de merchandising que colocam produtos de diferentes contextos nas primeiras posições de uma página afetam essa string. Quando os “initialAttributes” da página não correspondem a nenhum dos atributos do primeiro produto, como alternativa, esses textos são definidos pelo slug – um texto simplificado sem letras maiúsculas, diacríticos ou quaisquer outros caracteres especiais.

Esteja ciente de que esse tipo de regra de merchandising pode ser uma prática inadequada.

## Simulação

- Considere uma categoria com a árvore “Alimentos > Frutas > Maçãs e Peras”, que se traduz como “Maçãs e Peras” em português (para termos diacríticos/acentos e um exemplo mais claro);
- Adicione um produto de uma árvore de categorias diferente por meio de uma Regra de Merchandising, como um cortador da categoria “Cozinha > Acessórios > Cortadores” para a categoria “Alimentos > Frutas”;
- Como o primeiro produto na categoria “Maçãs e Peras” será esse cortador, o título da página e a trilha de navegação serão apresentados como “Maçãs e Peras”.

## Workaround

N/A