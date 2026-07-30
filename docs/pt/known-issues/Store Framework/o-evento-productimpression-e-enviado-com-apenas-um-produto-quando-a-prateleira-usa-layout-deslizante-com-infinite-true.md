---
title: 'O evento productImpression é enviado com apenas um produto quando a prateleira usa layout deslizante com infinite: true.'
slug: o-evento-productimpression-e-enviado-com-apenas-um-produto-quando-a-prateleira-usa-layout-deslizante-com-infinite-true
status: PUBLISHED
createdAt: 2026-07-30T20:41:19.000Z
updatedAt: 2026-07-30T20:42:22.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: productimpression-event-is-sent-with-only-one-product-when-the-shelf-uses-sliderlayout-with-infinite-true
locale: pt
kiStatus: Backlog
internalReference: 1441580
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma prateleira de produtos é renderizada dentro de um `slider-layout` configurado com `infinite: true`, o evento de pixel `productImpression` é enviado com um único produto, mesmo que vários cartões de produtos estejam visíveis na tela simultaneamente. O comportamento esperado é um único evento contendo todos os produtos visíveis — por exemplo, quatro impressões nas posições 1 a 4 para uma prateleira que exibe quatro produtos por página.

Como resultado, os dados de impressões que chegam ao Google Analytics, Google Tag Manager e outros consumidores do evento são significativamente subnotificados para prateleiras configuradas como carrosséis infinitos. Apenas as impressões são afetadas; cliques em produtos e outros eventos de e-commerce funcionam normalmente.

Aplicativo afetado: `vtex.product-list-context`. Ele é uma dependência de `vtex.product-summary`, portanto, o comportamento ocorre em qualquer prateleira ou carrossel de produtos criado com os blocos do tema padrão da loja.

## Simulação

1. Em um tema de loja, configure uma prateleira de produtos (um bloco `product-summary-list` / prateleira) dentro de um bloco `slider-layout`, com `infinite: true` e mais produtos do que o número exibido por página — por exemplo, 10 produtos com 4 por página.

2. Com o Google Tag Manager instalado, publique o tema e abra a página que contém a prateleira, rolando para baixo até ela para que os cartões de produto sejam renderizados na tela.
3. Inspecione os eventos de impressão enviados para o dataLayer:

4. Observe uma única entrada `productImpression` cujo array `ecommerce.impressions` contém apenas um produto, na posição `position: 1`, mesmo que quatro produtos estejam visíveis. Esperado: uma entrada contendo todos os quatro, nas posições de 1 a 4.
5. Altere `infinite` para `false` e ​​repita. O evento agora inclui corretamente todos os produtos visíveis.

## Workaround

Defina `infinite: false` no bloco `slider-layout` que envolve a prateleira. Isso foi verificado: com o loop infinito desativado, as impressões de todos os produtos visíveis são relatadas corretamente.

Observe que isso altera a navegação para os compradores — o carrossel para no último produto em vez de retornar ao primeiro. As lojas que dependem do comportamento de loop terão que escolher entre dados de impressão precisos e o carrossel infinito até que a correção seja lançada.