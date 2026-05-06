---
title: 'Índice de exportação de especificações do produto fora do intervalo'
slug: indice-de-exportacao-de-especificacoes-do-produto-fora-do-intervalo
status: PUBLISHED
createdAt: 2021-12-03T17:27:30.000Z
updatedAt: 2024-01-10T20:25:15.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-specification-export-index-out-of-range
locale: pt
kiStatus: Backlog
internalReference: 481095
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar exportar especificações de produto a partir da interface de usuário "Importação e Exportação", se houver algum valor nulo ou relação nula na categoria a ser exportada, o processo falhará com a mensagem "Índice fora do intervalo". Em outras palavras, a categoria deve ter registrado diretamente em seu nível um campo de produto, produtos e produtos com valores associados.

## Simulação

1) Acesse a interface de exportação de Especificações do Produto: ProdutoExportacaoImportacaoEspecificacaoV2.aspx

2) Clique com o botão direito do mouse em uma categoria na qual não haja nenhum campo de especificação do produto registrado

3) Será exibida uma mensagem de erro “Índice fora do intervalo”.

## Workaround

Exporte o pai ou o filho da categoria desejada

ou

Use a API de obtenção de especificações de produto para buscar dados: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-product-specification