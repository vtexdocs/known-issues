---
title: 'Itens de benefícios não gerados em promoções com coleções associadas'
slug: itens-de-beneficios-nao-gerados-em-promocoes-com-colecoes-associadas
status: PUBLISHED
createdAt: 2024-02-21T15:08:45.000Z
updatedAt: 2024-02-21T15:08:45.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: items-in-benefits-not-generated-in-promotions-with-collections-associated
locale: pt
kiStatus: Backlog
internalReference: 985850
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao criar uma promoção com produtos/SKUs associados por meio de uma coleção, o productContext não está preparado para criar a matriz de itens dentro dos benefícios associados aos produtos da coleção

## Simulação

- Crie uma promoção
- Associe os produtos a essa promoção por meio de uma coleção
- Abra um dos produtos que deveria ter uma promoção
- Abra o console do seu navegador
- Verifique na extensão React Dev Tools se há productContextProvider
- Abra benefits.items; ele estará vazio ou conterá o SKU com o mesmo ID da coleção

## Workaround

A única maneira possível de preencher benefits.items é preencher todos os SKUs associados à promoção, em vez de um cluster/coleção