---
title: 'API de pesquisa de catálogo limitada a 2500 resultados'
slug: api-de-pesquisa-de-catalogo-limitada-a-2500-resultados
status: PUBLISHED
createdAt: 2025-11-06T13:45:52.724Z
updatedAt: 2025-11-06T13:45:52.724Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-search-api-limited-to-2500-results
locale: pt
kiStatus: No Fix
internalReference: 891184
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao usar a API Catalog Search, o máximo de resultados obtidos é 2500, mesmo que haja mais produtos.
A paginação é de até 50 produtos e funciona corretamente até que o parâmetro _from atinja o número de 2500. Quando eles definem `_from` acima de 2500, obtêm `"O parâmetro _from não pode ser maior que 2500."`
## Simulação


Essa situação pode ocorrer ao solicitar a API usando o postman ou ao usar o catálogo compartilhado nas contas do portal do vendedor (ele usa a mesma API na interface do usuário).

Ao usar a API: - faça a solicitação usando o paramenter `_from` acima 2500
Ao usar o catálogo compartilhado: - pule a paginação na guia de produtos disponíveis até chegar a 2500. As próximas páginas não serão atualizadas e mostrarão os mesmos resultados que a página anterior a 2500
## Workaround


N/A



