---
title: 'Os resultados da pesquisa de SKUs independentes não consideram a disponibilidade regionalizada'
slug: os-resultados-da-pesquisa-de-skus-independentes-nao-consideram-a-disponibilidade-regionalizada
status: PUBLISHED
createdAt: 2025-12-26T19:01:37.369Z
updatedAt: 2025-12-26T19:01:37.369Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: detached-sku-search-results-not-considering-regionalized-availability
locale: pt
kiStatus: Backlog
internalReference: 1344487
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Para lojas regionalizadas em que os SKUs são destacados, os SKUs de produtos que estão sem estoque são removidos do resultado da pesquisa, mas isso não acontece.

As navegações regionalizadas podem retornar SKUs de falta de estoque porque um dos SKUs do produto está disponível em vendedores regulares ou de marca branca.
## Simulação


Considerando uma loja com dois vendedores e a seguinte matriz de disponibilidade para um produto específico:

- tamanho: pequeno; vendedor A: disponível; vendedor B: indisponível
- tamanho: grande; vendedor A: indisponível; vendedor B: indisponível

Em uma navegação com "regionId: seller A", o resultado da pesquisa retornará os SKUs "size:small" e "size:large"
## Workaround


N/A


