---
title: 'O filtro de SKUs recebidas não funciona com caracteres especiais'
slug: o-filtro-de-skus-recebidas-nao-funciona-com-caracteres-especiais
status: PUBLISHED
createdAt: 2023-11-29T17:58:07.000Z
updatedAt: 2023-11-29T17:58:07.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: received-skus-filter-do-not-work-with-special-characters
locale: pt
kiStatus: Backlog
internalReference: 944533
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar filtrar os SKUs no módulo “SKUs recebidos”, o marketplace pode optar por filtrar por vendedor, categoria e/ou marca.

No entanto, ao selecionar uma marca que contenha caracteres especiais (como “&” ou “+”), o resultado é que não há SKUs nesse filtro, o que, na verdade, não está correto.

## Simulação

1. Filtre por uma das opções no módulo SKUs recebidos;
2. Selecione um valor com caractere especial;
3. Verifique se o resultado é “nenhum SKU”;
4. Agora pesquise pelo valor na barra de pesquisa e verifique se, de fato, existem alguns SKUs.

## Workaround

Não há solução alternativa para corrigir o filtro, mas usar a pesquisa pode trazer um resultado próximo dos SKUs.