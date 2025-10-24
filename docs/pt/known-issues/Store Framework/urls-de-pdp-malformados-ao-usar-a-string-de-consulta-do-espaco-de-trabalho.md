---
title: 'URLs de PDP malformados ao usar a string de consulta do espaço de trabalho'
slug: urls-de-pdp-malformados-ao-usar-a-string-de-consulta-do-espaco-de-trabalho
status: PUBLISHED
createdAt: 2025-08-25T14:58:27.375Z
updatedAt: 2025-08-25T14:58:27.375Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: malformed-pdp-urls-when-using-workspace-querystring
locale: pt
kiStatus: Backlog
internalReference: 1281017
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao usar a string de consulta `?workspace=` no URL da loja, a navegação do PDP é interrompida porque o `render-runtime` inclui incorretamente o sinalizador `workspace` como parte do parâmetro de consulta `skuId`. Isso substitui `&` por `?`, resultando em URLs malformados e impedindo que os PDPs sejam carregados corretamente. Isso não acontece quando você opta por abrir a página em uma nova guia.
## Simulação



1. Acesse um URL de loja com uma string de consulta de espaço de trabalho, por exemplo: `?workspace=prod`
2. Passe o mouse sobre um produto - a visualização do URL do PDP mostra os parâmetros corretamente usando &.
3. Clique no produto - o URL substitui & por ?, fazendo com que o PDP não seja carregado.
4. A inspeção do console/runtime mostra que o render-runtime anexa o parâmetro do espaço de trabalho dentro da consulta skuId, corrompendo o URL final.

## Workaround


Não há solução confiável. Como medida temporária, os usuários podem abrir o produto em uma nova guia, o que preserva o URL correto, mas a navegação na mesma guia é interrompida.



