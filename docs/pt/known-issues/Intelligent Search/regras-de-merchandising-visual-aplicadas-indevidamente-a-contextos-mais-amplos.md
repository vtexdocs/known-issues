---
title: 'Regras de merchandising visual aplicadas indevidamente a contextos mais amplos'
slug: regras-de-merchandising-visual-aplicadas-indevidamente-a-contextos-mais-amplos
status: PUBLISHED
createdAt: 2024-09-14T01:19:19.000Z
updatedAt: 2026-05-29T19:06:46.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: visual-merchandising-rules-wrongly-extended-to-broader-contexts
locale: pt
kiStatus: Backlog
internalReference: 1098688
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As regras de merchandising visual são definidas para contextos específicos por meio da definição de filtros com base em atributos ou termos de pesquisa; no entanto, esses filtros não se limitam exclusivamente ao seu contexto, gerando resultados de pesquisa inesperados e entrando em conflito com regras de merchandising diferentes aplicadas a outras páginas.

Para contextualizar, os produtos fixados e ocultos realizam a mesma ação que as ações “promover” e “remover por ID” de uma regra de merchandising manual.

O exemplo mais simples é que, ao configurá-la para uma categoria, os modificadores também serão aplicados às suas subcategorias.

## Simulação

- Considere a árvore de categorias “roupas > crianças > camiseta”.
- Crie uma regra de merchandising visual para classificar manualmente (fixar) alguns itens tanto na categoria “crianças” quanto na subcategoria “camiseta”.
- A subcategoria “camiseta” não aplicará a classificação esperada corretamente, pois estará sob a influência da regra de merchandising da categoria “crianças”

## Workaround

É possível criar o mesmo tipo de regra por meio do editor manual, onde você pode definir a opção “gatilho exclusivo”, evitando completamente a sobreposição entre regras diferentes.