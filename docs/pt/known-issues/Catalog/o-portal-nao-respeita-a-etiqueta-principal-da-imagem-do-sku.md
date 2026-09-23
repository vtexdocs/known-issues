---
title: 'O portal não respeita a etiqueta "Principal" da imagem do SKU.'
slug: o-portal-nao-respeita-a-etiqueta-principal-da-imagem-do-sku
status: PUBLISHED
createdAt: 2022-12-07T20:47:12.000Z
updatedAt: 2026-09-23T17:24:25.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: portal-dont-respect-the-tag-principal-of-skus-image
locale: pt
kiStatus: Backlog
internalReference: 712443
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Uma loja precisa configurar a imagem **Principal** independentemente da ordem em que foi carregada no sistema. Atualmente, o sistema não respeita a tag **Principal** e acaba usando a primeira imagem registrada como principal.

## Simulação

1. Configure duas imagens no SKU.

2. Tente alterar a imagem principal usando o botão **Principal** na lista de imagens.

3. Verifique na loja virtual se a alteração funcionou.

## Workaround

Sempre defina a imagem desejada como Principal como a primeira imagem registrada para o SKU. Isso envolve mais trabalho, pois será necessário apagar as imagens e recarregá-las.