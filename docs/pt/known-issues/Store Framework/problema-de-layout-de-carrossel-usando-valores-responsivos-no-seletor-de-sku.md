---
title: 'Problema de layout de carrossel usando valores responsivos no seletor de SKU'
slug: problema-de-layout-de-carrossel-usando-valores-responsivos-no-seletor-de-sku
status: PUBLISHED
createdAt: 2025-11-14T19:40:10.461Z
updatedAt: 2025-11-14T19:40:10.461Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: carousel-layout-issue-using-responsivevalues-in-sku-selector
locale: pt
kiStatus: Backlog
internalReference: 1217421
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O valor da largura do seletor de SKU é quebrado quando `displayMode="slider"` é usado para produtos indisponíveis e `sliderItemsPerPage` é configurado usando valores `min-width`.
## Simulação




1.

Instale o aplicativo vtex.responsive-values no espaço de trabalho ou configure um bloco responsive-values em seu tema para fornecer valores com base em pontos de interrupção de largura mínima.



2.

Configure a propriedade sliderItemsPerPage do seletor de SKU usando o padrão responsive-values:

Essa configuração usa pontos de interrupção de largura mínima e é baseada no aplicativo responsive-values, que não é oficialmente compatível com o seletor de SKU.



3.

Implemente essa configuração em uma página de detalhes do produto (PDP) que não tenha SKUs disponíveis (ou seja, todas as SKUs estão fora de estoque).



4.

Acesse o PDP no espaço de trabalho e confirme que o seletor de SKU é renderizado em displayMode="slider".



5. Observe o resultado: o carrossel de SKUs quebrará - os itens terão larguras incorretas, muitas vezes transbordando ou não sendo renderizados como esperado
## Workaround


Substitua a configuração `sliderItemsPerPage` usando as chaves `min-width` pelo formato esperado usando as chaves padrão `desktop`, `tablet` e `mobile`.



