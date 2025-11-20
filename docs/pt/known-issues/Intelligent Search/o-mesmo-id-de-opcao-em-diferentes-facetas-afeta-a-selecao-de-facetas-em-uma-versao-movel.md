---
title: 'O mesmo ID de opção em diferentes facetas afeta a seleção de facetas em uma versão móvel'
slug: o-mesmo-id-de-opcao-em-diferentes-facetas-afeta-a-selecao-de-facetas-em-uma-versao-movel
status: PUBLISHED
createdAt: 2025-11-20T19:15:58.297Z
updatedAt: 2025-11-20T19:15:58.297Z
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


Na versão móvel, os IDs de caixa de seleção para opções de faceta em um PLP não são exclusivos em facetas diferentes quando as opções compartilham o mesmo valor (por exemplo, "1"). Isso faz com que a seleção seja aplicada à faceta errada.

Afeta apenas a versão **móvel** da Página de listagem de produtos. O desktop usa identificadores exclusivos e não apresenta o problema.
## Simulação



1. Na versão móvel do PLP, selecione um valor que seja o mesmo em outra faceta e atualize a página.
2. Limpe os filtros e atualize novamente.
3. Selecione o mesmo valor em outra faceta; observe que a seleção é aplicada à faceta anterior
## Workaround


N/A



