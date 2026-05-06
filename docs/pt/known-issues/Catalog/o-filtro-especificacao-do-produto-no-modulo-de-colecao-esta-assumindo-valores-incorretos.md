---
title: 'O filtro "Especificação do produto" no Módulo de Coleção está assumindo valores incorretos'
slug: o-filtro-especificacao-do-produto-no-modulo-de-colecao-esta-assumindo-valores-incorretos
status: PUBLISHED
createdAt: 2023-10-27T01:22:29.000Z
updatedAt: 2025-09-03T17:09:47.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-specification-filter-on-collection-module-assuming-incorrect-values
locale: pt
kiStatus: Backlog
internalReference: 926593
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

No Módulo de Coleção, o filtro "Especificações do produto" não está funcionando corretamente quando a especificação é do tipo "Texto" ou "Texto extenso". Ao selecionar esse tipo de especificação, é exibida uma caixa de texto para inserir os valores possíveis, separados por vírgula, tabulação ou tecla Enter. No entanto, ao digitar apenas um caractere, o sistema interpreta isso como um valor, mesmo sem a separação dos termos.

## Simulação

1. Crie uma Especificação do Produto com o tipo "Texto"
2. Vá para o Módulo de Coleção, clique no filtro "Mais", selecione "Especificação do Produto"
3. Localize a especificação que você criou e digite qualquer coisa; observe que mesmo um único caractere se tornará um termo de pesquisa

## Workaround

Continue digitando até que o termo esteja completo e, em seguida, exclua os termos incorretos