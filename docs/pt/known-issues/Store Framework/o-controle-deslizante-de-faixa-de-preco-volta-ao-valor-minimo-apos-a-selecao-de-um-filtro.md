---
title: 'O controle deslizante de faixa de preço volta ao valor mínimo após a seleção de um filtro'
slug: o-controle-deslizante-de-faixa-de-preco-volta-ao-valor-minimo-apos-a-selecao-de-um-filtro
status: PUBLISHED
createdAt: 2023-06-13T19:19:09.000Z
updatedAt: 2023-11-08T13:34:38.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: price-range-slider-defaults-to-minimum-value-after-selecting-a-filter
locale: pt
kiStatus: Backlog
internalReference: 843442
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Trata-se de um intervalo de preços, representado por um controle deslizante com dois seletores (marcadores): um para o valor mínimo e outro para o valor máximo, para que ele saiba onde se posicionar no controle deslizante.
Ao aplicar um filtro de marca, o seletor não ajusta seu valor mínimo aos valores mínimos da marca, mantendo o valor mínimo padrão, e o marcador aparece fora do intervalo.

## Simulação

1 - Acesse uma página de Categoria e observe o filtro de faixa de preço e seus valores mínimo e máximo.
2 - Selecione um filtro marcando-o à esquerda (categoria 2/3/4)
3 - Com o filtro aplicado, observe que o controle deslizante de faixa de preço manterá o valor mínimo como antes e ficará fora da faixa do controle deslizante.

 ![](https://vtexhelp.zendesk.com/attachments/token/RuhwOHLwbPslKpeZ4VUq4Y995/?name=image.png)

Filtro com o comportamento descrito para o valor mínimo.

## Workaround

Não há solução alternativa disponível.