---
title: 'Promoções que resultam em uma classificação/filtragem incorreta por preço ou desconto'
slug: promocoes-que-resultam-em-uma-classificacaofiltragem-incorreta-por-preco-ou-desconto
status: PUBLISHED
createdAt: 2023-08-25T21:38:33.000Z
updatedAt: 2023-11-10T00:44:05.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: promotions-resulting-in-wrong-sortingfiltering-by-price-or-discount
locale: pt
kiStatus: Backlog
internalReference: 888304
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As listas de produtos e os resultados de pesquisa podem ser mal ordenados ou filtrados ao usar a ordenação ou filtragem por preço ou desconto, caso haja preços desatualizados dos itens no nível do índice, mesmo que a loja exiba o preço correto.

A classificação dos produtos é sempre baseada em informações indexadas anteriormente (dados estáticos), enquanto a loja virtual geralmente recalcula todas as informações em tempo de execução (dados dinâmicos), de modo que os preços apresentados estão sempre corretos em relação ao carrinho.

Espera-se que toda alteração de preço (e até mesmo outras alterações) coloque os itens na fila para serem reindexados, de modo que o índice fique atualizado com as novas condições. O problema é que o módulo de Promoções não suporta o envio de notificações ao serviço de indexação quando uma promoção começa ou termina, resultando ocasionalmente em preços desatualizados dos itens, onde o módulo de Pesquisa não consegue classificar/filtrar os itens corretamente em comparação com os preços em tempo real.

Qualquer ação que reindexe as condições comerciais do item (como alterações de estoque) também atualizará organicamente seu preço considerando a promoção, eventualmente mascarando o problema para alguns itens.

Observação: lojas que usam "simulationBehavior=skip" não verão divergências entre a classificação de itens e os filtros aplicados na PLP, já que esse parâmetro resulta na renderização de "dados estáticos" ali, mas elas aparecerão ao comparar o mesmo item na PLP com sua PDP, que funciona fixamente como um "simulationBehavior=default", recuperando informações atualizadas em tempo de execução.

## Simulação

A maneira mais fácil de ver os efeitos desse problema é ter uma lista de produtos ordenados pelo preço mais baixo, criar uma promoção para um produto no meio da lista e observar que sua ordenação não muda após ativar a promoção, mesmo quando ele fica mais barato do que outros produtos.

## Workaround

N/A