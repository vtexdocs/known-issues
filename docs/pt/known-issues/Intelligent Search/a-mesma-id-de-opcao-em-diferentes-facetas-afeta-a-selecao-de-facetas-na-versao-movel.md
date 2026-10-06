---
title: 'A mesma ID de opção em diferentes facetas afeta a seleção de facetas na versão móvel.'
slug: a-mesma-id-de-opcao-em-diferentes-facetas-afeta-a-selecao-de-facetas-na-versao-movel
status: PUBLISHED
createdAt: 2025-11-20T22:10:15.000Z
updatedAt: 2026-10-06T17:20:29.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: same-option-id-accross-different-facets-affecting-the-facet-selection-in-a-mobile-version
locale: pt
kiStatus: Backlog
internalReference: 1328394
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Na versão mobile, os IDs das caixas de seleção para opções de filtro em uma Página de Listagem de Produtos (PLP) não são exclusivos entre diferentes filtros quando as opções compartilham o mesmo valor (por exemplo, “1”). Isso faz com que a seleção seja aplicada ao filtro errado.

Afeta apenas a versão **mobile** da Página de Listagem de Produtos. A versão para desktop usa identificadores exclusivos e não apresenta esse problema.

## Simulação

1. Na versão mobile da PLP, selecione um valor que seja o mesmo em outro filtro e atualize a página.

2. Limpe os filtros e atualize novamente.

3. Selecione o mesmo valor em outro filtro; observe que a seleção é aplicada ao filtro anterior.

## Workaround

N/A