---
title: As especificações do produto/SKU têm prioridade no título da página
slug: as-especificacoes-do-produtosku-tem-prioridade-no-titulo-da-pagina
status: PUBLISHED
createdAt: 2025-08-12T18:37:37.408Z
updatedAt: 2025-08-12T18:37:37.408Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: productsku-specifications-taking-priority-on-the-page-title
locale: pt
kiStatus: Backlog
internalReference: 1089440
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Espera-se que o título da página seja baseado nos últimos filtros ou nos filtros iniciais. Os filtros das especificações de produto/SKU são sempre definidos como o último da trilha de navegação, que ocorre como o título da página.

No caso de uma pesquisa de texto completo, o valor da especificação que for alfabeticamente menor que o termo pesquisado, mas o mais próximo desse termo pesquisado, terá prioridade como título. Por exemplo, se você pesquisar `jeans` e filtrar por `size=G` e depois `material=Chiffon`, o tamanho G terá prioridade como título da página.
## Simulação


Navegar em uma página como "/summer-2024?map=productclusternames" e aplicar qualquer filtro que não seja uma especificação de SKU manterá o título da página como "Summer 2024", mas um filtro como "size=M" terá prioridade e o título será mostrado como "M"
## Workaround


N/A


