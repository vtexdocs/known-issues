---
title: 'Filtra por especificações de SKU sem considerar a disponibilidade regionalizada'
id: 3CeTfHaNBfhrC5qIi3nTLh
status: PUBLISHED
createdAt: 2024-06-05T20:52:53.211Z
updatedAt: 2024-06-05T20:52:54.055Z
publishedAt: 2024-06-05T20:52:54.055Z
firstPublishedAt: 2024-06-05T20:52:54.055Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filters-by-sku-specifications-not-considering-regionalized-availability
locale: pt
kiStatus: Backlog
internalReference: 1045111
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A filtragem da pesquisa por uma especificação de SKU também aplicará um filtro por disponibilidade de SKU, removendo os produtos em que a variação selecionada estiver em falta, mas isso não se aplica a lojas regionalizadas.

As navegações regionalizadas podem retornar produtos em que a variação filtrada não está disponível porque a disponibilidade indexada para uma especificação de SKU é baseada em todos os vendedores regulares e de marca branca.

## Simulação


Considerando uma loja com dois vendedores e a seguinte matriz de disponibilidade para um produto específico:

- tamanho: pequeno; vendedor A: disponível; vendedor B: indisponível
- tamanho: grande; vendedor A: indisponível; vendedor B: indisponível

Em uma navegação com "regionId: seller B", a filtragem por "size: small" retornará o produto (como se ele estivesse disponível) e "size: large" ocultará o produto (porque ele não está disponível em todos os lugares)

## Workaround


N/A




