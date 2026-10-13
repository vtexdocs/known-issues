---
title: 'Filtros por especificações de SKU, sem considerar a disponibilidade regional.'
slug: filtros-por-especificacoes-de-sku-sem-considerar-a-disponibilidade-regional
status: PUBLISHED
createdAt: 2024-06-05T23:52:38.000Z
updatedAt: 2026-10-13T18:59:09.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filters-by-sku-specifications-not-considering-regionalized-availability
locale: pt
kiStatus: Backlog
internalReference: 1045111
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Filtrar a busca por uma especificação de SKU também aplicará um filtro por disponibilidade de SKU, removendo produtos cuja variação selecionada esteja indisponível em estoque, mas isso não se aplica a lojas regionalizadas.

Navegações regionalizadas podem retornar produtos cuja variação filtrada não esteja disponível, pois a disponibilidade indexada para uma especificação de SKU é baseada em todos os vendedores regulares e de marca branca.

## Simulação

Considere uma loja com dois vendedores e a seguinte matriz de disponibilidade para um produto específico:

- tamanho: pequeno; vendedor A: disponível; vendedor B: indisponível
- tamanho: grande; vendedor A: indisponível; vendedor B: indisponível

Em uma navegação com "regionId: vendedor B", filtrar por "tamanho: pequeno" retornará o produto (como se estivesse disponível) e "tamanho: grande" ocultará o produto (porque está indisponível em todos os lugares).

## Workaround

N/A