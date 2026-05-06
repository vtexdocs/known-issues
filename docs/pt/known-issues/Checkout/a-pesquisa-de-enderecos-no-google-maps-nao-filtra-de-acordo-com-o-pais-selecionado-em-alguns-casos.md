---
title: 'A pesquisa de endereços no Google Maps não filtra de acordo com o país selecionado em alguns casos'
slug: a-pesquisa-de-enderecos-no-google-maps-nao-filtra-de-acordo-com-o-pais-selecionado-em-alguns-casos
status: PUBLISHED
createdAt: 2023-01-04T20:57:51.000Z
updatedAt: 2023-01-04T21:02:40.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: google-maps-address-search-not-filtering-by-the-selected-country-in-some-scenarios
locale: pt
kiStatus: Backlog
internalReference: 727408
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As pesquisas de endereços no Google Maps para países sem regras internas específicas não são filtradas para retornar apenas os resultados desse país específico.

## Simulação

Considerando o Panamá como um país que se enquadra nessa condição interna, ao estar no modo de geolocalização e pesquisar por “calle”, o componente exibe endereços da Espanha em vez de filtrar estritamente os resultados para endereços do Panamá.

## Workaround

N/A