---
title: 'Deslizar a imagem do produto após ampliar não reverte o zoom, causando problemas de exibição'
slug: deslizar-a-imagem-do-produto-apos-ampliar-nao-reverte-o-zoom-causando-problemas-de-exibicao
status: PUBLISHED
createdAt: 2021-12-20T18:53:33.000Z
updatedAt: 2024-01-29T18:05:04.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: swiping-productimage-after-zooming-in-does-not-revert-the-zoom-causing-display-issues
locale: pt
kiStatus: Backlog
internalReference: 491180
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao usar o componente `product-image` do vtex.store-components, quando se desliza uma imagem para o lado após clicar nela para ampliar, a primeira imagem permanece ampliada, causando problemas de renderização quando o usuário volta a ela.

## Simulação

Em uma página de detalhes do produto (PDP) que utilize o componente `product-image` do vtex.store-components, acesse a versão móvel de um produto com pelo menos duas imagens.
Clique para ampliar a primeira imagem e, em seguida, deslize para a próxima.
Clique para ampliar a segunda e deslize de volta para a primeira.
Fazer isso repetidamente acabará causando alguns problemas de exibição na imagem atualmente ampliada.
Clicar na imagem novamente para diminuir o zoom a redefine de volta ao normal.

## Workaround

Use as setas para navegar entre as imagens e reduzir a chance de os usuários optarem por deslizar.

Defina a propriedade "zoomMode": "hover" ou "zoomMode": "open-modal". Isso impede o deslizamento quando a imagem está ampliada, mas altera ligeiramente o comportamento.