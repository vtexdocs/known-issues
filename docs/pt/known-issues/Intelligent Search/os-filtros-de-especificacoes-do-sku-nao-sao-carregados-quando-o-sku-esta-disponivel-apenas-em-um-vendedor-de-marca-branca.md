---
title: 'Os filtros de especificações do SKU não são carregados quando o SKU está disponível apenas em um vendedor de marca branca'
slug: os-filtros-de-especificacoes-do-sku-nao-sao-carregados-quando-o-sku-esta-disponivel-apenas-em-um-vendedor-de-marca-branca
status: PUBLISHED
createdAt: 2021-09-16T20:48:37.000Z
updatedAt: 2025-08-08T18:38:45.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sku-specification-filters-arent-loaded-when-the-sku-is-only-available-in-a-whitelabel-seller
locale: pt
kiStatus: Fixed
internalReference: 431888
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Desde uma atualização recente no comportamento da Pesquisa, os filtros de especificações de SKUs indisponíveis não são exibidos nas páginas de resultados da pesquisa.

Se a arquitetura de uma loja depender exclusivamente de vendedores de marca branca para a disponibilidade de produtos, os filtros de especificações também não serão exibidos, pois a disponibilidade desses vendedores não está sendo considerada nos filtros de pesquisa.

## Simulação

Tenha disponibilidade zero de produtos para um resultado de pesquisa específico (termo de pesquisa, departamento, marca etc.) na loja principal. Mesmo que a disponibilidade de um vendedor de marca branca esteja sendo exibida nas prateleiras, os filtros relacionados às especificações de SKU não aparecerão.

## Workaround

Tenha disponibilidade de produtos na loja principal. Dessa forma, todos os filtros de especificações de SKU estarão disponíveis.

Se isso não se adequar à operação da empresa, é possível personalizar a interface para não permitir que os clientes comprem itens do estoque principal.