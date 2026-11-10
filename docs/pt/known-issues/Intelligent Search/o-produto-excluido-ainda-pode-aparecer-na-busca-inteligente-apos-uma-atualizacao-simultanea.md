---
title: 'O produto excluído ainda pode aparecer na Busca Inteligente após uma atualização simultânea.'
slug: o-produto-excluido-ainda-pode-aparecer-na-busca-inteligente-apos-uma-atualizacao-simultanea
status: PUBLISHED
createdAt: 2026-11-10T23:21:02.000Z
updatedAt: 2026-11-10T23:22:03.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: deleted-product-may-still-appears-in-intelligent-search-after-a-concurrent-update
locale: pt
kiStatus: Backlog
internalReference: 1483590
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Produtos desativados ainda podem aparecer nos resultados da Busca Inteligente. Isso ocorre quando um produto ativo é salvo pouco antes de ser desativado. O histórico do indexador registra a exclusão como concluída, mas o produto permanece no índice de busca.

## Simulação

1. Atualize (salve) um produto no Catálogo.

2. Desative o mesmo produto logo após o salvamento. O salvamento e a desativação são processados ​​quase simultaneamente.

3. Verifique o histórico do indexador para o produto. Ele mostra a exclusão como concluída.

4. Busque o produto na Busca Inteligente usando seu ID.

**Comportamento esperado:** O produto não aparece na Busca Inteligente.

**Comportamento real:** O produto aparece na Busca Inteligente.

## Workaround

Abra um chamado para reindexar os produtos afetados.