---
title: Preço sem impostos sendo considerado no minicarro
slug: preco-sem-impostos-sendo-considerado-no-minicarro
status: PUBLISHED
createdAt: 2025-10-16T20:58:23.175Z
updatedAt: 2025-10-16T20:58:23.175Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: price-without-taxes-being-considered-in-the-minicart
locale: pt
kiStatus: Backlog
internalReference: 1234933
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


No momento, não é possível exibir o preço do produto com impostos no contexto da lista do minicarro.
## Simulação



1. Adicione ao carrinho um produto que tenha impostos associados.
2. Abra o minicarro e observe os detalhes do produto.
3. Observe que os impostos adicionais não são exibidos, embora possam estar presentes e calculados no checkout
## Workaround


Só é possível adicionar o valor do imposto no campo de totalizadores.

Isso é configurado adicionando a opção "Tax" à propriedade `totalizersToShow` do bloco `checkout-summary.compact`:


      "checkout-summary.compact#minicart": { "children": ["summary-totalizers#minicart"], "props": { "totalizersToShow": ["Items", "Discounts", "Tax"] } }




