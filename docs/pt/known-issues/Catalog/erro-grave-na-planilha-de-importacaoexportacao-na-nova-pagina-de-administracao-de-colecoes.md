---
title: 'Erro grave na planilha de importação/exportação na nova página de administração de coleções'
slug: erro-grave-na-planilha-de-importacaoexportacao-na-nova-pagina-de-administracao-de-colecoes
status: PUBLISHED
createdAt: 2021-04-29T14:00:56.000Z
updatedAt: 2023-12-12T21:08:07.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: large-importexport-spreadsheet-error-on-new-collections-admin
locale: pt
kiStatus: Fixed
internalReference: 362017
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, não é possível carregar itens no novo módulo de coleções usando uma lista com mais de 1.000 SKUs, pois o processo expira. É exibida uma mensagem de erro genérica:
"`Seu arquivo não foi importado. Tente importar este arquivo novamente.`"

## Simulação

1. Acesse o novo módulo de coleções
2. Selecione a guia "Importar"
3. Use uma planilha com mais de 1.000 SKUs (por exemplo, 300 produtos com 50 SKUs cada)
4. A importação irá gerar um tempo limite.

## Workaround

Faça o upload gradualmente usando planilhas menores, as coleções do CMS legado e/ou a API para inserir SKUs em subcoleções https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/subcollection/-subCollectionId-/stockkeepingunit