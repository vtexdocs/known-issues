---
title: 'API de pesquisa do catálogo limitada a 2.500 resultados'
slug: api-de-pesquisa-do-catalogo-limitada-a-2500-resultados
status: PUBLISHED
createdAt: 2023-08-31T17:59:19.000Z
updatedAt: 2025-11-06T16:45:15.000Z
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

Ao utilizar a API de Pesquisa do Catálogo, o número máximo de resultados obtidos é 2.500, mesmo que haja mais produtos.
A paginação é de até 50 produtos e funciona corretamente até que o parâmetro _from atinja o número 2.500. Quando se define `_from` acima de 2.500, é exibida a mensagem `"O parâmetro _from não pode ser maior que 2.500."`

## Simulação

Essa situação pode ocorrer ao solicitar a API usando o Postman ou ao usar o catálogo compartilhado nas contas do portal do vendedor (ele usa a mesma API na interface do usuário).

Ao usar a API: - faça a solicitação usando o parâmetro `_from` acima de 2500
Ao usar o Catálogo Compartilhado: - pule a paginação na guia de produtos disponíveis até chegar a 2500. As próximas páginas não serão atualizadas e mostrarão os mesmos resultados da página anterior a 2500.

## Workaround

N/A