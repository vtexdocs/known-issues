---
title: 'Amazon O mapeamento de categorias via XLS não é reprocessado para contas com mais de 10.000 sugestões pendentes.'
slug: amazon-o-mapeamento-de-categorias-via-xls-nao-e-reprocessado-para-contas-com-mais-de-10000-sugestoes-pendentes
status: PUBLISHED
createdAt: 2026-07-22T20:14:59.000Z
updatedAt: 2026-07-22T20:14:59.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-category-mapping-via-xls-not-reprocessed-for-accounts-with-more-than-10000-pending-suggestions
locale: pt
kiStatus: Backlog
internalReference: 1438301
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As atualizações de mapeamento de categorias enviadas por meio de planilha (XLS) nem sempre são reprocessadas automaticamente para contas com um grande volume de sugestões pendentes. Alguns SKUs permanecem como "não mapeados" na tela de Ofertas Recebidas, mesmo após a planilha de mapeamento ter sido atualizada corretamente pelo marketplace, enquanto outros SKUs na mesma conta são processados ​​normalmente.

## Simulação

1. A conta do vendedor/marketplace tem o mapeamento de categorias gerenciado por meio de upload de XLS.

2. A conta tem um grande volume de itens/ofertas com mapeamento pendente.

3. O marketplace atualiza a planilha de mapeamento de categorias corretamente.

4. Alguns SKUs são reprocessados ​​corretamente, mas outros permanecem como "não mapeados" — de forma inconsistente, dependendo da posição do item no lote de processamento interno, mesmo que os dados de mapeamento estejam corretos.

## Workaround

N/A