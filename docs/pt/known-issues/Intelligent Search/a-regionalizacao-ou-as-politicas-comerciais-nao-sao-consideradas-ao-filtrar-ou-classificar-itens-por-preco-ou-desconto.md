---
title: 'A regionalização ou as políticas comerciais não são consideradas ao filtrar ou classificar itens por preço ou desconto'
slug: a-regionalizacao-ou-as-politicas-comerciais-nao-sao-consideradas-ao-filtrar-ou-classificar-itens-por-preco-ou-desconto
status: PUBLISHED
createdAt: 2025-09-18T17:34:02.397Z
updatedAt: 2025-09-18T17:34:02.397Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: regionalization-or-trade-policies-arent-considered-while-filtering-or-sorting-items-by-price-or-discount
locale: pt
kiStatus: Backlog
internalReference: 571101
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao usar a Pesquisa Inteligente (via PLP ou mesmo sua API) junto com a regionalização (regionId) ou a variação da política comercial, a classificação e a filtragem de itens por preço não funcionam corretamente.

Para esse módulo, a regionalização e as políticas comerciais podem filtrar/classificar apenas pelas informações de disponibilidade/estoque, sem considerar as variações de preço - que estão sempre vinculadas ao mesmo preço indexado. Os preços atualizados são descobertos durante a renderização do conteúdo (portanto, estão sempre corretos), mas não afetam os filtros e/ou a classificação (feitos em um momento anterior), o que se estende às promoções e aos filtros de faixa de preço.

Isso também é um problema para itens disponíveis somente em um contexto regionalizado. Se o "vendedor 1" e suas opções abrangentes de WL estiverem sem estoque, o item não terá um preço (será zero), o que descarta o item dos filtros ou pode colocá-lo no final dos resultados.
## Simulação


Em uma loja com preços diferentes por vendedores WL (e usando regionalização) ou política comercial, ou com itens indisponíveis para o "vendedor 1", acesse qualquer PLP com uma dimensão filtrada/regionalizada pela dimensão aplicável enquanto classifica por preço - você perceberá que os preços dos produtos não serão classificados como esperado
## Workaround


Os filtros de regionalização e política comercial não estão preparados para trabalhar com variações de preço, portanto, não há soluções alternativas.

Para o cenário em que o item não está disponível para o "vendedor 1", é importante verificar se os vendedores abrangentes estão configurados corretamente, o que pode evitar o cenário - somente os itens amplamente indisponíveis seriam afetados.


