---
title: Regras de visual merchandising erroneamente estendidas a contextos mais amplos
slug: regras-de-visual-merchandising-erroneamente-estendidas-a-contextos-mais-amplos
status: PUBLISHED
createdAt: 2025-08-07T20:22:45.235Z
updatedAt: 2025-08-07T20:22:45.235Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: visual-merchandising-rules-wrongly-extendeded-to-broader-contexts
locale: pt
kiStatus: Backlog
internalReference: 1098688
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


As regras de visual merchandising são definidas para contextos específicos por meio da definição de filtros por atributos ou termos de pesquisa, mas os filtros não estão sendo limitados ao seu contexto exclusivo, gerando resultados de pesquisa inesperados e conflitos com regras de merchandising diferentes para outras páginas.

Para o contexto, os produtos fixados e ocultos executam a mesma ação que as ações promover e remover por ID de uma regra de merchandising manual.

O exemplo mais fácil é que a configuração para uma categoria também aplicará modificadores às suas subcategorias.
## Simulação



- Considere a árvore de categorias "roupas > crianças > camiseta".
- Crie uma regra de comercialização visual para classificar manualmente (fixar) alguns itens na categoria "crianças" e na subcategoria "camiseta".
- A subcategoria "camiseta" não aplicará a classificação esperada corretamente, pois estará sob a influência da regra de comercialização da categoria "crianças".


## Workaround


É possível criar o mesmo tipo de regra por meio do editor manual, onde você pode definir a opção "acionador exclusivo", evitando completamente a sobreposição entre regras diferentes.


