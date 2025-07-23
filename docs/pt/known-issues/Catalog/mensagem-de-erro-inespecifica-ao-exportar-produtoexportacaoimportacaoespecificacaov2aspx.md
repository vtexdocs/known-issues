---
title: 'Mensagem de erro inespecífica ao exportar ProdutoExportacaoImportacaoEspecificacaoV2.aspx'
id: 3rtDeX0QppmbXOvuCtC1Lr
status: PUBLISHED
createdAt: 2022-03-22T13:09:32.153Z
updatedAt: 2024-02-16T20:29:49.944Z
publishedAt: 2024-02-16T20:29:49.944Z
firstPublishedAt: 2022-03-22T13:09:32.886Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: unspecific-error-message-when-exporting-produtoexportacaoimportacaoespecificacaov2aspx
locale: pt
kiStatus: No Fix
internalReference: 314227
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, a mensagem de erro da interface ProdutoExportacaoImportacaoEspecificacaoV2.aspx no catálogo de importação/exportação, quando um usuário está tentando exportar uma ficha de especificação de produto e não há produtos em uma determinada categoria (mas há especificações registradas), não apontam a origem do problema.

A mensagem mostrada é uma exceção muito genérica:


    Ocorreu algo inesperado: O índice estava fora de alcance. Deve ser não-negativo e menor do que o tamanho da coleção. Nome do parâmetro: índice


Deve ser algo nas linhas de:

    "Não há produtos nesta categoria".





## Simulação


1) Acesse a interface ProdutoExportacaoImportacaoEspecificacaoV2.aspx.
2) Exportar uma ficha de especificação do produto que tenha campos de produtos registrados, mas sem produtos.




## Workaround


Não há soluções.

