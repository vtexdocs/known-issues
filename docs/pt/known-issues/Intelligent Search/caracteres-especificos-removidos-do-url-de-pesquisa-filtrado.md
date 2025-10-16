---
title: Caracteres específicos removidos do URL de pesquisa filtrado
slug: caracteres-especificos-removidos-do-url-de-pesquisa-filtrado
status: PUBLISHED
createdAt: 2025-10-16T20:41:47.811Z
updatedAt: 2025-10-16T20:41:47.811Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: specific-characters-removed-from-the-filtered-search-url
locale: pt
kiStatus: Backlog
internalReference: 1196131
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Alguns caracteres especiais, como a vírgula, podem ser removidos do URL do filtro. Isso pode gerar uma colisão entre produtos com valores diferentes.
## Simulação



Dois produtos diferentes com um atributo Size e valores "2,5" e "25" usarão o mesmo URL: "/size/25".

Embora você possa ver os dois valores de filtro a serem selecionados na loja, eles resultarão nos mesmos produto
## Workaround


N/A


