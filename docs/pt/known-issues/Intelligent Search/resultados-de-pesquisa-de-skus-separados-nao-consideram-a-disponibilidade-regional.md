---
title: 'Resultados de pesquisa de SKUs separados não consideram a disponibilidade regional.'
slug: resultados-de-pesquisa-de-skus-separados-nao-consideram-a-disponibilidade-regional
status: PUBLISHED
createdAt: 2025-12-26T22:00:45.000Z
updatedAt: 2026-09-22T16:53:47.000Z
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

Para lojas regionalizadas onde os SKUs estão desanexados, os SKUs de produtos que estão fora de estoque são removidos dos resultados da busca, mas isso não acontece.

Navegações regionalizadas podem retornar SKUs fora de estoque porque um dos SKUs do produto está disponível em vendedores regulares ou de marca branca.

## Simulação

Considerando uma loja com dois vendedores e a seguinte matriz de disponibilidade para um produto específico:

- tamanho: pequeno; vendedor A: disponível; vendedor B: indisponível
- tamanho: grande; vendedor A: indisponível; vendedor B: indisponível

Em uma navegação com "regionId: vendedor A", o resultado da busca retornará os SKUs "tamanho:pequeno" e "tamanho:grande".

## Workaround

N/A