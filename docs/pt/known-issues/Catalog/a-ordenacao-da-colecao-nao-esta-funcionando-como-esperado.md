---
title: 'A ordenação da coleção não está funcionando como esperado'
slug: a-ordenacao-da-colecao-nao-esta-funcionando-como-esperado
status: PUBLISHED
createdAt: 2022-01-12T14:03:18.000Z
updatedAt: 2023-05-12T14:36:54.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: collection-ordering-not-working-as-expected
locale: pt
kiStatus: Fixed
internalReference: 502409
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

No recurso Coleções (Beta), deveríamos poder alterar a ordem dos produtos dentro de uma coleção usando a função "Mover para a posição":

https://help.vtex.com/tutorial/creating-collections-beta--yJBHqNMViOAnnnq4fyOye

No entanto, esse recurso apresenta falhas intermitentes e nem sempre funciona corretamente.

## Simulação

- Acesse a página de configurações de qualquer coleção: `.myvtex.com/admin/collections`
- Tente alterar a ordem de um produto dentro da coleção;
- Aguarde até que o produto seja reindexado automaticamente com a nova ordem na coleção.

## Workaround

Não há solução alternativa no Collections (Beta), mas é possível definir manualmente a ordem dos produtos em coleções criadas através do CMS legado (Portal) com algumas restrições:
https://help.vtex.com/en/known-issues/manual-sorting-of-collections-doesnt-work-as-expected--aGTNVDT6LKKoWuSceQWs0