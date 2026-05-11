---
title: 'A função "Pesquisa inteligente de sinônimos" não recria sinônimos excluídos'
slug: a-funcao-pesquisa-inteligente-de-sinonimos-nao-recria-sinonimos-excluidos
status: PUBLISHED
createdAt: 2025-04-15T17:30:12.000Z
updatedAt: 2026-05-11T17:51:45.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-synonyms-does-not-recreate-deleted-synonyms
locale: pt
kiStatus: Fixed
internalReference: 1211321
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A função "Sinônimos de Pesquisa Inteligente" não recria um sinônimo após sua exclusão.

Esse comportamento ocorre ao criar ou importar um sinônimo que já foi excluído.

## Simulação

Siga as etapas a seguir para simular o cenário:


1. Exclua um sinônimo.
2. Em seguida, tente reimportar/recriar o sinônimo.


O Intelligent Search Synonyms recarregará a página sem criar o sinônimo.

## Workaround

N/A