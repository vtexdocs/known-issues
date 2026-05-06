---
title: 'A faixa de preço na API do Facets não corresponde aos resultados da pesquisa'
slug: a-faixa-de-preco-na-api-do-facets-nao-corresponde-aos-resultados-da-pesquisa
status: PUBLISHED
createdAt: 2024-03-08T22:36:28.000Z
updatedAt: 2024-03-08T22:36:28.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: price-range-at-the-facets-api-doesnt-correspond-to-the-search-results
locale: pt
kiStatus: Backlog
internalReference: 997121
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As faixas de preço da API de facetas (“Obter lista das facetas possíveis para uma determinada consulta”) podem variar entre retornar intervalos de valores “de” e “até” com preços arredondados e os preços mínimo e máximo entre os resultados da pesquisa.

Embora os preços arredondados gerem uma melhor experiência do usuário ao apresentar uma lista de faixas de preço ao comprador, não é recomendável usá-los como um “controle deslizante” de preço.

Além disso, como os preços mínimo e máximo são aplicados posteriormente, as faixas de preço como “faixas” em uma pesquisa que já aplica um filtro de preço ficam fora dos limites em relação aos preços especificados.

## Simulação

Usando a API, faça uma solicitação com e sem um filtro de preço como "/price/100:500" e observe as faixas de preço retornadas (de/até) no objeto "values" para a faceta com tipo "PRICERANGE".

## Workaround

N/A