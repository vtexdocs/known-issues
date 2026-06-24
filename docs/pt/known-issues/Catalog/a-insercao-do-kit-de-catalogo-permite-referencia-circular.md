---
title: 'A inserção do kit de catálogo permite referência circular.'
slug: a-insercao-do-kit-de-catalogo-permite-referencia-circular
status: PUBLISHED
createdAt: 2026-06-24T18:49:40.000Z
updatedAt: 2026-06-24T18:49:40.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-kit-insertion-allows-circular-reference
locale: pt
kiStatus: Backlog
internalReference: 1425901
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, ao criar um kit (skukit) na interface do catálogo, é possível inserir um kit que referencia a si mesmo como um componente.

Por exemplo, digamos que um kit com o ID 123 foi criado.

É possível adicionar outros SKUs como componentes, mas também o próprio kit (pai = 123, componente = 123), o que cria efeitos colaterais não mapeados.

Até o momento, o efeito colateral conhecido é que isso impede o carregamento de dados no aplicativo do portal, como o skuJSON no vtexJS.

## Simulação

1 - Crie um SKU marcado como um kit (pacote) https://help.vtex.com/en/docs/tutorials/bundle-registration

2 - Adicione, na aba de componentes, o próprio ID do SKU como um componente

3 - Na página do produto, abra as ferramentas de desenvolvedor e verifique o console. Procure pela propriedade `vtexjs.skujson` - ela deveria retornar dados, mas retorna nulo.

## Workaround

-