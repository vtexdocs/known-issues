---
title: Os filtros de especificação de SKU não são carregados quando a SKU está disponível apenas em um vendedor Whitelabel
slug: os-filtros-de-especificacao-de-sku-nao-sao-carregados-quando-a-sku-esta-disponivel-apenas-em-um-vendedor-whitelabel
status: PUBLISHED
createdAt: 2025-08-08T15:39:20.716Z
updatedAt: 2025-08-08T15:39:20.716Z
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


Desde uma atualização recente no comportamento de pesquisa, os filtros de especificação de SKUs indisponíveis não são exibidos nas páginas de resultados de pesquisa.

Se a arquitetura de uma loja depender exclusivamente de vendedores de marca branca para a disponibilidade do produto, os filtros de especificação também não serão exibidos, pois a disponibilidade dos vendedores não está sendo considerada nos filtros de pesquisa.
## Simulação


Ter disponibilidade zero de produtos para um resultado de pesquisa específico (termo de pesquisa, departamento, marca etc.) na loja principal. Mesmo que a disponibilidade de um vendedor de marca branca esteja sendo mostrada nas prateleiras, os filtros relacionados às especificações de SKU não serão exibidos
## Workaround


Tenha a disponibilidade do produto na loja principal. Dessa forma, todos os filtros de especificação de SKU estarão disponíveis.

Se isso não se adequar à operação da empresa, é possível personalizar a frente para não permitir que os clientes comprem itens do armazenamento principal.


