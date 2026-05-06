---
title: 'As opções "Texto indexado grande" e "Texto indexado" não são alteradas pela importação de especificações'
slug: as-opcoes-texto-indexado-grande-e-texto-indexado-nao-sao-alteradas-pela-importacao-de-especificacoes
status: PUBLISHED
createdAt: 2021-01-08T19:17:13.000Z
updatedAt: 2026-02-11T00:03:37.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: large-indexed-text-and-indexed-text-not-being-changed-by-specification-import
locale: pt
kiStatus: Fixed
internalReference: 322657
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, para todos os tipos de especificação de produto, os campos "`Texto indexado grande`" e "`Texto indexado`" não estão reconhecendo as alterações nos valores das especificações por meio da importação da Folha de Especificações do Produto.

## Simulação

1) Crie uma especificação de produto do tipo "`Texto indexado grande`" ou "`Texto indexado`".

2) Exporte uma Folha de Especificações do Produto de uma categoria na qual essa especificação foi criada: em ProdutoExportacaoImportacaoEspecificacaoV2.aspx e tente alterar um valor de especificação.

3) Verifique o produto no qual você solicitou alterações; nenhuma foi feita.

## Workaround

Usar outros tipos de texto, como "`Texto Grande`" ou "`Texto`"