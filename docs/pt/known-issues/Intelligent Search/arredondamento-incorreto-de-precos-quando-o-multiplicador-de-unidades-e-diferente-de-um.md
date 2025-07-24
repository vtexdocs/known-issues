---
title: Arredondamento incorreto de preços quando o multiplicador de unidades é diferente de um
slug: arredondamento-incorreto-de-precos-quando-o-multiplicador-de-unidades-e-diferente-de-um
status: PUBLISHED
createdAt: 2025-07-24T17:38:14.226Z
updatedAt: 2025-07-24T17:38:14.226Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: incorrect-price-rounding-when-unit-multiplier-is-different-from-one
locale: pt
kiStatus: Backlog
internalReference: 1258875
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O Intelligent Search pode recuperar o preço de um produto com mais de duas casas decimais quando o multiplicador de unidades for diferente de 1.

Por exemplo, uma unidade de um produto custa US$ 69,26, sendo que o multiplicador de unidades é 85.

Portanto, o cálculo que o Intelligent Search faz, quando o multiplicador de unidades é diferente de 1, resulta em um preço de US$ 0,815.

Como o preço resultou em um preço com três casas decimais, quando arredondado pelo `vtex.format-currency`, o arredondamento do preço diverge, resultando em US$ 0,82 em vez de US$ 0,81, que é o preço mostrado na simulação de checkout.

Esse preço arredondado está sendo usado para calcular o preço do componente. Como ele é arredondado antes do cálculo, o preço final está incorreto.
## Simulação


Em um contexto de pesquisa, carregue um produto que tenha um multiplicador de unidades diferente de 1 e cujo unitMultiplier*price resulte em um número com mais de 2 casas decimais.
## Workaround


N/A


