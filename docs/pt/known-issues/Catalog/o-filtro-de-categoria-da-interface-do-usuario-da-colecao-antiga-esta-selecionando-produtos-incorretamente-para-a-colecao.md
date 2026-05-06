---
title: 'O filtro de categoria da interface do usuário da coleção antiga está selecionando produtos incorretamente para a coleção'
slug: o-filtro-de-categoria-da-interface-do-usuario-da-colecao-antiga-esta-selecionando-produtos-incorretamente-para-a-colecao
status: PUBLISHED
createdAt: 2022-06-02T14:48:34.000Z
updatedAt: 2022-12-20T16:36:59.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: legacy-collection-ui-category-filter-selecting-products-wrongly-to-the-collection
locale: pt
kiStatus: Backlog
internalReference: 590934
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Eventualmente, dependendo do número de produtos que temos dentro de uma categoria, se selecionarmos os filtros de categorias na interface de usuário (UI) de coleção legada, ela poderá retornar produtos que não pertencem a essas categorias.

## Simulação

- Crie uma coleção usando a interface de usuário (UI) de coleção legada;
- Insira produtos usando o filtro de categorias; as categorias devem ter um grande número de produtos.
- Às vezes, a coleção pode conter produtos que não pertencem a essa categoria.

## Workaround

- Na interface de usuário (UI) de coleção legada, crie um filtro para remover a categoria desse produto.